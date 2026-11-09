# React Hooks

[Course Notes - Hooks](https://react-v9.holt.courses/lessons/core-react-concepts/hooks)

## Creating the Order Component

We don't know when React will choose to render/re-render our components. React is going to try and re-render only when it is necessary. We want avoid putting side effects in our components partly for that reason.

Hooks are special functions in React. Hooks are used to introduce interactivity, side effects, or additional functionality to React components.

- The `value` attribute sets the current value of the input element to match the component's state.
- `useState` is by far the most commonly used hook in React.
- Hooks **must never** be used inside conditionals or loops.
  - Always call hooks in the top level of a component.
  - Every hook must be run in the same order.

## `useState` Hook

```jsx
import { useState } from "react"

// the useState hook, it returns the values and the functions needed to mutate
const [pizzaType, setPizzaType] = useState("pepperoni")
const [pizzaSize, setPizzaSize] = useState("M")
```

> [!NOTE]
> See [Order.jsx](../src/Order.jsx) for the full example.

- Called with a default value.
- Returns an array with the current state value and a setter to update the state.
- Calling the setter requests an update to the state of specified variable. The component then will re-render with the new state value.

## More Notes on React Components

- The function body of a component may be run several times during rendering, so avoid heavy computations there.
- Named functions will show up in stack traces so are good to use for that reason.
- Also avoid side effects and mutable state in our render function (see below):

### Components Must Be Pure

I just wanted to expand my understanding here. This example illustrates the point nicely:

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
      {/* This is also okay because this impure function is not called here, React calls it in
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

## Accessibility

- React recommends explicit event handlers on form elements as this does work better with accessibility tech like screen readers.

## `useEffect` Hook

[Course Notes](https://react-v9.holt.courses/lessons/core-react-concepts/effects)

The `useEffect` hook is used for managing a side effect, like an API request. This hook allows execution of code at specific points in a components lifecycle.

```jsx
// This is an impure function, we don't want to run this every time the component is rendered
async function fetchPizzaTypes() {
  const pizzasRes = await fetch("/api/pizzas")
  const pizzasJson = await pizzasRes.json()
  setPizzaTypes(pizzasJson)
  setLoading(false)
}

// The second argument specifies that changes to which variables should trigger useEffect. If
// we leave this blank useEffect will be called each time the component renders. An empty array
// means we trigger useEffect only once.
useEffect(() => {
  fetchPizzaTypes()
}, [])
```

> [!NOTE]
> If you add props to the array second argument the `useEffect` hook will fire anytime one of the props changes. Use the [] empty array to fire once on initial page load.

You cannot make a direct async call to an async function with a return value as they always return a `Promise`. The `useEffect` hook always expects `undefined` or a callback function to be returned. To work around this, wrap your async calls in an async function that does not return anything.

## Keys

In this code below the `key` is important. When React is rendering an array it does not know which elements are new (vs. having been re-ordered). If anything changes it will discard the component and re-render it. `key` is a unique identifier for each component that prevents this problem. If React sees that all the same keys are in a component tree it will not discard/re-render it. Make sure these are unique, a database `id` is used 99% of the time.

```jsx
{
  pizzaTypes.map((pizza) => (
    <option key={pizza.id} value={pizza.id}>
      {pizza.name}
    </option>
  ))
}
```
