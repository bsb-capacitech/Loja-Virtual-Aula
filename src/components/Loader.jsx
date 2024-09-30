import styles from './Loader.module.css'

function Loader() {
  return (
    <div className={`d-flex justify-content-center align-items-center ${styles.loaderContainer}`}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Carregando...</span>
      </div>
    </div>
  );
};
export default Loader;
