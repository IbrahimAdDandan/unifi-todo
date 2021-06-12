var express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const config = require('./config/environment');
const todoRoutesSequelize = require('./to-do/routes/todo.route.sequelize');
const todoRoutesMongo = require('./to-do/routes/todo.route.mongo');

var app = module.exports = express();

app.use(helmet());
app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

require('./config/mongo.config');
require('./config/sequelize.config');
require('./config/sequelize.config').testDBConnection();

app.use('/api/v1', todoRoutesSequelize);
app.use('/api/v2', todoRoutesMongo);

app.get('/', function (req, res) {
    res.send('Hello from root route.')
});


if (!module.parent) {
    app.listen(config.port);
    console.log(`Express started on port ${config.port}`);
}