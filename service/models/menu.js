var Sequelize = require('sequelize');
var dbConfig = require('../db.config');
var sequelize = new Sequelize(dbConfig);
// definition
var Menu = sequelize.define('Menu', {
    // auto increment, primaryKey, unique
    id : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true, unique : true},

    // comment
    title : {type : Sequelize.STRING(20), comment : 'Menu title'},
    // comment
    // comment
    img : {type : Sequelize.STRING(50), comment : 'img'},
    // comment
    // allow null
    description : {type : Sequelize.TEXT, allowNull : true},

    // default value
    // deadline : {type : Sequelize.DATE, defaultValue : Sequelize.NOW}
},{
    charset: 'utf8'
});

module.exports = Menu;