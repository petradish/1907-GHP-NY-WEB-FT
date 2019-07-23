# Test-First Linked List

**Note: be sure to read this README.md thoroughly, as well as the comments in the test spec (when you run the tests, a page should open in your browser that displays the comments in a friendly, readable format)**

---

Abstract Data Types (ADTs) are purely conceptual entities comprising information and allowed operations on that information. Data Structures (DSs) are actual programmatic solutions to implement an ADT. Both are very important to computer science in general and also a great way to better understand Object-Oriented Programming (OOP).

In this workshop, we are going to be writing the JavaScript implementations of some different ADTs and DSs. In the first part of this workshop, we will focus on Queues and Linked Lists. In the second part of this workshop, we will shift our attention towards Binary Search Trees and Hash Tables.

## Running

You should have Testem installed globally. *If not*: `npm install -g testem`.

1. Run `npm install` to install all the other software packages needed (called "dependencies")
2. Run `npm test` - this will cause the specs to run (you can view them at http://localhost:7357/), and will also open an html page with all of the test specs alongside their documentation.

### The Linked List DS

The LL operations are far easier to understand and account for if you diagram out the possible cases step-by-step with pencil and paper.

Compare the LL to the classic contiguous fixed Array (which does not exist in ES5 JavaScript). What are the pros and cons of each, and why?
