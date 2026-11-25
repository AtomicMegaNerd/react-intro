import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { RouterProvider, createRouter } from "@tanstack/react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { routeTree } from "./routeTree.gen"

const router = createRouter({ routeTree })
const queryClient = new QueryClient()

// Now with TanStack Router
const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  )
}

// We wrap the root element from the DOM into a React root. If memory serves React uses a copy
// of the DOM called the Shadow DOM...
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
