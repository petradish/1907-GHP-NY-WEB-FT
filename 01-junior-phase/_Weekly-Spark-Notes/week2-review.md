# Client Server Architecture

## What does client/server architecture indicate?

Client/server describes two roles in communication.

Clients initate requests for information.
Servers respond with the information.

## What is HTTP?

## What are the categories of HTTP status codes?

2xx: Okay, things went as expected.
3xx: Further information/guidance is returned. Most commonly this is a URL level redirect ("look somewhere else").
4xx: Problems. Often correctable, or at least explainable.
5xx: Errors. Typically this is a catastrophic error that cannot be correct by the client. The server is unreachable, or crashed in some way.

# Node

## What is a server?
A server is a program running on a computer connected to the internet, and its purpose is to serve content requested by remote clients. Servers are an integral piece of web applications. 

## What is node?
Node.js is a JavaScript runtime environment built on Chrome’s V8 engine, and it allows us to run JavaScript code on our operating system. We can build servers for our applications using Node.js. 

## What is asynchronous programming?
In synchronous programming, only one thing can happen at a time, which means that when a function is called, any subsequent function calls are not run until the first function call completes. This is often referred to as blocking code. Contrastingly, asynchronous programming, or non-blocking code, allows multiple things to happen at the same time. In other words, the execution order is not dependent on the command order. Asynchronous programming in JavaScript is event based, which means that when a function is executed, it kicks off some external process and registers an event handler (i.e. callback function) for when that process finishes. The callback function will execute when the process finishes. 

## What is the Express library?
The Express library allows us to easily create servers in Node and handle requests from the client via route handling. The library is an abstraction over Node’s built-in http module. 

## What is the purpose of middleware in Express applications?
Middleware is a term used to describe functions that are executed in between the server receiving the request (req) and responding with a response (res). Middleware functions are often responsible for parsing requests, logging, and handling errors.

## How and when do we utilize the next paramater in Express routes?
The next parameter is a function in Express which, when invoked, executes the middleware after the current middleware. If the current middleware function doesn’t end the request-response cycle by sending a response, it must call next() to pass the request to the next middleware function. Otherwise, the request is left hanging.

## What are the key differences between app.use and app.get?
-app.get is only used for GET requests and the URL specified in the route must exactly match the URL in the request in order for the code in that route to execute. 
-app.use handles all verbs (GET, POST, PUT, DELETE) and the URL specified in the route must start with the URL in the request in order for the code in that route to execute. 

## How are URL parameters handled in Express routes?
URL parameters are accessible in the the params property of the request object (req.params). If the Express route is “/puppies/:id”, Express will interpret the colon as a wildcard and attach whatever is after “/puppies/” to req.params. Therefore, if the request URL was “/puppies/100”, then req.params.id = 100 in the Express route. For the same request, if the Express route was “/puppies/:puppyId”, then req.params.puppyId = 100. 

# Intro to Relational Databases

## What is a relational database?

Generically speaking, it's an organized collection of data, stored and accessed electronically (thanks Wikipedia)

More specifically, the DB persists data to the filesystem, and is accessible by code. By accessible, we mean that it is:

* **Organized** - keeping data in collections of tables which have columns (properties) that describe rows (instances). Duplicated rows are not allowed, and rows generally have a unique, auto-incrementing primary key.

* **Queryable** - Can be queried using a (relatively) simple, declarative language. Ask for what you want, don't worry about how it's obtained.

* **Manageable** - Data and knowledge are now portable between systems and applications

## What is SQL and why do we use it?

SQL is a standard language by which we can query a relational database. (more below under Intro to SQL)

## What is NO-SQL?

NOSQL refers generically to databases that are Not Only SQL, such as graph databases or document databases.

## What are ACID guarantees?

* **Atomicity** - a set of operations must all succeed or fail as a unit. This is known as a transaction. The common example is when transferring money between bank accounts, each debit must have a matching credit. If either operation fails, the entire transaction is rolled back to its prior state.

* **Consistency** - You may define constraints on your data. The database may only move from one valid state to another. For instance, a column for age may be constrained to a positive integer, or a column for name may not allow null values. This allows you to make certain assumptions in your code about the data that you get back from the database.

* **Isolation** - A client connected to the database doesn't need to worry about whether there are other clients connected. Clients can safely request and update resources without worrying about other connected clients.

* **Durability** - Data is persisted to disk, not held in volitile memory. This means in the case of power failure, the data is preserved.


# Intro to SQL

## What are primary and foreign keys

A Primary Key is a column on a table that creates a non-null unique value for every row. A foreign key is a column on one table that refers to another table by its primary key. For instance:

```
Instructors                           Campuses
ID | name     | campus_id             ID | City
---+----------+-----------            --------------------
 1 | Ben      | 1                      1 | Chicago
 2 | Priti    | 1                      2 | New York
 3 | Omri     | 2
 4 | Gabriel  | 2
 ```

 * The ID columns are the primary keys for both tables.
 * The campus_id column on Instructors is a foreign key to Campuses. Here, Ben and Priti are instructors in Chicago, while Omri and Gabriel are instructors in New York.


## How do we use SELECT, FROM, WHERE, and JOIN?

* `SELECT` specifies which columns you would like included in the result set
  eg. `SELECT id, fname, lname...`
* `FROM` specifies which from which table you would like results
  eg. `...FROM STUDENTS...`
* `WHERE` specifies the condition which must be true in order for a row to be included in the result set
  eg. `...WHERE cohort='1807-FSA-CH'...`
* `JOIN` is used with `ON` to include data from another table in your result set
  eg. `JOIN campuses ON students.campus_id=campuses.id`

## What are the differences between inner, outer, left, and right joins?

* `INNER` - only include rows which have values on both sides of the `JOIN`
* `LEFT` - Include all rows from the first table (prior to the JOIN keyword) and any matches on the joined table
* `RIGHT` - Include all rows from the joined table and any matches from the first table
* `OUTER` - include all matching rows from both tables, and join them where possible.

## How can we 'alias' tables?

You can alias a table by including the alias with optional AS keyword after the table name:
eg:
```
SELECT * from instructors AS i
JOIN cohorts_instructors AS ci
ON i.id = ci.instructor_id
JOIN cohorts AS c
ON c.id = ci.cohort_id;
```

## How do we use ORDER BY and COUNT

* `ORDER BY` dictates which column or columns to sort the results by. By default, they will be sorted in ascending order, but you may also use the `DESC` keyword to reverse them.
  - eg. `SELECT * FROM students ORDER BY lname` returns all students, sorted alphabetically by last name
  - eg. `SELECT * FROM cohorts ORDER BY start_date DESC` returns all cohorts, with the most recent first

# Intro to Schema Design

## What is a Schema?

A Schema describes your database - The tables present and how they relate to each other, as well as the columns on those tables and their constraints.

## How do we illustrate database associations with an ERD?

An ERD uses boxes to describe the entities in a application, and ovals attached to those boxes to list the properties on those entities. Relationships are indicated by drawing lines between related entities and showing the cardinality/modality of each entity in the relationship

## What is data normalization?

Normalization is the process of organizing the columns (attributes) and tables (relations) of a relational database to minimize data redundancy and improve data integrity. For instance, if I want to assign a blog post to a category, it makes sense to store categories in their own table, and have my blog posts refer to those categories, rather than listing the name of the category in each row of the blog posts table.


# Node-PG & Async / Await

## What is a database driver?

A database driver is an installable module that bridges between a programming language and a database.

It abstracts the network connection and specifics of sending/recieving messages to/from the database server.

With a database driver, the level of operation is a string query.

```js
driver.query('select * from a_table')
```

## What is a Promise?

A promise is a JavaScript object that represents the eventual resolution of an asynchrounous action. This is similar to a sandwich counter. When you order your sandwich, they give you a ticket. Once the sandwich is ready, your number is called out.

## What are the advantages of Promises over callbacks?

Promises are portable values that can be passed to where they are needed. Callbacks invert this, the thing that needs the value must be passed to where the value is.

## Where can you use `async` and `await`?

`async` is placed in front of a function definition. `await` can ONLY be used inside of an `async` function.

```js
async function main () {
  console.log(await promisifiedReadFile('./path-to-file.txt', 'utf-8');
}
main();
```


# ORMs

## What is Object Relational Mapping, and why do we use it?

An ORM acts as a bridge between your code and the RDBMS. Using an ORM, data can be easily stored and retrieved from a database without writing SQL statements directly.

## How do we define and sync a model using Sequelize?

See slide 13 of the [lecture deck][orm-deck].

## How do we CRUD model instances using Sequelize?

Sequelize models and instances expose methods for doing so.

* Create: `Model.create({...})`
* Read: `Model.findById()` or `Model.findAll()`. There are several others, but these are the ones you'll probably use most
* Update: `Model.update()` to update multiple rows or `instance.save()` for individuals
* Delete: `Model.delete()` to delete multiple rows or `instance.delete()` for individuals

## What are Sequelize hooks and why do we use them?

Hooks allow you to add functions to be run when certain events occur on an instance. See slides 19-25 in the [ORM lecture][orm-deck].

[orm-deck]: 10-wikistack/01-intro-to-orms.pdf

## What are the differences between model and instance methods?

* Model methods operate on a table as a whole, for instance finding or updating multiple rows.
* Instance methods operate on a single row.

## How does Sequelize effect the 'belongsTo' and 'hasMany' associations?

Sequelize will create a foreign key for you. When defining a `belongsTo` relation on a model, the foreign key will be created on that model's table. When defining a `hasMany` relation, it will be defined on the opposite table.

for instance:

```
const User = db.define('user', {...})
const Pet  = db.define('pet',  {...})

// foreign key is on pets
Pet.belongsTo(User)
User.hasMany(Pet)   
```
