#!/usr/bin/env node

const {db, Todo} = require('../server/db')

const seed = async () => {
  await db.sync({force: true})

  await Todo.create({
    taskName: 'Buy dog food',
    assignee: 'Cody'
  })

  await Todo.create({
    taskName: 'Take over world',
    assignee: 'Cody'
  })

  db.close()
  console.log(`

    Seeding successful!
    Time to do stuff!

  `)
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})
