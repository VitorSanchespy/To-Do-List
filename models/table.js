const { DataTypes } = require('sequelize')
const connect = require('./connect')

const Task = connect.sequelize.define('Task',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    conclusaotask:{
        type: DataTypes.ENUM('true', 'false'),
        defaultValue: 'false',
        allowNull: false,
    }
    
})

module.exports = Task

//Task.sync({force:true})

