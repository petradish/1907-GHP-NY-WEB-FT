const {db, Contact} = require('./server/db')
const seedData = require('./seed-data.json')

db.sync({force: true})
  .then(() => {
    return Promise.all(seedData.map(contact => Contact.create(contact)))
  })
  .then(() => {
    console.log(`
      Seed success!
    `)
    db.close()
  })
  .catch((err) => {
    console.error(`
      Oh noes!
    `)
    console.error(err.stack)
    db.close()
  })
