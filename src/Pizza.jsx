const Pizza = (props) => {
  return (
    // class is a reserved name in JS so they call it className here...
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Pizza
