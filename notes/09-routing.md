# TanStack Router

[Course Notes](https://react-v9.holt.courses/lessons/ecosystem/tanstack-router)

[TanStack Router](https://tanstack.com/router/latest) is laser focused on client side routing whereas [react-router](https://reactrouter.com) also focuses more on server side routing.

We will also use [TanStack Query](https://tanstack.com/query/latest) as well.

## Turning a SPA into a MPA?

Not really. It does simulate it though. Everything is still client side.

## Component Tree Hack

Components can only return one root. So if you do have siblings add a blank parent tag

```jsx
// Empty tag to make this component have one root
<>
  <CartContext value={cartHook}>
    <div>
      <Header />
      <Outlet />
      <PizzaOfTheDay />
    </div>
  </CartContext>
  <TanStackRouterDevtools />
</>
```

## Lazy Loading

> [!NOTE]
> lazy-loading can cause a flash when page transitions occur. Not worth it if the sources involved are really small.

First name the file `*.lazy.jsx` using a lower case name unlike React components which typically use upper-case. For example:

```text
order.lazy.jsx
```

Then use the `createLazyFileRoute(...)` function to create the lazy route.

## Links

Because this is client side routing we need to use the `Link` component instead of standard `<a href ...>` tags for navigating within our app.

```jsx
import { Link } from "@tanstack/react-router"

function Index() {
  // Imagine other tags here this is a toy example
  return <Link to="/order">Order</Link>
})
```

## The Cart Stays Full

If we leave the cart by clicking on the header to go back to the index route the cart is not emptied because the root route is not un-rendered! Cool!
