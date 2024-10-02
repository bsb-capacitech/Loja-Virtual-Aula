import { Link } from 'react-router-dom'

function Success() {
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

export default Success
