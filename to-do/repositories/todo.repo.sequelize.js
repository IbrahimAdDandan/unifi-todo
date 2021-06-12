const ToDo = require('../models/todo.model.sequelize').ToDo;
const logger = require('../../config/logger.config');


module.exports.create = async (todo) => {
    try {
        return await ToDo.create(todo);
    } catch (error) {
        logger.error(error);
        throw new Error('Can not get data now, please contact the developer');
    }
};

module.exports.update = async (todo) => {
    try {
        return await ToDo.update(todo, {
            where: {
                id: todo.id
            }
        }).exec();
    } catch (error) {
        logger.error(error);
        throw new Error('Can not get data now, please contact the developer');
    }
};


module.exports.delete = async (id) => {
    try {

        return await ToDo.destroy({
            where: {
                id: id
            }
        });
    } catch (error) {
        logger.error(error);
        throw new Error('Can not get data now, please contact the developer');
    }
};

module.exports.getOne = async (id) => {
    try {
        return await ToDo.findByPk(id);
    } catch (error) {
        logger.error(error);
        throw new Error('Can not get data now, please contact the developer');
    }
};