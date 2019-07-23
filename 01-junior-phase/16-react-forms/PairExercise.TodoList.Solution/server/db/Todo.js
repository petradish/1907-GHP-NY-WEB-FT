const Sequelize = require('sequelize')
const db = require('./db')

const Todo = db.define('todos', {
  taskName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  assignee: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Todo
