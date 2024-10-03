import { useEffect, memo } from 'react';
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart';

function Success() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="container text-center mt-5">
      <h2>Compra Realizada com Sucesso!</h2>
      <p>Obrigado por comprar conosco. Seu pedido está sendo processado.</p>
      <Link to="/" className="btn btn-primary">
        Voltar para Página Principal <span role="img" aria-label="House Emoji">🏠</span>
      </Link>
    </div>
  );
}

export default memo(Success);
