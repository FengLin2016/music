var Sequelize = require('sequelize');
var dbConfig = require('../db.config');
var sequelize = new Sequelize(dbConfig);
// definition
var Music = sequelize.define('Music', {
    // auto increment, primaryKey, unique
    id : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true, unique : true},

    // comment
    title : {type : Sequelize.STRING, comment : 'Music title'},
    // comment
    singer : {type : Sequelize.STRING, comment : 'singer'},
    // comment
    mp3 : {type : Sequelize.STRING, comment : 'mp3'},

    // allow null
    description : {type : Sequelize.TEXT, allowNull : true},

    // default value
    deadline : {type : Sequelize.DATE, defaultValue : Sequelize.NOW}
});

module.exports = Music;