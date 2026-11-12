# Part of the React Course

THis is the backend API service for the react course see [README.md](../README.md).

## Commands

Run these commands from the `api/` directory:

| Task                                               | Command                       | Notes                                            |
| -------------------------------------------------- | ----------------------------- | ------------------------------------------------ |
| Install dependencies                               | `bun install`                 | Uses the API's `bun.lock`.                       |
| Start the API in watch mode                        | `bun run dev`                 | Runs the server with Bun's watch mode.           |
| Start the API                                      | `bun run start`               | Runs the server with Bun.                        |
| Run API tests                                      | —                             | No API test script is configured yet.            |
| See outdated dependencies                          | `bun outdated`                | Lists dependency updates.                        |
| Update a package within its declared version range | `bun update <package>`        | Updates the lockfile.                            |
| Update a package to the latest version             | `bun add <package>@latest`    | Updates the dependency declaration and lockfile. |
| Add a latest dev dependency                        | `bun add -d <package>@latest` | Adds it to `devDependencies`.                    |
| Remove a package                                   | `bun remove <package>`        | Removes it from the manifest and lockfile.       |
