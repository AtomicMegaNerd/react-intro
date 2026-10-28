import { createRoot } from "react-dom/client"
import Order from "./Order"

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Order />
    </div>
  )
}

// We wrap the root element from the DOM into a React root. If memory serves React uses a copy
// of the DOM called the Shadow DOM...
const container = document.getElementById("root")
const root = createRoot(container)

// This looks strange! Wow!
root.render(<App />)
