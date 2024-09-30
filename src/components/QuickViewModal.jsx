import styles from './QuickViewModal.module.css';
import PropTypes from 'prop-types'

const QuickViewModal = ({ show, onClose, product }) => {
  if (!show) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <img src={product.image} alt={product.title} className={styles.productImage} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>R$ {product.price}</p>
        <button
          className="btn btn-primary"
          onClick={() => window.location.href = `/produto/${product.id}`}>
          Mais detalhes
        </button>
      </div>
    </div>
  );
};

QuickViewModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default QuickViewModal;