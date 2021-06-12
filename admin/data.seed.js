require('../config/mongo.config');
require('../config/sequelize.config');
const User1 = require('../user/models/user.model.mongo').User;
const User2 = require('../user/models/user.model.sequelize');
const ToDo = require('../to-do/models/todo.model.sequelize');
const env = require('../config/environment');
const bcrypt = require('bcryptjs');
const logger = require('../config/logger.config');
const mongoose = require('mongoose');


getUserObject = () => {
    const password = env.defaultUserPass;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return {
        _id: new mongoose.Types.ObjectId(),
        firstname: 'first',
        lastname: 'last',
        email: 'user@domain.mail',
        username: env.defaultUsername,
        password: hashedPassword
    }
}
const seed = async () => {
    try {
        const user = new User1(getUserObject());
        await user.save();
        await User2.syncUser();
        await User2.User.create(getUserObject());
        await ToDo.syncTodo();
        logger.info('default user created successfully');
        console.log('default user created successfully');
    
    } catch (error) {
        logger.error(`${Date.now}: ${error}`);
        console.error('user already added or a connection error, go to log!');
    }
};

seed();
