import { createContext } from "react";

const CartContext = createContext();
function reducer(state, item) {
  return Array.from(new Set([...state, item]));
}
export { CartContext, reducer };
