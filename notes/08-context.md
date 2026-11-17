# Context

> [!IMPORTANT]
> Limit the use of contexts to situations where you need to share state in multiple places, like a user who is logged into your website for example. The instructors urges care here as context makes React easier to write but _much_ harder to debug.

This is very simple, but do not overuse it. Prop drilling is annoying but at least we know where the state is owned. Contexts can make things less clear if misused.

## A Note on Array Destructuring

This is object destructuring's cousin. Just return the first element of the array discard the result.

```js
// We only get cart back
const [cart] = useContext(CartContext)
```
