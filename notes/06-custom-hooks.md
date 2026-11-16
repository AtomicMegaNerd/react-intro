# Custom Hooks

Hooks are composable. Custom hooks are dirt simple. They are just functions that call other hooks. There is no special sauce or magic.

For an example see [usePizzaOfTheDay](../src/usePizzaOfTheDay.js)

> [!IMPORTANT]
> Remember that hooks must be called in the same order each time, at the top level of the function.

- The initial render returns null or a loading state.
- By convention hooks always start with `use` (i.e. `usePizzaOfTheDay`). Following this convention allows linters to perform useful checks.
- Opinions are sharply divided on where and how to use custom hooks.
  - Some argue that put all effects in custom hooks. The idea here is that these are easily testable in isolation.
  - Others argue that all effects should go directly into components.
  - The instructor leans more toward the first style, but only if the effect is shared. If the effect is used in one component only it is fine in his view to put the effect hooks directly into the component. This seesm reasonable.

> [!IMPORTANT]
> Effects run after the render is complete.

## useDebugValue

Example:

```jsx
// Allows us to see the value of the hook in React Developer Tools
useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.id}: ${pizzaOfTheDay.name}` : "loading...")
```

You will see the string in the developer tools for that component. But the instructor uses this sparingly.

## A note on the `spread` operator

```js
// This is roughly equivalent to something like ++ in haskell in that ...cart adds all
// of the elements from cart into a new array, adds the items defined in the remaining
// elements (in this case one) and returns a new array. This is not a function it is an
// array definition, it just feels like a function kind of. This syntax is actually
// pretty ridiculous if I am being honest.
setCart([...cart, { pizza: selectedPizza, size: pizzaSize, price }])
```

Other examples:

```js
// Add all items from oldItems along with 9, 10, 11, 12 to a new array
const newItems = [...oldItems, 9, 10, 11, 12]

// Add all items both oldItems arrays into a new array
const newItems = [...oldItems1, ...oldItems2]
```
