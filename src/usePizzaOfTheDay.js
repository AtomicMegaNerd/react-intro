import { useState, useEffect, useDebugValue } from "react"

// Nothing special for custom hooks they just call other hooks
export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null)

  // Allows us to see the value of the hook in React Developer Tools
  useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.id}: ${pizzaOfTheDay.name}` : "loading...")

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch("/api/pizza-of-the-day")
      const data = await response.json()
      setPizzaOfTheDay(data)
    }

    fetchPizzaOfTheDay()
  }, [])

  return pizzaOfTheDay
}
