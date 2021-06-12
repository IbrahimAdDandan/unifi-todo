const express = require('express');
const router = express.Router();
const toDoCtrl = require('../controllers/todo.controller.mongo');


router
    .route('/todos')
    .post(toDoCtrl.create);

router
    .route('/todos/:id')
    .get(toDoCtrl.getOne)
    .put(toDoCtrl.update)
    .delete(toDoCtrl.delete);


module.exports = router;