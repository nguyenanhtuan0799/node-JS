const Courses = require('../models/Courses');

class SiteControllers {
    //[get] home
    index(req, res) {
        // res.render('home');

        Courses.find({}, function (err, courses) {
            if (!err) {
                res.json(courses);
            } else {
                res.status(404).json({ error: 'ERROR!!!' });
            }
        });
    }
    //[get] search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteControllers();
