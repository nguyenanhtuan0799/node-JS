const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Courses = new Schema(
    {
        name: String,
        desc: String,
        image: String,
        slug: String,
        videoID: String,
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Courses', Courses);
