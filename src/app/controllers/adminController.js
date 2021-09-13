const courses = require('../models/Courses');
const { mongoToObj } = require('../../util/mango');
class adminControllers {
    //[get] create

    create(req, res, next) {
        res.render('admin/create');
    }
    //[post] create

    store(req, res, next) {
        // res.json(req.body);
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoID}/hqdefault.jpg`;
        const course = new courses(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((e) => {});
    }
}

module.exports = new adminControllers();
