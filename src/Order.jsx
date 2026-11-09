import { useEffect, useState } from "react"
import Pizza from "./Pizza"

// This Internationalization code is now built-in to browsers
const intl = new Intl.NumberFormat("en-ca", {
  style: "currency",
  currency: "CAD",
})

// Named function (not arrow function) when the app crashes the Order _function_ will show up in
// the stack trace.
export default function Order() {
  // Rules:
  // React depends on the order we declare these. Never put these inside of loops or
  // conditionals. They must run in the same order each time.
  const [pizzaTypes, setPizzaTypes] = useState([])
  const [pizzaType, setPizzaType] = useState("pepperoni")
  const [pizzaSize, setPizzaSize] = useState("M")
  const [loading, setLoading] = useState(true)

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
      <form>
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
        {loading ? (
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
        )}
      </form>
    </div>
  )
}
