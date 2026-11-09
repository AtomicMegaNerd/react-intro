# Lesson 2: Tools

## Course Notes

[npm](https://react-v9.holt.courses/lessons/tools/npm)
[prettier](https://react-v9.holt.courses/lessons/tools/code-formatting)
[eslint](https://react-v9.holt.courses/lessons/tools/linting)
[git](https://react-v9.holt.courses/lessons/tools/git)
[vite](https://react-v9.holt.courses/lessons/tools/vite).

## My Notes

> [!NOTE]
> I diverge from the instructor in that I use `oxlint` and `oxfmt` instead of `prettier` and `eslint`. This is deliberate.

### npm

```bash
npm init -y # Inits the project with defaults
```

### use of ECMAScript modules

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

### Vite 8

Vite 8 uses Rolldown instead of Rollup. We'll have to keep an eye on that.

### React 19

I am using React 19. We will have to keep an eye on that.

## React Developer Tools

[Course Notes](https://react-v9.holt.courses/lessons/core-react-concepts/dev-tools)

[React Developer Tools](https://react.dev/learn/react-developer-tools)
