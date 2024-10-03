import { useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useCart } from '../hooks/useCart'

function Checkout() {
  const { user } = useAuth();
  const { finalizePurchase } = useCart();
  const navigate = useNavigate();

  const handlePurchase = useCallback(() => {
    if (!user) {
      alert('Você precisa estar logado para realizar uma compra.');
      navigate('/login');
      return;
    }

    finalizePurchase();
    alert('Compra realizada com sucesso!');
    navigate('/sucesso');
  }, [user, finalizePurchase, navigate]);

  return (
    <div className="container text-center mt-5">
      <h2>Checkout</h2>
      <button className="btn btn-primary" onClick={handlePurchase}>
        Finalizar Compra
      </button>
    </div>
  );
}

export default memo(Checkout)
