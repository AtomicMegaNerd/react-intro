import { Component } from "react"
import { Link } from "@tanstack/react-router"

// Normal ES6/ES2015 class
class ErrorBoundary extends Component {
  state = { hasError: false }

  // This is how the constructors work with Class Properties
  //
  // constructor(props) {
  //   // Have to pass the props back up to React
  //   super(props)
  // }

  // static works like we'd expect in Java(not Script 🤣)
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  // LifeCycle methods were the old way
  componentDidCatch(error, info) {
    // Send data to logging platform...
    console.error("ErrorBoundary caught an error", error, info)
  }

  // Other lifecycle components:
  //
  // componentDidMount()
  // componentWillUnmount()
  // componentDidUpdate()

  // NOTE: Every React Class Component MUST have a render function
  render() {
    // If we have an error we replace the children with this error component
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Uh oh!</h2>
          <p>
            There was an error with this listing. <Link to="/">Click here</Link> to back to the home
            page.
          </p>
        </div>
      )
    }

    // If there is no error return the child components that we are wrapping
    return this.props.children
  }
}

export default ErrorBoundary
