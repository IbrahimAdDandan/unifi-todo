const express = require('express');
const router = express.Router();
const loginCtrl = require('../controllers/login.controller');


router
    .route('/login')
    .post(loginCtrl.loginAuthenticate);

module.exports = router;