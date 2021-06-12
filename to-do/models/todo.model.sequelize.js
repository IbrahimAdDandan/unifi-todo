const {
    DataTypes
} = require('sequelize');
const sequelize = require('../../config/sequelize.config');

const sequelizer = sequelize.getSequelize();


module.exports.Todo = sequelizer.define('Todo', {
    id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(250),
    },
    desc: {
        type: DataTypes.STRING(500),
    }
}, {
    tableName: 'todo'
});


module.exports.syncTodo = async function () {
    await this.Todo.sync({
        alter: true
    });
};
