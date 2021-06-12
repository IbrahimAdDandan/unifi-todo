const TodoRepo = require('../repositories/todo.repo.mongo');


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
        if(!req.body) {
            res.status(400).json('todo is required!');
        }
        if(!req.params.id) {
            res.status(400).json('id is required!');
        }
        const result = await TodoRepo.update(req.body, req.params.id);
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

module.exports.getbyUser = async (req, res) => {
    try {
        if(!req.params.userId) {
            res.status(400).json('id is required!');
        }
        const result = await TodoRepo.getByUserId(req.params.userId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

