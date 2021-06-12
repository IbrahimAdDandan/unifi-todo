var express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const bearerToken = require('express-bearer-token');
const passport = require('passport');
require('./config/passport.config');
const config = require('./config/environment');
const todoRoutesSequelize = require('./to-do/routes/todo.route.sequelize');
const todoRoutesMongo = require('./to-do/routes/todo.route.mongo');
const initRoutes = require('./admin/seed.data.route');
const loginRoute = require('./user/routes/login.route');

var app = module.exports = express();

app.use(helmet());
app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bearerToken());

require('./config/mongo.config');
require('./config/sequelize.config');
require('./config/sequelize.config').testDBConnection();

app.use('/data-seed', initRoutes);

app.use('/api/v1', passport.authenticate('jwt', {
    session: false
}), todoRoutesSequelize);
app.use('/api/v2', passport.authenticate('jwt', {
    session: false
}), todoRoutesMongo);
app.use('/api', loginRoute);

app.get('/', function (req, res) {
    res.send('Hello from root route.');
});

app.get('**', function (req, res) {
    res.status(404).send('route not found');
});

if (!module.parent) {
    app.listen(config.port);
    console.log(`Express started on port ${config.port}`);
}