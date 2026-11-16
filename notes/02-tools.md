# Lesson 2: Tools

## Course Notes

[npm](https://react-v9.holt.courses/lessons/tools/npm)
[prettier](https://react-v9.holt.courses/lessons/tools/code-formatting)
[eslint](https://react-v9.holt.courses/lessons/tools/linting)
[git](https://react-v9.holt.courses/lessons/tools/git)
[vite](https://react-v9.holt.courses/lessons/tools/vite).

> [!NOTE]
> I diverge from the instructor in that I use `oxlint` and `oxfmt` instead of `prettier` and `eslint`. I also switched from node to bun. [README.md](../README.md) has details.

## use of ECMAScript modules

Of course we are 100% going to use ECMAScript modules as that is the modern way, esp. with [vite](https://vite.dev/).

```json
{
  "type": "module"
}
```

In html script tag I have to specify that we are using modules:

```html
<script type="module" src="./src/App.js"></script>
```

## Vite 8

Vite 8 uses Rolldown instead of Rollup. We'll have to keep an eye on that.

## React 19

I am using React 19. We will have to keep an eye on that.

## Development vs. Production mode

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

## React Developer Tools

[Course Notes](https://react-v9.holt.courses/lessons/core-react-concepts/dev-tools)

[React Developer Tools](https://react.dev/learn/react-developer-tools)
