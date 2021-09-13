const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/F8_Education_dev');
        console.log('connect');
    } catch (e) {
        console.log('false');
    }
}

module.exports = { connect };
