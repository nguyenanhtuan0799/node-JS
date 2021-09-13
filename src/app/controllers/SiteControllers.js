const Courses = require('../models/Courses');
const { multiMongoToObj } = require('../../util/mango');
class SiteControllers {
    //[get] home
    index(req, res, next) {
        // res.render('home');

        Courses.find({})
            .then((courses) => {
                res.render('home', { courses: multiMongoToObj(courses) });
            })
            .catch(next);
    }
    //[get] search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteControllers();
