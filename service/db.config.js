module.exports = {
    database: 'test',
    user: 'root',
    pass: '',
    dialect: 'mysql',
    port: 3306,
    models: 'models/**/*.js',
    sequelize: {
        define: {
            underscoredAll: true
        }
    }
}