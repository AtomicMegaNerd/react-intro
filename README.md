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

## Bun Command Reference

| Task                                               | Command                    | Notes                                                                  |
| -------------------------------------------------- | -------------------------- | ---------------------------------------------------------------------- |
| Install React app dependencies                     | `bun install`              | Run from the repository root.                                          |
| Start the React dev server                         | `bun run dev`              | Run from the repository root.                                          |
| Build the React app                                | `bun run build`            | Run from the repository root.                                          |
| Preview the production build                       | `bun run preview`          | Build first with `bun run build`.                                      |
| Lint the React app                                 | `bun run lint`             | Run from the repository root.                                          |
| Format the React app                               | `bun run format`           | Formats files under `src/`.                                            |
| Run React tests                                    | `bun run test`             | The test script is a placeholder until Vitest is set up in the course. |
| Install API dependencies                           | `bun install`              | Run from `api/`.                                                       |
| Start the API in watch mode                        | `bun run dev`              | Run from `api/`.                                                       |
| Start the API without watch mode                   | `bun run start`            | Run from `api/`.                                                       |
| See outdated dependencies                          | `bun outdated`             | Run in the project (`.` or `api/`) you want to check.                  |
| Update a package within its declared version range | `bun update <package>`     | Run in the project that uses the package.                              |
| Update a package to the latest version             | `bun add <package>@latest` | Use `bun add -d <package>@latest` for a dev dependency.                |
| Remove a package                                   | `bun remove <package>`     | Run in the project that uses the package.                              |

## Lessons

Each lesson will have its own Git Branch and its own Link to the notes. After each
lesson we will merge to the `main` branch.

| Lesson  | Notes Link                          | Git Branch                                                                                            |
| ------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Welcome | [01-Welcome](./notes/01-welcome.md) | N/A                                                                                                   |
| Tools   | [02-Tools](./notes/02-tools.md)     | [`02-tools`](https://github.com/AtomicMegaNerd/react-intro/tree/02-tools)                             |
| JSX     | [03-JSX](./notes/03-jsx.md)         | [`03-core-react-concepts`](https://github.com/AtomicMegaNerd/react-intro/tree/03-core-react-concepts) |
| Hooks   | [04-Hooks](./notes/04-hooks.md)     | [`04-react-hooks`](https://github.com/AtomicMegaNerd/react-intro/tree/04-react-hooks)                 |
| Effects | [05-Effects](./notes/05-effects.md) | [`05-react-effect`](https://github.com/AtomicMegaNerd/react-intro/tree/05-react-effect)               |
