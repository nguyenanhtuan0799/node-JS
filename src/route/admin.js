const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/adminController');

// router cua3 slug
// router.get('/:slug',newsController.show);
router.get('/:create', adminController.create);
router.post('/:store', adminController.store);

module.exports = router;
