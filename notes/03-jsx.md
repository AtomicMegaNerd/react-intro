# JSX

[Course Notes](https://react-v9.holt.courses/lessons/core-react-concepts/jsx)

`JSX` was meant to just be a hack to get the `php` developers at Facebook to like it. However, it stuck and became very popular even with some other frameworks.

```jsx
const Pizza = (props) => {
  return (
    // class is a reserved name in JS so they call it className here...
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  )
}
```

> [!NOTE]
> Besides `className` `htmlFor` is required when working with form labels for similar reasons.

## Default Export

Let's you import without `{ }`.

```js
export default Pizza
```

So you can import as:

```js
import Pizza from "./Pizza"
```

This makes sense when you have one component per file. Non-default or named exports require
curly braces, so:

```js
import { Pizza } from "./Pizza"
```

See [export MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

## No Longer Required

Tooling handles this import for us now:

```jsx
import React from "react"
```

## More Tooling

To turn on the react plug-in for `oxlint` add "react" to [.oxlintrc.json](./.oxlintrc.json).

```json
{
  "plugins": ["eslint", "typescript", "unicorn", "oxc", "react"]
}
```

## JSX requires self-closing tags

```jsx
<input />
```

See [oxlint built-in plug-ins](https://oxc.rs/docs/guide/usage/linter/plugins.html)

## Root Changes

We render the React component using the tag syntax. Interesting!

```jsx
// This looks strange! Wow!
root.render(<App />)
```

## Casing

In React ... upper case is used for React components and lower case is used for standard html (DOM)
tags.

```jsx
<Pizza /> // React component
<div /> // Standard HTML tag
```
