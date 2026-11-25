# TanStack Query

[Course Notes](https://react-v9.holt.courses/lessons/ecosystem/tanstack-query)

## Install

We use bun, so this part is different than the link above:

```bash
bun i @tanstack/react-query@latest
bun i -D @tanstack/react-query-devtools@latest @tanstack/eslint-plugin-query@latest
```

Because we use `oxlint` Enabling the lints is also different. Add the following to `.oxlintrc.json`:

```json
{
  "jsPlugins": ["@tanstack/eslint-plugin-query"],
  "rules": {
    "@tanstack/query/exhaustive-deps": "error",
    "@tanstack/query/no-rest-destructuring": "warn",
    "@tanstack/query/stable-query-client": "error",
    "@tanstack/query/no-unstable-deps": "error",
    "@tanstack/query/infinite-query-property-order": "error",
    "@tanstack/query/mutation-property-order": "error"
  }
}
```

The rest of the setup should match what's in the course notes above.

## Replaces `useEffect` Hook for Many Cases

The instructor mentioned he often uses TanStack Query instead of `useEffect`.

## Using `useQuery` Hook

```jsx
// Instructor uses useState to track the current page for query pagination
const [page, setPage] = useState(1)

const { isLoading, data } = useQuery({
  queryKey: ["past-orders", page],
  queryFn: () => getPastOrders(page),
  staleTime: 30000, // caching in ms
})
```

- `queryKey` is similar to caching systems like Redis. We define an array for each query. All of the elements of the array identify the unique location to store the results.

> [!NOTE] we can extract _many_ other properties from the query besides `isLoading` and `data`. See [useQuery Reference](https://tanstack.com/query/latest/docs/framework/react/reference/useQuery#result-properties).

In this case `data` is an array so in the component we can:

```jsx
{
  data.map((order) => (
    <tr key={order.order_id}>
      <td>{order.order_id}</td>
      <td>{order.date}</td>
      <td>{order.time}</td>
    </tr>
  ))
}
```

> [!NOTE]
> The key here is different. This is just the key React uses to know when orders are added, removed, or re-ordered for each render. See [05 Effects - Keys](05-effects.md#keys).

## React Ecosystem Q&A

- Instructor recommends to always use `@tanstack/react-query` for doing fetching data from an API.
- `useEffect` still has its place, he mentioned analytics effect, local state, etc.
- Putting query code in a custom hook? In this case he is not going to write tests for react query, as the library is so well tested already. However, if he has a series of requests that have to fire in a sequence he might use a custom hook for that to enable easier testing. See [06 Custon Hooks](./06-custom-hooks.md).

### CSS

He does not cover some other basics like CSS as he stated its easy to add those once the ideas of React are mastered. He also says the CSS landscape is very fractured. He likes to write direct CSS for his components like this:

```jsx
// Other imports
import "./PizzaOfTheDay.css"

const PizzaOfTheDay = () => {
  // component code
}
```

He creates directories for each component with the jsx, tests, and css. This is a good pattern to follow.

### Tailwind

He covers Tailwind in Intermediate React v5 but these days he prefers raw CSS. This is just preference however. He does recognize that it has its place esp. if you want to simplify styling.
