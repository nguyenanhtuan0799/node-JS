
const siteRouter = require('./site');
const newsRouter = require('./news');



function route(app){
  //render news
  app.use('/news', newsRouter);
  //render home
  app.use('/', siteRouter);
  //render search
  app.use('/search', siteRouter);
}

module.exports = route;