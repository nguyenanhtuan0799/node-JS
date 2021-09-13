const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Courses = new Schema({
    name: String,
    desc: String,
    image: String,
    slug: String,
    videoID: String,
    createdAt: { type: Date, default: Date.now },
    UpdateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Courses', Courses);
