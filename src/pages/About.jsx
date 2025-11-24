import { memo } from 'react'

function About() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h1>Sobre Nós</h1>
            <p>
              Nossa loja virtual foi fundada com o objetivo de trazer os melhores produtos para os nossos clientes, sempre prezando pela qualidade, atendimento e satisfação.
            </p>
            <h2>Missão</h2>
            <p>
              Oferecer produtos de alta qualidade com preços competitivos, mantendo o foco na satisfação do cliente.
            </p>
          </div>
        </div>
      </div>
    );
  };

export default memo(About)
