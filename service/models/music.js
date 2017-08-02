var Sequelize = require('sequelize');
var dbConfig = require('../db.config');
var Menu = require('./Menu');
var sequelize = new Sequelize(dbConfig);
// definition
var Music = sequelize.define('Music', {
    // auto increment, primaryKey, unique
    id : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true, unique : true},

    // comment
    title : {type : Sequelize.STRING(20), comment : 'Music title'},
    // comment
    singer : {type : Sequelize.STRING(50), comment : 'singer'},
    // comment
    img : {type : Sequelize.STRING(50), comment : 'img'},
    menu : {type : Sequelize.INTEGER, comment : 'menu ID'},
    // comment
    mp3 : {type : Sequelize.STRING, comment : 'mp3'},

    // allow null
    description : {type : Sequelize.TEXT, allowNull : true},

    // default value
    // deadline : {type : Sequelize.DATE, defaultValue : Sequelize.NOW}
},{
    charset: 'utf8'
});

// 定义一对一的关系
Music.belongsTo(Menu,{as:'Menu',foreignKey:'menu'})

module.exports = Music;