const courses = require('../models/Courses');
const { mongoToObj } = require('../../util/mango');
class coursesControllers {
    //[get] detail
    show(req, res, next) {
        courses
            .findOne({ slug: req.params.slug })
            .then((courses) => {
                res.render('courses/show', { courses: mongoToObj(courses) });
            })
            .catch(next);
    }
}

module.exports = new coursesControllers();
