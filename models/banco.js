const Sequelize = require('sequelize')
const sequelize = new Sequelize('agendamentosweb_node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}