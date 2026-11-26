# Portals

[Course Notes](https://react-v9.holt.courses/lessons/advanced-react/portals)

## Modals

Modals are something the instructor hates but he is going to show us how to do them anyway. Portals are useful for having a side panels that change dynamically based on what page you are on.

It allows rendering outside of our app

## Example

```jsx
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

const Modal = ({ children }) => {
  const elRef = useRef(null)
  if (!elRef.current) {
    elRef.current = document.createElement("div")
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal")
    modalRoot.appendChild(elRef.current)

    // Cleanup function to prevent a resource leak
    return () => modalRoot.removeChild(elRef.current)
  }, [])

  return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal
```

- A `ref` is a reference to something that will always remain the same as the page is repeatedly re-rendered. Here we are creating a `<div>` element once, and then the ref holds a reference to that same div from that point forward.
- In the `useEffect` hook the return value is the clean-up function that will remove the child we appended when the component is unmounted. Otherwise we will have a memory leak. See [05 Effects - Cleanup Function](./05-effects.md#cleanup-function).

## Notes on the Implementation

### Destructuring with aliases

```jsx
const { isLoading, data } = useQuery({
  queryKey: ["past-orders", page],
  queryFn: () => getPastOrders(page),
  staleTime: 30000, // caching in ms
})

const { isLoading: isLoadingPastOrder, data: pastOrderData } = useQuery({
  queryKey: ["past-order", focusedOrder],
  queryFn: () => getPastOrder(focusedOrder),
  staleTime: 24 * 60 * 60 * 1000,
  // Can also use !!focusedOrder :-P, either approach converts the value to its
  // explicit Boolean equivalent (true or false), avoiding implied truthiness.
  enabled: Boolean(focusedOrder),
})
```

This isn't Modal related but when destructuring JS objects you can give them aliases. useQuery always returns its own properties like isLoading, data etc. However, if we have more than one of these in a component we can give each an alias to make them clearer. The instructor didn't bother renaming the useQuery properties but I'd probably do that for clarity:

```jsx
const { isLoading: isLoadingPastOrders, data: pastOrdersData } = useQuery({
  queryKey: ["past-orders", page],
  queryFn: () => getPastOrders(page),
  staleTime: 30000, // caching in ms
})
```

### Unmounting the Modal

> [!IMPORTANT]
> In React tearing down a component is called _unmounting_.

Notice that this implementation only renders the Modal if `focusedOrder` is not a falsy value (`null`/`undefined`/etc.) So if we set it to `undefined` that will _unmount_ the Modal component.

```jsx
<button onClick={() => setFocusedOrder()}>Close</button>
```

> [!NOTE]
> Calling `setFocusedOrder()` with no arguments sets `focusedOrder` to `undefined`. React will then unmount the Modal.

### Rendering null

In React rendering null means not rendering anything, which means nothing should be displayed in the section of the app being referred to.
