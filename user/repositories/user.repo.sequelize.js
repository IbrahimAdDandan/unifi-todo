const User = require('../models/user.model.sequelize').User;

/**
 * @param {String} username
 */
module.exports.existUser = async (username) => {
    try {
        return await User
            .findOne({
                where: {
                    username: username,
                    deleted: false,
                }
            });
    } catch (err) {
        throw new Error(err.message);
    }
};