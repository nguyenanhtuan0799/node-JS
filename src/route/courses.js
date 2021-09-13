const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/coursesController');

// router cua3 slug
// router.get('/:slug',newsController.show);
router.get('/:slug', coursesController.show);

module.exports = router;
