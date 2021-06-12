var express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const config = require('./config/environment');
const todoRoutesSequelize = require('./to-do/routes/todo.route.sequelize');

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

app.use('/api', todoRoutesSequelize);

app.get('/', function (req, res) {
    res.send('Hello from root route.')
});


if (!module.parent) {
    app.listen(config.port);
    console.log(`Express started on port ${config.port}`);
}