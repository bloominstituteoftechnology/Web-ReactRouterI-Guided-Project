# How to Run this App
  * Clone repository.
  * Run `npm install` to bring in deps.
  * Run `npm run dev` to run webpack with a watcher.
  * Run `npm run server` to spin up a development server.
  * Run `npm test` to run tests with Jest.

# Objectives
  * Learn our options, old and new, for changing the URL programmatically.
  * Learn how we might conditionally render content based on URL.
  * Learn other reasons this might be useful: enabling back button, etc.
  * Learn about the History API.
  * Reimplement a crude version of React Router using the History API.
  * Learn the basics of React Router: `Router`, `Route` and `Link`.

# Requirements
We need `node` & `npm`. VSCode's `eslint` extension is recommended. Command line commands are run inside the project folder. This guide uses npm but should work the same using yarn.

# Steps

## The history api
  * In the old days, setting window.location was the only way to programmatically change the URL.
  * Unfortunately this technique causes a full page reload and a 404 if the page does not exist.
  * To avoid a reload, the `hashbang` method was used to change the URL of the browser.
  * Now we can manipulate the browser history with the `history` object (without causing reload).
  * Show this MDN page: `https://developer.mozilla.org/en-US/docs/Web/API/History_API`.
  * Demonstrate the methods on `history`: `forward()`, `back()`, `go()`.
  * Adding an entry to the history: `history.pushState()`.
  * Listening for the `popstate` event. Only triggers when interacting with browser (anchor tags, back button...)!

## React Router
  * Explain the `BrowserRouter` component.
  * Explain the `Route` component.
  * Explain the `Link` component.
  * Investigate the props coming into a component rendered with `Route`.
  * See how these components have insight into the current location.
  * See how these components can have navigation code using `props.history`.
  * Explain the difference between `render` and `component` props in `Route`.

## Implementing a Link Component That Changes URL locally (stretch)
  * Build a class `Link` component that uses `history.pushState()` and an anchor tag to navigate user without reload.
  * The anchor tag within `Link` should have an `href` of `"#"` and an `onClick` handler that pushes the new path.
  * Replace anchor tags inside `nav` with `Link` elements that take a `to` prop.

## Implementing a withRouteMatching HOC (stretch)
  * Explain we would like the wrapped component to render conditionally, depending on the `path` prop.
  * The HOC should have a state of `path` where we will keep track of `location.pathname`.
  * The HOC should render the wrapped component if no `path` prop is passed.
  * The HOC should render the wrapped component if the `path` prop matches `location.pathname`.
  * The HOC should render `null` if the passed `path` prop does not match `location.pathname`.
  * The HOC should enrich the wrapped component with a `currentPath` prop that evaluates to `location.pathname`.
  * The HOC should subscribe to `location.pathname` changes by adding a listener for the `popstate` event.
  * We will attach to the `window` object a listener for `popstate` on `componentDidMount`.
  * We need to use `setState` on the `popstate` listener to cause a re-render on URL change.
  * The listener for `popstate` should update `state.path` with the current `location.pathname`.
