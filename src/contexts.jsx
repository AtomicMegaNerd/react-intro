import { createContext } from "react"

// type of hooks = [ [], function(){} ]
// this makes our life easier later if we pass in these objects
export const CartContext = createContext([[], function() { }])
