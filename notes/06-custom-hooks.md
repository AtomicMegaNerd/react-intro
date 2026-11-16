# Custom Hooks

## Dev Tools

### Development vs. Production mode

> [!IMPORTANT] always remember to switch to `production` mode when deploying to production or performance can really suffer.

- `NODE_ENV` tells that tools if we are in `development` or `production` mode. Vite handles this for us automatically.

### Strict Mode

Strict mode is an extra set of checks that React can perform. It warns us about deprecated API's for example. It does re-render your components twice. This catches some effects related bugs.

```jsx
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### Dev Tools
