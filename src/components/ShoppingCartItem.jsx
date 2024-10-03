import { memo } from 'react'
import PropTypes from 'prop-types'

function ShoppingCartItem ({ item, handleUpdateQuantity, handleRemoveFromCart }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <h5>{item.title}</h5>
        <div className="d-flex align-items-center">
          <button className="btn btn-secondary" onClick={() => handleUpdateQuantity(item.id, 'decrease')}>-</button>
          <span className="mx-2">{item.quantity}</span>
          <button className="btn btn-secondary" onClick={() => handleUpdateQuantity(item.id, 'increase')}>+</button>
        </div>
      </div>
      <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
      <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item.id)}>Remover</button>
    </li>
  )
};

ShoppingCartItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
  handleUpdateQuantity: PropTypes.func.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
}

export default memo(ShoppingCartItem)