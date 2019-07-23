const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const {db, Contact} = require('./db')
const app = express()
const PORT = 3000

// Logging middleware
app.use(morgan('dev'))

// Body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Static middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/api/contacts', (req, res, next) => {
  Contact.findAll({
    attributes: ['id', 'name', 'email', 'phone']
  })
    .then(contacts => res.json(contacts))
    .catch(next)
})

app.get('/api/contacts/:contactId', (req, res, next) => {
  Contact.findById(req.params.contactId)
    .then(contact => res.json(contact))
    .catch(next)
})

// For all GET requests that aren't to an API route,
// we will send the index.html!
app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

// Handle 404s
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handling endware
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message || 'Internal server error')
})

db.sync()
  .then(() => {
    console.log('The database is synced!')
    app.listen(PORT, () => console.log(`

      Listening on port ${PORT}
      http://localhost:3000/

    `))
  })
