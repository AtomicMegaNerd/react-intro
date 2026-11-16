import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import PizzaOfTheDay from "./PizzaOfTheDay"
import Order from "./Order"

const App = () => {
  return (
    <div>
      <h1 className="logo">Padre Gino's - Order Now</h1>
      <Order />
      <PizzaOfTheDay />
    </div>
  )
}

// We wrap the root element from the DOM into a React root. If memory serves React uses a copy
// of the DOM called the Shadow DOM...
const container = document.getElementById("root")
const root = createRoot(container)

// This looks strange! Wow!
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
