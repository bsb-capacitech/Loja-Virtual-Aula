import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <div className={`container text-center ${styles.notFoundContainer}`}>
      <div className="row">
        <div className="col-md-12">
          <h1 className={`display-1 text-danger fw-bold ${styles.heading1}`}>404</h1>
          <h2 className={styles.heading2} >Página Não Encontrada <span role="img" aria-label="Crying Emoji">😢</span></h2>
          <p className="lead">A página que você está procurando não existe.</p>
          <img
            src="https://via.placeholder.com/400x300"
            alt="Página não encontrada"
            className="img-fluid my-4"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Link to="/" className="btn btn-primary">
            Voltar para Página Principal <span role="img" aria-label="House Emoji">🏠</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound