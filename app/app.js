'use strict';
const
  express    = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  // Routes
  task       = require('./routes/task'),
  post       = require('./routes/post'),
  app        = express();

var allowCors = function(req,res,next){
    res.header('Access-Control-Allow-Origin','http://localhost:82');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};

app.use(allowCors);

// settings
app.listen(3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended:true} ));
app.use(methodOverride('_method'));

/* GET home page. */
app.get('/', post.index);
app.get('/posts/new', post.new);
app.post('/posts/create', post.create);
app.get('/posts/:id([0-9]+)', post.show);
app.get('/posts/:id/edit', post.edit);
app.put('/posts/', post.update);
app.delete('/posts/:id', post.destroy);
app.get('/db/init', task.db_init);