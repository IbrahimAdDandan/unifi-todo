const {
    Sequelize
} = require('sequelize');
const env = require('./environment.prod');
const logger = require('./logger.config');

const sequelize = new Sequelize(env.database1Name, env.database1Username, env.database1Password, {
    host: env.database1Host,
    dialect: env.database1Dialect,
    logging: false,
    pool: {
        max: 5,
        min: 1,
        idle: 10000,
        evict: 10000,
    }
});

module.exports.getSequelize = () => sequelize;


module.exports.testDBConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log(`Connection has been established successfully to ${env.database1Name}@${env.database1Host}.`);
        logger.info(`${new Date()}: Connection has been established successfully to ${env.database1Name}@${env.database1Host}.`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        logger.error(`${new Date()}: Unable to connect to the database:`, error);
    }
};