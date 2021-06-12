const TodoRepo = require('../repositories/todo.repo.sequelize');

module.exports.create = async (req, res) => {
    try {
        if(!req.body) {
            res.status(400).json('todo is required!');
        }
        const result = await TodoRepo.create(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
};


module.exports.update = async (req, res) => {
    try {
        todo = req.body;
        if(!todo) {
            res.status(400).json('todo is required!');
        }
        if(!todo.id) {
            todo.id = req.params.id;
        }
        const result = await TodoRepo.update(todo);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
};


module.exports.delete = async (req, res) => {
    try {
        if(!req.params.id) {
            res.status(400).json('id is required!');
        }
        const result = await TodoRepo.delete(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
};


module.exports.getOne = async (req, res) => {
    try {
        if(!req.params.id) {
            res.status(400).json('id is required!');
        }
        const result = await TodoRepo.getOne(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

