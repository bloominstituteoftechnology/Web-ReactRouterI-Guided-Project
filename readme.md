# How to Run this App
  * Clone repository.
  * Run `npm install` or `yarn install`.
  * Run `npm run dev` or `yarn run dev`.
  * Run `npm test` or `yarn test`.
  * Serve `index.html` using `live-server` or similar.

# Objectives
  * Learn React Router.

# Requirements
We need `node` & `npm`, as well as packages `live-server` and `eslint` installed _globally_. VSCode's `eslint` extension is recommended. Command line commands are run inside the project folder. This guide uses npm but should work the same using yarn.

# Steps

## The history api
  * Manipulating the browser history with the `history` object.
  * Show this MDN page: `https://developer.mozilla.org/en-US/docs/Web/API/History_API`.
  * Demonstrate the methods on `history`: `forward()`, `back()`, `go()`.
  * Local `location.pathname` can be changed programmatically without causing reload. 
  * Adding an entry to the history: `history.pushState()`.
  * Listening for the `popstate` event. Only triggers when interacting with browser!

## Implementing a simple React Router
  * Build a class `Link` component that uses `history.pushState()` to navigate the user without reload.
  * Explain we would like components to render only if `location.pathname` matches a `path` prop.
  * Build a HOC named `withRouteMatching` that enriches wrapped components with this funcionality.
  * This HOC should subscribe to `location.pathname` changes by adding a listener for the `popstate` event.
  * The listener for `popstate` should update state with the current `location.pathname`.
  * The HOC should go ahead and render the component if no `path` prop is passed.

## React Router
  * Explain the BrowserRouter component.
  *