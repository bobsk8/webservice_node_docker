'use strict';
const
	models   = require('../models'),
  posts    = [
    {title: 'Rwanda', body: 'presbytery torridly yammadji Tibbu join bonavist deditician haplosis tomatillo Veadar bemean uphill bombardier spectacularly portitor putridly grittiness diuturnity cautioner stallenger coolheaded bulginess autotrophy whoopee'},
    {title: 'Gabon', body: 'coinventor freewoman tangalung Clinopodium trochleariform pseudohypertrophy outpaint Nuba incomposed merostome pleurenchymatous nondidactic melt verbenaceous picary schepen abscisse passionfulness Chionanthus mintage preadvancement coder refoment wafty'},
    {title: 'Chile', body: 'sawder regreet underyield offendedly nervation hypericism ichneutic nightlong nonascertainable Felis bricklaying amphiscii Dictograph demirep befrounce removable quadrivalency bryozoan eschatological nest incorporatedness barquantine taborin overinflative'},
    {title: 'Vatican City', body: 'unintelligentsia whalelike preremuneration tarkeean grigri untangibly colorrhaphy termen ridgebone plumemaker forisfamiliate pledget faddy talipedic glomerular unrecountable Monostomatidae echowise rubato sawsharper goutiness befall define manas'},
    {title: 'Djibouti', body: 'nondecadent sulphogel characinoid attrition sarcomatosis eying upgird terbium Blenniiformes barbarism grummeter banter tyrannizingly coalesce supersympathy wrongish rhematology prehesitate personage proctocystotomy unvenomous repersuasion overcurious nephroid'},
  ];

module.exports.db_init = (req, res) =>{
  console.log('initializing DB...');
  models.sequelize.sync({force: true})
    .then(()=> {
      console.log('DB has initialized');
      models.Post.bulkCreate( posts );
    });
}
