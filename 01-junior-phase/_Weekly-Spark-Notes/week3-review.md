# Single Page Applications

## What is a single page application?
A single page application (SPA) is a website that fits on a single web page with goal or providing a more fluid and interactive user experience. With SPAs, a single view is loaded and then JavaScript is used to manipulate the DOM as the user interacts with the page. Instead of the server sending page new HTML pages each time a user clicks on a link, an AJAX request is made to fetch new data from the server, which is then used to update what the user sees on the page via DOM manipulation.

## What is the difference between making a network request via AJAX vs. making a request via the URL bar?
One way to make a request to the server is to update the URL bar, which makes a request to the server and will be handled by a route, which will send back a response. An AJAX request does not require the URL bar to be updated. An AJAX request is a background HTTP request using JavaScript and no page refresh is necessary.

## How do you use the fetch API to make AJAX requests?
[Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
```
 const response = await fetch(‘/route’)
 const data = await response.json()
```

## What is are the differences between ES6 modules and CommonJS?
CommonJS influenced the module system used by node, and it uses `require` and `module.exports`. ES6 modules use a different set of keywords:

fileA
```
export thing1
export thing2
export default thing3
```

fileB
```
import {thing1, thing2} from ‘./fileA’
import thing3 from ‘/.fileB’
```

## When would you use ES6 modules?
* Browser-side JavaScript: use import/export and use webpack to compile your code; a module bundler, like webpack, interprets and loads a module written in ES6 module format and generates a bundle of all the code at build time.
* Node: continue to use require and module.exports; however, you can use ES6 modules in Node only if you have a transpiler like Babel to transpile the code to an ES5 module format that is supposed by Node.

# React

## What is JSX?

JSX adds an `<html>`-like syntactical extention to javascript.

Files using JSX MUST be processed into true javascript before execution.

```js
<div className="nice-block">Yes!</div>
```

Compiles down to:
```js
React.createElement("div", { className: "nice-block"}, "Yes!");
```

Inside JSX, javascript expressions may be embedded, enclosed in the curly ones: `{}`

```js
const color = "red";
<div>The apple is {red}</div>
```

All the regular html and svg tags are available in JSX. Additionally, custom elements can be specified.

These are differentiated by their casing, `<NavigationBar/>`. Custom elements must be defined, and correspond to either a class with a `render` method or a render function. Either must return more <JSX/>.

## What is the difference between a `function` component and a `class` component?
The key difference is that a `class` component has:

* an internal state object and method to update state
* lifecycle hooks

In a class component, props are accessed via `this.props`. Function components recieve props as an argument.


## What are the basic parts of the react component lifecycle?
There are more lifecycle hooks that we will cover in the following weeks. But these will serve you well for now.

There are three main phases of a component life cycle:


* First render/mounting
  * In the first render, the `constructor` method is invoked.
  * Then the `render` method is invoked.
  * Then the component is mounted into the DOM.
  * Then the `componentDidMount` lifecycle method is invoked

* Updating state/props after first render
  * `render` method is invoked
  * new JSX is compared to previous render output
  * DOM is brought into sync with the component

* Component is removed
  * the `componentWillUnmount` lifecycle hook is invoked
  * DOM node is removed

## What is the difference between props and state?

Props are passed through component to component and represented in JSX as html attributes.

State is internal to a component. It is common for state in one component to be passed down as props to another component.

# Testing Basics

## Why write tests?

- Reliability: Ensures code is working as intended
- Refactorability: Ensure code WILL CONTINUE to work after someone changes it
- Documentation: Documents what the code actually does.
- Accuracy: Precision/Accuracy/certainty of behavior. eg. Checking for odd edge cases (0, negative numbers, null values, etc)
 - Doesn’t mean there are no bugs, just that the code behaves correctly in the tested cases

## What are the main components of a test spec?

```js
//  ┌─ Describe block contains groups and subgroups of specs
//  │  Can be nested arbitrarily deep
//  │
//  │       ┌─ Descriptive label of entity to be tested
//  │       │
//  │       │          ┌─ Function to nest further describes or its
describe('myFunction', () => {

// ┌─ It block constitutes a single spec
// │
// │      ┌─ Descriptive label of one thing that should happen
// │      │
// │      │                          ┌─ function for testing that it actually happens
// │      │                          │
  it('should return a given value', () => {

    // ┌─ Assertion throws error if expected condition is not met, failing the test
    expect(myFunction()).to.equal(givenValue)
  })
})
```

## What should I test for?

Generally, you want to test for anything that you would want to know if your app stopped doing. In other words, whatever is important to the application. Often, you'll work on one specific feature at a time, which lends itself well to writing tests.

Examples:
  - Does my sorting function return a sorted array?
  - Does my route respond 404 to this request?
  - Does my react component show this message?

**Test for behavior, not implementation.** Remember our black box principle. You want to test that for a given set of inputs, you receive the desired output. Your tests should not care how your function (or route or component) arrives at the result. Implementation details change all the time, and you don't want to have to rewrite your tests every time you change an implementation detail.

## Describe the process of test-driven development

1. Write a failing test. It should describe the desired behavior of your component, and it should initially fail because you haven't implemented this behavior yet. If it passes before you've implemented the behavior, it's probably a worthless test.
2. Write the code to make the test pass.
3. Refactor the implementation as necessary
4. Repeat

# Async Testing

## What is the issue presented by asynchronicity in tests?

Consider the following code:

```js
describe('fs.readFile', () => {
  it('reads file contents', () => {
    fs.readFile('file1.txt', (err, data) => {
      if (err) throw err;
      expect(data.toString()).to.equal('Hello!');
    });
  });
});
```

The `it` function is synchronous. If we reach the end of it without throwing an error, the test passes. But the callback passed to `fs.readFile` is asynchronous and will therefore never run before the `it` function completes.

This test will *always* pass.

## What are two ways to handle async in tests?

The older, pre-promises style uses a `done` callback to tell mocha that the test is async, and should not be considered complete until the callback is invoked

```js
//                          ┌─ Callback!
it('reads file contents', (done) => {
  fs.readFile('file1.txt', (err, data) => {

    // calling done with an error will fail the test
    if (err) return done(err)

    // If the assertion throws, the test will fail as usual
    expect(data.toString()).to.equal('Hello')

    // calling done with no arguments signifies we're done and all is well
    done()
  })
})
```

You can also simply return a promise from your test, and mocha (or jasmine) will know that this is an async test and treat it appropriately

```js

describe('promisifiedReadFile', () => {
  it('reads file contents',  () => {
    return readFileAsync('file1.txt') // returning the promise
    .then(txt => expect(data.toString()).to.equal('Hello!'))
  });
})

// OR you can simply declare your `it` callback as async. Remember, all async functions return promises

describe('promisifiedReadFile', function() {
  it('reads file contents', async function() {
    const data = await readFileAsync('file1.txt')
    expect(data.toString()).to.equal('Hello!');
  });
});

```

**!! Notice that there is no try...catch block!** If expect throws, catch would capture - and mostly likely resolve - that error.  This is not what we want. Leave it, mocha will handle it!

# Testing Side Effects

## Why are non-pure functions harder to test than pure functions?

You need to set up external dependencies, such as files to be read, network responses, or randomized input on order to reliably test output.

## What are test spies?

Spies are wrapped functions that can record metadata about the use of a function, for instance:

- Whether the function was called
- How many times it was called
- The arguments it was called with
- and more!

They are useful for testing callback behavior, among other things.

## What are stubs?

Stubs are like spies, but instead of simply reporting on a function's usage, they replace the function entirely, returning a known value.

They are useful for replacing external requests (such as AJAX or DB Queries) or for testing functions that are dependent on the output of another function, such as Math.random()
