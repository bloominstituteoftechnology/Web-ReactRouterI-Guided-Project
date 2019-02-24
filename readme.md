# How to Run this App
  * Clone repository.
  * Run `npm install` or `yarn install`.
  * Run `npm run dev` or `yarn run dev`.
  * Run `npm test` or `yarn test`.
  * Serve `index.html` using `live-server` or similar.

# Objectives
  * Learn our options, old and new, for changing the URL programmatically.
  * Learn how we might conditionally render content based on URL.
  * Learn other reasons this might be useful: enabling back button, etc.
  * Learn about the History API.
  * Reimplement a crude version of React Router using the Histoy API.
  * Learn the basics of React Router: `Router`, `Route` and `Link`.

# Requirements
We need `node` & `npm`, as well as packages `live-server` and `eslint` installed _globally_. VSCode's `eslint` extension is recommended. Command line commands are run inside the project folder. This guide uses npm but should work the same using yarn.

# Steps

## The history api
  * In the old days, setting window.location was the only way to programmatically change the URL.
  * Unfortunately this technique causes a full page reload and a 404 if the page does not exist.
  * To avoid a reload, the `hashbang` method was used to change the URL of the browser.
  * Now we can manipulate the browser history with the `history` object.
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
  * Explain the `BrowserRouter` component.
  * Explain the `Route` component.
  * Explain the `Link` component.
  * Explain the difference between `render` and `component` props in `Route`.