# TanStack Router

[Course Notes](https://react-v9.holt.courses/lessons/ecosystem/tanstack-router)

[TanStack Router](https://tanstack.com/router/latest) is laser focused on client side routing whereas [react-router](https://reactrouter.com) also focuses more on server side routing.

We will also use [TansStack Query](https://tanstack.com/query/latest) as well.

## Turning a SPA into a MPA?

We will have multiple pages in our app using TanStack Router

## Component Tree Hack

Componets can only return one root. So if you do have siblings add a blank parent tag

```jsx
// Empy tag to make this component have one root
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

Just name the file `*.lazy.jsx` using a lower case name unlike React components which typically use upper-case. For example:

```text
order.lazy.jsx
```

## Links

Because this is client side routing we need to use the `Link` component instead of standard `<a href ...>` tags.

```jsx
import { Link } from "@tanstack/react-router"

function Index() {
  // Imagine other tags here this is a toy example
  return <Link to="/order">Order</Link>
})
```
