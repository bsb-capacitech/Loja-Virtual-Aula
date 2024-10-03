import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { useAuth } from '../hooks/useAuth'
import ShoppingCartItem from '../components/ShoppingCartItem'
import { useCartTotal } from '../hooks/useCartTotal'

function ShoppingCart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const calcTotal = useCartTotal(cartItems);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleUpdateQuantity = (id, typeAction) => {
    updateQuantity(id, typeAction);
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  const handleCheckout = () => {
    if (!user) {
      // Redireciona para login se o usuário não estiver logado
      navigate('/login', { state: { from: '/checkout' } });
    } else {
      // Se o usuário estiver logado, vai para a página de checkout
      navigate('/checkout');
    }
  };

  return (
    <div className="container">
      <h2>Carrinho de Compras</h2>
      <ul className="list-group">
        {
          cartItems.map(item => (
            <ShoppingCartItem
              key={item.id}
              item={item}
              handleUpdateQuantity={handleUpdateQuantity}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))
        }
      </ul>
      <h3>Total: R$ {calcTotal}</h3>

      <Link to="/produtos" className="btn btn-primary">
        Continuar Comprando
      </Link>

      <button className="btn btn-success mx-3" onClick={handleCheckout}>
        Finalizar Compra
      </button>
    </div>
  );
}

export default ShoppingCart
