import { createContext, useCallback, useState } from "react"
import PropTypes from "prop-types"

export const CartContext = createContext()

export function CartProviver({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [purchaseHistory, setPurchaseHistory] = useState([])


    const addToCart = useCallback((produto) => {
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
    }, [])
  
    const removeFromCart = useCallback((id) => {
      setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }, [])

    const updateQuantity = useCallback((id, typeAction) => {
        setCartItems(prevItems => 
            prevItems.map(item =>
                item.id === id
                    ? { ...item, quantity: typeAction === 'increase' ? item.quantity + 1 : item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0)
        )
    }, [])

    const clearCart = useCallback(() => {
        setCartItems([]);
    }, []);

    const finalizePurchase = useCallback(() => {
        const totalValue = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
        const newPurchase = {
          id: Date.now(), // Gera um ID único
          items: cartItems,
          total: totalValue,
          date: new Date().toLocaleDateString(),
        };
    
        setPurchaseHistory(prevHistory => [...prevHistory, newPurchase]);
        clearCart();
    }, [cartItems, clearCart]);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, finalizePurchase, purchaseHistory }}>
            {children}
        </CartContext.Provider>
    )
}

CartProviver.proptTypes = {
    children: PropTypes.element.isRequired,
}
