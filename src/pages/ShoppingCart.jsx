import { Link } from "react-router-dom"
import PropTypes from "prop-types"

function ShoppingCart({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) {
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
                                    <buttton className="btn btn-secondary" onClick={() => decreaseQuantity(item.id)}>-</buttton>
                                    <span className="mx-2">{item.quantity}</span>
                                    <buttton className="btn btn-secondary" onClick={() => increaseQuantity(item.id)}>+</buttton>
                                </div>
                            </div>

                            <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                            <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remover</button>
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

ShoppingCart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    increaseQuantity: PropTypes.func.isRequired,
    decreaseQuantity: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default ShoppingCart
