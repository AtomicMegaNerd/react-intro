# Complete Intro to React v9

This is the course I am taking to learn React.

- [Masters.dev Course Website](https://master.dev/courses/complete-react-v9/)
- [Brian Holt Course Website](https://react-v9.holt.courses/)
- [Course Repo](https://github.com/btholt/complete-intro-to-react-v9)

---

## Padre Ginos Example Project

This is the app we work on throughout the course. Each lesson will make changes and add notes.

- [Course Project Files](https://github.com/btholt/citr-v9-project)
- The api directory in this project is copied from the citr-v9-project repo above.

We will store each stage of work in its own git branch. The branch names are:

- `02-tools`
- `03-core-react-concepts`

After each lesson we will also merge the latest work into `main`.

---

## Lesson 1: Welcome / No Frills React

### Basic Build Step

[React Without a Build Step](https://react-v9.holt.courses/lessons/no-frills-react/react-without-a-build-step)

React is about building components. There are two types: **function components** and **class components**.

#### React createElement

if you pass a _string_ the function will return a React element that represents a DOM tag with kind matching the string (`div`, `h1`, etc). The second argument is the **props** where you can pass properties into the component. The third argument is one or more child elements. Note that the last two args are optional.

### Components

[Components](https://react-v9.holt.courses/lessons/no-frills-react/components)

React and ReactDOM are separate libraries because React is the universal library for all types of React including React Native whereas ReactDOM is focused on the browser.

React combines the model, view, and controller into a single component, encapsulating all logic
for a small piece of functionality in one place.

You can access properties through the `props` parameter passed into the component function.

---

## Lesson 2: Tools

### Course Notes

[npm](https://react-v9.holt.courses/lessons/tools/npm)
[prettier](https://react-v9.holt.courses/lessons/tools/code-formatting)
[eslint](https://react-v9.holt.courses/lessons/tools/linting)
[git](https://react-v9.holt.courses/lessons/tools/git)
[vite](https://react-v9.holt.courses/lessons/tools/vite).

### My Notes

> [!NOTE]
> I diverge from the instructor in that I use `oxlint` and `oxfmt` instead of `prettier` and `eslint`. This is deliberate.

#### npm

```bash
npm init -y # Inits the project with defaults
```

#### use of ECMAScript modules

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

#### Vite 8

Vite 8 uses Rolldown instead of Rollup. We'll have to keep an eye on that.

#### React 19

I am using React 19. We will have to keep an eye on that.

---

## Lesson 3: Core React Concepts

### JSX

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

### Default Export

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

### No Longer Required

Tooling handles this import for us now:

```jsx
import React from "react"
```

### More Tooling

To turn on the react plug-in for `oxlint` add "react" to [.oxlintrc.json](./.oxlintrc.json).

```json
{
  "plugins": ["eslint", "typescript", "unicorn", "oxc", "react"]
}
```

### JSX requires self-closing tags

```jsx
<input />
```

See [oxlint built-in plug-ins](https://oxc.rs/docs/guide/usage/linter/plugins.html)

### Root Changes

We render the React component using the tag syntax. Interesting!

```jsx
// This looks strange! Wow!
root.render(<App />)
```

### Casing

In React ... upper case is used for React components and lower case is used for standard html (DOM)
tags.

```jsx
<Pizza /> // React component
<div /> // Standard HTML tag
```
