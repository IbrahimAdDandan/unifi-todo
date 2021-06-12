const express = require('express');
const router = express.Router();
const initCtrl = require('./seed.data.controller');



router
    .route('/user1')
    .get(initCtrl.getMongoUser);


router
    .route('/user2')
    .get(initCtrl.getSequlelizeUser);

router
    .route('/init')
    .get(initCtrl.createDefaultUser);

module.exports = router;