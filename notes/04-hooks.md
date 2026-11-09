# React Hooks

[Course Notes - Hooks](https://react-v9.holt.courses/lessons/core-react-concepts/hooks)

## Creating the Order Component

We don't know when React will choose to render/re-render our components. React is going to try and re-render only when it is necessary. We want avoid putting side effects in our components partly for that reason.

## Key Points

- Hooks are used to introduce interactivity, side effects, or additional functionality to React components.
- The function body may be run several times during rendering, so avoid heavy computations there.
- We want to avoid side effects and mutable state in our render function.
- Named functions will show up in stack traces so are good to use for that reason.
- The `value` attribute sets the current value of the input element to match the component's state.
- Hooks **must never** be used inside conditionals or loops.
  - Every hook must be run in the same order.
- `useState` is by far the most commonly used hook in React.

### Components Must Be Pure

This example illustrates the point nicely:

```jsx
// React calls this function for the Pizza component each time the component is rendered.
// All of the code that RUNS inside of here must be pure.
const Pizza = (props) => {
  // Defining this function body is fine if we do not call it inside of Pizza. Passing this to a
  // handler (not executed when this function runs is fine.
  function superImpureFunc() {
    // Random effects galore
  }

  // Actually calling impure functions inside of Pizza is NOT okay, even if it doesn't modify the
  // JSX. Do NOT do this
  superImpureFunc()

  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img src={props.image} alt={props.name} />
      {/* This is also okay because this impure function is not called here, react calls it in
       response to events which is separate from the rendering of the component */}
      <button onClick={superImpureFunc}>I am not a Monad</button>
    </div>
  )
}
```

## Data Binding

Think of two-way data binding as automatic synchronization in both directions:

1. `data` → `screen`: the application’s value appears in the input.
2. `screen` → `data`: when the user changes the input, the application’s value updates too.

> [!IMPORTANT]
> React doesn't do the 2nd step automatically. It makes you use hooks to manage changes of state. This makes React more verbose but also easier to learn.
