# Handling User Input

[Course Notes](https://react-v9.holt.courses/lessons/core-react-concepts/handling-user-inputs)

## Why `onSubmit` instead of `onClick` for the form?

This is because onSubmit handles both mouse clicks and using enter while also working better
with screen readers and related accessibility technology.

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

## Using array index for key - when is it okay?

In [Cart.jsx](../src/Cart.jsx) array index was used as the key. According to the instructor this is okay when there are no unique identifiers available for the list items. For example the list items may not be unique (multiple identical items in the cart) and no other unique property exists to differentiate them.

## One Way Data Flow

React only allows data to flow from parent to child. Modifying the data passed from the parent in the child is not okay in React. When a component (not always the direct parent) creates a prop and passes it to a child, the parent that created the prop still owns that prop. Only it (the owning component) can make changes.

The instructor referred to this as one-way data flow.
