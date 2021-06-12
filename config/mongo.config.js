const mongoose = require('mongoose');
const env = require('./environment.prod');
const logger = require('./logger.config');

const uri = `mongodb+srv://owl:${env.database2Password}@${env.database2ClusterName}.slqgk.mongodb.net/${env.database2Name}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', function () {
    console.error('Unable to connect to the database:', error);
    logger.error(`${new Date()}: Unable to connect to the database:`, error);
});
db.once('open', function () {
    console.log(`Connection has been established successfully to ${env.database2Name}@${env.database2ClusterName}.`);
    logger.info(`${new Date()}: Connection has been established successfully to ${env.database2Name}@${env.database2ClusterName}.`);
});