const {
    DataTypes
} = require('sequelize');
const sequelize = require('../../config/sequelize.config');
const Todo = require('../../to-do/models/todo.model.sequelize').Todo;

const sequelizer = sequelize.getSequelize();


const User = sequelizer.define('User', {
    id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
        type: DataTypes.STRING(25),
    },
    lastname: {
        type: DataTypes.STRING(25),
    },
    email: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING(25),
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'users'
});

User.hasMany(Todo);
Todo.belongsTo(User);

module.exports.User = User;

module.exports.syncUser = async function () {
    await this.User.sync({
        alter: true
    });
};