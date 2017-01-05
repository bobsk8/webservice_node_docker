'use strict';
const
  models = require('../models');

module.exports.index = (req, res) =>{
  models.Post.findAll()
    .then((posts) => {
      res.send(posts);
    })
    .catch((err) => {
      res.redirect('/db/init');
    });
}

module.exports.show = (req, res) => {
  models.Post.findById(req.params.id)
    .then((post)=>{
      res.send(post);
    })
    .catch((err)=>{
      res.end('404');
    });
}

module.exports.edit = (req, res) => {
  models.Post.findById(req.params.id)
    .then((post)=>{
      res.send(post);
    })
    .catch((err)=>{
      res.end('404');
    });
}

module.exports.update = (req, res) => { 
  models.Post.update({
      title: req.body.title,
      body : req.body.body
    },{
      where: { id: req.param('id') }
    })
    .then(()=>{
      console.log( req.body.title);
      res.send(models.Post.update);
    })
    .catch((err)=>{
      res.end('404');
    });
}

module.exports.new = (req, res) => {
  res.render('posts/new');
}

module.exports.create = (req, res) => {
  models.Post.create({
    title: req.body.title,
    body : req.body.body
  })
  .then(()=>{
    res.send(models.Post.create);
  })
  .catch(()=>{
    res.end('db error');
  });  
}

module.exports.destroy = (req, res) => {
  models.Post.destroy({ where: { id: req.param('id') } })
    .then(()=>{
      res.send(req.param('id'));
    })
    .catch(()=>{
      res.end('db error');
    });  
}