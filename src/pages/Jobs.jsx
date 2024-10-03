import { memo } from 'react'

function Jobs() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h1>Trabalhe Conosco</h1>
            <p>Estamos sempre à procura de novos talentos para nossa equipe! Confira as oportunidades disponíveis abaixo.</p>
            <table className="table">
              <thead>
                <tr>
                  <th>Vaga</th>
                  <th>Departamento</th>
                  <th>Localização</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Desenvolvedor Front-end</td>
                  <td>TI</td>
                  <td>São Paulo</td>
                </tr>
                <tr>
                  <td>Analista de Marketing</td>
                  <td>Marketing</td>
                  <td>Rio de Janeiro</td>
                </tr>
              </tbody>
            </table>
            <a href="/apply" className="btn btn-primary">Envie seu currículo</a>
          </div>
        </div>
      </div>
    );
};

export default memo(Jobs)