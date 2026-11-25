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

## Replace `useEffect` Hook for Many Cases

The instructor mentioned he often uses TanStack Query instead of `useEffect`.
