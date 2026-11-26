# Error Boundaries

[Course Notes](https://react-v9.holt.courses/lessons/advanced-react/error-boundaries)

## `react-error-boundary`

This is the component the instructor uses [react-error-boundary](https://www.npmjs.com/package/react-error-boundary). We are going to write our own so that we can learn class components.

## Class Components

All of the components that we wrote up until now have been _function components_. There are also an older kind of component called _class components_. Class components are not recommended but not deprecated (as of the time of recording the course).

See [ErrorBoundary.jsx](../src/ErrorBoundary.jsx) for an annotated example. Just note that this gets ugly with all of the complicated rules about `this`. These do use ES6/ES2015 classes.

### Notes

- We cannot use any hooks with class components (`useState`, `useEffect`, etc.)
- Every class component must have a `render()` method. This works mostly the same as the function component.
- `this.state` replaces the useState hook. The object contains all of the state for the component.
  - To change state use a `this.setState({ key: "value" })` function.
- Instead of `useEffect` we use the various lifecycle methods like `componentDidMount()`, `componentDidUpdate()`, etc.
- Props are a property of the class as well `this.props`.

## Using the Error Boundary

This first example is the wrong way, this will not work:

```jsx
function PastOrdersRoute() {
  // ... a bunch of code

  return (
    // If I try to put <ErrorBoundary> ... </ErrorBoundary> here wrapping this div the whole
    // component will blow up. So I have to put the ErrorBoundary wrapping besides this component.
    // Then I can wrap the child component. (see above)
    <ErrorBoundary>
      <div className="past-orders"></div>
    </ErrorBoundary>
  )
}
```

Instead define a separate component and then wrap the component we want to:

```jsx
// Wrapping PastOrdersRoute outside of the Component function so we can handle the error
function ErrorBoundaryWrappedPastOrderRoutes() {
  return (
    <ErrorBoundary>
      <PastOrdersRoute />
    </ErrorBoundary>
  )
}

function PastOrdersRoute() {
  return <div className="past-orders"></div>
}
```

> [!NOTE]
> An Error Boundary captures errors from its children, not itself.

### Props

You can do this to pass in the props with the spread operator. The instructor discourages most uses of the spread operator to pass props as React is meant to be more explicit. In this case where the ErrorBoundary is just a pass-through this is fine.

```jsx
function ErrorBoundaryWrappedPastOrderRoutes(props) {
  return (
    <ErrorBoundary>
      <PastOrdersRoute {...props} />
    </ErrorBoundary>
  )
}
```

### ErrorBoundary at Root?

Some people do put ErrorBoundary at root. That is valid in some cases.
