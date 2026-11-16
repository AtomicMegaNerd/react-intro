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
