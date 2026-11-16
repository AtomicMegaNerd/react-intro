# Custom Hooks

Hooks are composable. Custom hooks are dirt simple. They are just functions that call other hooks. There is no special sauce or magic.

For an example see [usePizzaOfTheDay](../src/usePizzaOfTheDay.js)

> [!IMPORTANT]
> Remember that hooks must be called in the same order each time, at the top level of the function.

Opinions are sharply divided on where and how to use custom hooks.

- Some argue that put all effects in custom hooks. The idea here is that these are easily testable in isolation.
- Others argue that all effects should go directly into components. The instructor leans more toward the first style, but this is not a hard fast rule.
