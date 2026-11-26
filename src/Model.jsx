import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

const Modal = ({ children }) => {
  // How do we refer to the same div each time the app renders? We don't want to interact
  // with the DOM directly. Instead we use useRef
  const elRef = useRef(null)
  // current is the only thing we can modify here. This will always point to the same div
  if (!elRef.current) {
    elRef.current = document.createElement("div")
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal")
    modalRoot.appendChild(elRef.current)
    // Cleanup function
    return () => modalRoot.removeChild(elRef.current)
  }, [])

  // children here we are putting tags inside the <Modal> component via the props above
  return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal
