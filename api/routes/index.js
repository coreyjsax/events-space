const express = require('express');
const router = express.Router();

//Require controllers
const index_controller = require('../controllers/index')

//Index route
router.get('/', index_controller.get_root)

module.exports = router;

