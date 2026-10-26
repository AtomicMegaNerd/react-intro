// First React App :-P
const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.description),
  ])
}

const App = () => {
  // These are vanilla React Components. createElement takes the name of the element type, props,
  // and children.
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Mozzerella Cheese, Pepperoni",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian Pizza",
      description: "Mozzerella Cheese, Ham, Pineapple",
    }),
    React.createElement(Pizza, {
      name: "The Pepperoni and Bacon Pizza",
      description: "Mozzerella Cheese, Pepperoni, Bacon",
    }),
    React.createElement(Pizza, {
      name: "The Meat Lovers Pizza",
      description: "Mozzerella Cheese, Pepperoni, Ground Beef, Ground Pork, Ham, Sausage",
    }),
    React.createElement(Pizza, {
      name: "The Vegatarian Pizza",
      description: "Mozzerella Cheese, Green Peppers, Onions, Black Olives, Mushrooms",
    }),
  ])
}

// We wrap the root element from the DOM into a React root. If memory serves React uses a copy
// of the DOM called the Shadow DOM...
const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))
