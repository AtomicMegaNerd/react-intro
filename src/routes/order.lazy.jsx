import { useEffect, useState, useContext } from "react"
import { createLazyFileRoute } from "@tanstack/react-router"
import Pizza from "../Pizza"
import Cart from "../Cart"
import { CartContext } from "../contexts"

// This Internationalization code is now built-in to browsers
const intl = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
})

export const Route = createLazyFileRoute("/order")({
  component: Order,
})

// Named function (not arrow function) when the app crashes the Order _function_ will show up in
// the stack trace.
function Order() {
  // Rules:
  // React depends on the order we declare these. Never put these inside of loops or
  // conditionals. They must run in the same order each time.
  const [pizzaTypes, setPizzaTypes] = useState([])
  const [pizzaType, setPizzaType] = useState("pepperoni")
  const [pizzaSize, setPizzaSize] = useState("M")
  // This now comes from the context
  const [cart, setCart] = useContext(CartContext)
  const [loading, setLoading] = useState(true)

  async function checkout() {
    setLoading(true)
    // We don't need useEffect here because this is triggered by an onClick event from the user and so
    // is not tied to the render lifecycle
    await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart,
      }),
    })

    setCart([])
    setLoading(false)
  }

  let price, selectedPizza
  if (!loading) {
    // This will be the correct pizza object from our API
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id)
    price = intl.format(selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "")
  }

  // This is an impure function, we don't want to run this every time the component is rendered
  async function fetchPizzaTypes() {
    const pizzasRes = await fetch("/api/pizzas")
    const pizzasJson = await pizzasRes.json()
    setPizzaTypes(pizzasJson)
    setLoading(false)
  }

  // The second argument specifies that changes to which variables should trigger useEffect. If
  // we leave this blank useEffect will be called each time the component renders. An empty array
  // means we trigger useEffect only once.
  useEffect(() => {
    // NOTE: This is code from the course, so overruling the linter for now...
    // oxlint-disable-next-line react/set-state-in-effect
    fetchPizzaTypes()
  }, []) // <- don't forget to set properties here or set it to []!

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form
        onSubmit={(e) => {
          // NOTE: This prevents the browsers built-in submission system from firing when the submit button is clicked. Only this React onSubmit handler will fire. Otherwise both would fire.
          e.preventDefault()
          // This is roughly equivalent to something like ++ in haskell in that ...cart adds all
          // of the elements from cart into a new array, adds the items defined in the remaining
          // elements (in this case one) and returns a new array. This is not a function it is an
          // array definition, it just feels like a function kind of. This syntax is actually
          // pretty ridiculous if I am being honest.
          setCart([...cart, { pizza: selectedPizza, size: pizzaSize, price }])
        }}
      >
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              onChange={(e) => setPizzaType(e.target.value)}
              name="pizza-type"
              value={pizzaType}
            >
              {pizzaTypes.map((pizza) => (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  checked={pizzaSize === "S"}
                  onChange={(e) => setPizzaSize(e.target.value)}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "M"}
                  onChange={(e) => setPizzaSize(e.target.value)}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "L"}
                  onChange={(e) => setPizzaSize(e.target.value)}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
        </div>
        {
          // Ternaries are expressions, not statements.
          loading ? (
            <h3>LOADING …</h3>
          ) : (
            <div className="order-pizza">
              <Pizza
                name={selectedPizza.name}
                description={selectedPizza.description}
                image={selectedPizza.image}
              />
              <p>{price}</p>
            </div>
          )
        }
      </form>
      {loading ? <h2>LOADING...</h2> : <Cart checkout={checkout} cart={cart} />}
    </div>
  )
}
