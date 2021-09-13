const siteRouter = require('./site');
const newsRouter = require('./news');
const coursesRouter = require('./courses');

function route(app) {
    //render news
    app.use('/news', newsRouter);
    //render home
    app.use('/', siteRouter);
    //render courses
    app.use('/courses', coursesRouter);
    //render search
    app.use('/search', siteRouter);
}

module.exports = route;
