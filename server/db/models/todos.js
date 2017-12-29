const Sequelize = require('sequelize');
const db = require('../index');

const Todo = db.define('todo',{
    task:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    due:{
        type: Sequelize.DATE,
        allowNull: false
    },
    completed:{
        type: Sequelize.ENUM('complete', 'incomplete'),
        defaultValue: 'incomplete'
    },
    place:{
        type:Sequelize.STRING
    }
});

Todo.prototype.overdue = function(){
    return this.getDataValue('due')
}

module.exports = {
    Todo
}