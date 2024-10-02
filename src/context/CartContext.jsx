import { createContext, useState } from "react"
import PropTypes from "prop-types"

export const CartContext = createContext()

export function CartProviver({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (produto) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === produto.id)

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === produto.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                )
            } else {
                return [ ...prevItems, { ... produto, quantity: 1 } ]
            } 
        })
    }
  
    const removeFromCart = (id) => {
      setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    const updateQuantity = (id, typeAction) => {
        setCartItems(prevItems => 
            prevItems.map(item =>
                item.id === id
                    ? { ...item, quantity: typeAction === 'increase' ? item.quantity + 1 : item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0)
        )
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

CartProviver.proptTypes = {
    children: PropTypes.element.isRequired,
}
