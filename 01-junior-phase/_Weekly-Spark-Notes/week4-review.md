# React Router

## What is the purpose of the react-router-dom library?

The react-router-dom library is the routing library used for React web applications. It keeps the UI in sync with the URL, meaning that it uses the URL in the browser to determine what kind of presentation a visitor should receive without reloading the browser.

## What are the main components we import from react-router-dom?

* Router - HashRouter (adds a # after the root URL and preferable to use when you don’t have a server or server only responds to static files) or BrowserRouter (does not add a # and preferable to use when you have a server that will be able to handle any possible URL); the Router component should be the parent component of an application because when the URL changes, the Router component’s state will update, which initiates a render; therefore, when the route changes, all parts of an application should be given a change to update

* Route = Path + Component
`<Route path=‘/somePath’ component={SomeComponent} />` : if the path starts with `/somePath`, then the `SomeComponent` will render; if we want an exact matching of the path, then we add the `exact` prop to the `Route` component

* Link
`<Link to=‘/somePath’>Link to SomePath</Link>` : coupled with the Route example above, when a user clicks on the Link to SomePath, the URL bar will change to /somePath, which will then cause the `SomeComponent` to render

## What props are passed down by the Route component to the rendered component?

* match - contains information about how the route’s path matches the current URL; most notably, it includes a params key that parses the URL parameters

* history - used to manipulate the browser’s history programmatically using properties on the history object, such as history.push; the history prop can be used when you don’t want to use a Link and instead want to perform some sort of JavaScript before router user to another page

* location - contains information about where the url is now


## How do we pass additional props to the component being rendered by the Route component?

```
<Route path='/puppies' component={Puppies} />

vs.

<Route path='/puppies' render={(routeProps) => <Puppies {...routeProps} />} />
```
* the  `routeProps` in the above example are match, history, and location; if we do not need those props in the rendered component, we can omit them

---

# React Forms

## What is the difference between a controlled and an uncontrolled form component?

A controlled component has a value prop which is directly set (controlled) by application state. Changes to the value on state will update what you see on the form.

Uncontrolled components do not have a value prop tied to application state. Updates to state will NOT be reflected in the form component.

## What is the difference between application state and local state?

Application state is data that may be needed by multiple parts of your application. For instance, the logged-in user. This data should be managed high up on the state tree, where it can be passed down to wherever it may be needed.

Local state is data that is only needed by a particular component, such as ephemeral data input into a form. The rest of the application usually doesn't need to know what the user is typing into a form until the form is submitted. This state does not need to be shared with other components, and can therefore be isolated to just the form component

# Redux

## What are the main principles of Redux as a state management library?

* **Single Source of Truth** - You know exactly where all of your state is stored.
* **Data is Read-Only** - You can query the state of your app at any time. However, *changing* that state takes some work
* **Changes are requested through actions and are made with pure functions** - By making state changes with pure, synchronous functions, we have an auditable history of changes to our state. Makes things MUCH easier to reason about and debug

## How do you request to the store that it make a change to the state of your application?

You dispatch an action.

## Cool. What's an action?

I'm glad you asked. An action, at its simplest, is just an object with a `type` property. It may also have additional properties that are necessary for describing the desired change to the store's state. For instance, an action to deposit $10 into a bank account might look like this:

```js
{
  type: DEPOSIT,    // <-- required `type` property
  account: 4567789, // <-- additional properties as
  amount: 10.00     //     necessary to describe desired change
}
```

## What's a reducer?

A reducer is a **pure function**, which takes as its arguments an action and the existing state object, and returns a **new** state object.

## What happens when an action is dispatched?

When an action is dispatched, it is passed along with the current state object to the reducer. The reducer determines and returns the new state, which is replaced within the store. At this point, any callbacks that have been registered with `store.subscribe` are run.

# Action Types and Creators

## What's an action type? Why do we use them?

Action types are defined constants which name the actions that can be dispatched through a Redux store. For instance, instead of

```js
store.dispatch({ type: 'deposit' })
```

we would instead first define a `DEPOSIT` constant:

```js
const DEPOSIT = 'deposit'
store.dispatch({ type: DEPOSIT })
```

This ensures that if you mistype a constant when dispatching an action, you will see an obvious error pointing you toward your misspelling. Whereas if you simply passed a mistyped string as the type in your action, the action would silently fail to do anything in your reducer, as its type wouldn't match on any known types. This is a maddening kind of bug to try to track down.

## What's an Action Creator?

An action creator is a function that returns an action object. It can take as its arguments anything required to describe the action. For instance:

```js

// define our action type
const DEPOSIT = 'deposit'

// Action creator returns action object
const deposit = (account, amount) => ({ type: DEPOSIT, account, amount })

```

# Redux Middleware

## What's Redux Middleware? Why use it?

Middleware is a function that is executed on an action after it is dispatched, but before it reaches the reducer. It provides and extension point for Redux, and is useful for logging, crash reporting, talking to external APIs, etc.

## What form does middleware take?

Middleware is basically a curried function. It receives the store as its argument, returning a function that takes a `next` callback as its argument. *That* function returns *another* function which takes the action as its argument. At some point, the middleware must call `next(action)` to pass control onto the next registered middleware function, or on to the reducer.

```js
const someMiddleware = store => next => action => {
  // do something with or to the action...
  next(action) // then pass it on.
}
```

Or, without arrow functions:

```js
const someMiddleware = function(store) {
  return function(next) {
    return function (action) {
      // do something with or to the action...
      next(action) // then pass it on.
    }
  }
}
```

## How do you apply it?

You can import the `applyMiddleware` function from Redux, and pass it as the second argument to `createStore`

```js
import { createStore, applyMiddleware } from 'redux'
import someMiddleware from 'some-library'
import anotherMiddleware from 'another-library'

//... do some other stuff to set up your store and reducer...

const store = createStore(reducer, applyMiddleware(someMiddleware, anotherMiddleware))

```


