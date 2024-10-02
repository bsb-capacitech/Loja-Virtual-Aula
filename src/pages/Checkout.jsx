import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

function Checkout() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handlePurchase = () => {
    if (!user) {
      alert('Você precisa estar logado para realizar uma compra.');
      navigate('/login');
      return;
    }
    alert('Compra realizada com sucesso!');
    navigate('/sucesso');
  };

  return (
    <div className="container text-center mt-5">
      <h2>Checkout</h2>
      <button className="btn btn-primary" onClick={handlePurchase}>
        Finalizar Compra
      </button>
    </div>
  );
}

export default Checkout
