import { Link } from "react-router-dom"
import { useCart } from "../hooks/useCart"

function ShoppingCart() {
    const { cartItems, updateQuantity, removeFromCart } = useCart()

    const handleUpdateQuantity = (id, typeAction) => {
        updateQuantity(id, typeAction)
    }
    
    const handleRemoveFromCart = (id) => {
        removeFromCart(id)
    }

    const calcTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    }

    return (
        <div className="container">
            <h2>Carrinho de Compras</h2>
            <ul className="list-group">
                {
                    cartItems.map(item => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <h5>{item.title}</h5>
                                <div className="d-flex align-items-center">
                                    <buttton className="btn btn-secondary" onClick={handleUpdateQuantity(item.id, 'decrease')}>-</buttton>
                                    <span className="mx-2">{item.quantity}</span>
                                    <buttton className="btn btn-secondary" onClick={handleUpdateQuantity(item.id, 'increase')}>+</buttton>
                                </div>
                            </div>

                            <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                            <button className="btn btn-danger" onClick={handleRemoveFromCart(item.id)}>Remover</button>
                        </li>
                    ))
                }
            </ul>

            <h3>Total: R$ {calcTotal()}</h3>

            <Link to="/produtos" className="btn btn-primary">
                Continuar comprando
            </Link>
        </div>
    )
}

export default ShoppingCart
