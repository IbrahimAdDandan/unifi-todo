const User1 = require('../user/models/user.model.mongo').User;
const User2 = require('../user/models/user.model.sequelize').User;
const initData = require('./seed.data.repo');

module.exports.getMongoUser = async (req, res) => {
    try {
        const result = await User1.find().exec();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports.getSequlelizeUser = async (req, res) => {
    try {
        const result = await User2.findAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports.createDefaultUser = async (req, res) => {
    try {
        const result = await initData.createDefaultUser();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
};