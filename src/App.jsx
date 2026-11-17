import { useState, StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Header from "./Header"
import Order from "./Order"
import PizzaOfTheDay from "./PizzaOfTheDay"
import { CartContext } from "./contexts"

// Note in pre-React 19 we need <CartContext.Provider>
const App = () => {
  const cartHook = useState([])
  // We can pass in the whole hook (both the var and the setter into the context
  return (
    <StrictMode>
      <CartContext value={cartHook}>
        <div>
          <Header />
          <Order />
          <PizzaOfTheDay />
        </div>
      </CartContext>
    </StrictMode>
  )
}

// We wrap the root element from the DOM into a React root. If memory serves React uses a copy
// of the DOM called the Shadow DOM...
const container = document.getElementById("root")
const root = createRoot(container)

// This looks strange! Wow!
root.render(<App />)
