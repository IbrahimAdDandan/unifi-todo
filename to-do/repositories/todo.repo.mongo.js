const ToDo = require('../models/todo.model.mongo').ToDo;
const logger = require('../../config/logger.config');
const mongoose = require('mongoose');


module.exports.create = async (todo) => {
    try {
        todo._id = new mongoose.Types.ObjectId();
        const todoRes = new ToDo(todo);
        return await todoRes.save();
    } catch (error) {
        logger.error(error);
        throw new Error('Can not get data now, please contact the developer');
    }
};

module.exports.update = async (todo, id) => {
    try {
        return await ToDo.updateOne({_id: id}, todo).exec();
    } catch (error) {
        logger.error(error);
        throw new Error('Can not get data now, please contact the developer');
    }
};

module.exports.delete = async (id) => {
    try {
        return await ToDo.deleteOne({_id: id}).exec();
    } catch (error) {
        logger.error(error);
        throw new Error('Can not get data now, please contact the developer');
    }
};


module.exports.getOne = async (id) => {
    try {
        return await ToDo.findById(id).exec();
    } catch (error) {
        logger.error(error);
        throw new Error('Can not get data now, please contact the developer');
    }
};