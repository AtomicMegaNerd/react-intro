import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { createLazyFileRoute } from "@tanstack/react-router"
import { priceConverter } from "../useCurrency"
import getPastOrders from "../api/getPastOrders"
import getPastOrder from "../api/getPastOrder"
import Modal from "../Modal"
import ErrorBoundary from "../ErrorBoundary"

export const Route = createLazyFileRoute("/past")({
  component: ErrorBoundaryWrappedPastOrderRoutes,
})

// Wrapping PastOrdersRoute outside of the Component function so we can handle the error
function ErrorBoundaryWrappedPastOrderRoutes() {
  return (
    <ErrorBoundary>
      <PastOrdersRoute />
    </ErrorBoundary>
  )
}

function PastOrdersRoute() {
  const [page, setPage] = useState(1)
  const [focusedOrder, setFocusedOrder] = useState()

  const { isLoading, data } = useQuery({
    queryKey: ["past-orders", page],
    queryFn: () => getPastOrders(page),
    staleTime: 30000, // caching in ms
  })

  const { isLoading: isLoadingPastOrder, data: pastOrderData } = useQuery({
    queryKey: ["past-order", focusedOrder],
    queryFn: () => getPastOrder(focusedOrder),
    staleTime: 24 * 60 * 60 * 1000,
    // Can also use !!focusedOrder :-P, either approach converts the value to its
    // explicit Boolean equivalent (true or false), avoiding implied truthiness.
    enabled: Boolean(focusedOrder),
  })

  if (isLoading) {
    return (
      <div className="past-orders">
        <h2>LOADING ... </h2>
      </div>
    )
  }

  return (
    // If I try to put <ErrorBoundary> ... </ErrorBoundary> here wrapping this div the whole
    // component will blow up. So I have to put the ErrorBoundary wrapping besides this component.
    // Then I can wrap the child component. (see above)
    <div className="past-orders">
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Date</td>
            <td>Time</td>
          </tr>
        </thead>
        <tbody>
          {/* Again map is commonly used to transform each JS object in an array into JSX
            tags. */}
          {data.map((order) => (
            <tr key={order.order_id}>
              <td>
                <button onClick={() => setFocusedOrder(order.order_id)}>{order.order_id}</button>
              </td>
              <td>{order.date}</td>
              <td>{order.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pages">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <div>{page}</div>
        <button disabled={data.length < 10} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
      {focusedOrder ? (
        <Modal>
          <h2>Order #{focusedOrder}</h2>
          {!isLoadingPastOrder ? (
            <table>
              <thead>
                <tr>
                  <td>Image</td>
                  <td>Name</td>
                  <td>Size</td>
                  <td>Quantity</td>
                  <td>Price</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                {pastOrderData.orderItems.map((pizza) => (
                  <tr key={`${pizza.pizzaTypeId}_${pizza.size}`}>
                    <td>
                      <img src={pizza.image} alt={pizza.name} />
                    </td>
                    <td>{pizza.name}</td>
                    <td>{pizza.size}</td>
                    <td>{pizza.quantity}</td>
                    <td>{priceConverter(pizza.price)}</td>
                    <td>{priceConverter(pizza.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Loading …</p>
          )}
          <button onClick={() => setFocusedOrder()}>Close</button>
        </Modal>
      ) : null}
    </div>
  )
}
