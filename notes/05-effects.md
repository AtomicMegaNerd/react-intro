# Effects

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
