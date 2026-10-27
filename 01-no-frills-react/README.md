# Padre Ginos

This is the app we work on throught the course

---

## Lesson 1: Welcome / No Frills React

### Basic Build Step

[React Without a Build Step](https://react-v9.holt.courses/lessons/no-frills-react/react-without-a-build-step)

React is about building components. There are two types: **function componments** and **class componnets**.

#### React createElement

if you pass a _string_ the function will return a DOM tag with kind matchig the string (`div`, `h1`, etc). The second object is the **props** where you can pass properties into the component. The third argument is one or more child elements. Note that the last two args are optional.

### Componments

[Components](https://react-v9.holt.courses/lessons/no-frills-react/components)

React and ReactDOM are separate libraries because React is the universal library for all types of React including React Native whereas ReactDOM is focused on the browser.

React combines the model, view, and controller into a single component, encapsulating all logic
for a small piece of funcionality in one place.

You can acccess properties throuigh the `props` parameter passed into the component function.
