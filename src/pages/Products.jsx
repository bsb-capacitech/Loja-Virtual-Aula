import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import QuickViewModal from '../components/QuickViewModal'
import Loader from '../components/Loader'

function Products() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const maxPriceRef = useRef();

  // Estados
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(query.get('categoria') || 'all');
  const [priceRange, setPriceRange] = useState([
    Number(query.get('minPreco')) || 0,
    Number(query.get('maxPreco')) || 1000,
  ]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // useEffect
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));

    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  // Handlers
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    navigate({
      pathname: location.pathname,
      search: `?categoria=${e.target.value}&minPreco=${priceRange[0]}&maxPreco=${priceRange[1]}`,
    });
  };

  const handlePriceChange = (e) => {
    const { value, name } = e.target;
    const newRange = name === 'minPrice' ? [Number(value), priceRange[1]] : [priceRange[0], Number(value)];
    setPriceRange(newRange);
    navigate({
      pathname: location.pathname,
      search: `?categoria=${selectedCategory}&minPreco=${newRange[0]}&maxPreco=${newRange[1]}`,
    });

    // Focar no campo de preço máximo após a alteração do mínimo, por exemplo
    if(name === 'minPrice') {
      maxPriceRef.current.focus();
    }
  };

  const handleQuickView = useCallback((product) => {
    setSelectedProduct(product);
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleAddToCart = useCallback((product) => {
    addToCart(product);
  }, [addToCart]);

  // Possível pasta src/utils
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const inCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
      return inCategory && inPriceRange;
    });
  }, [products, selectedCategory, priceRange]);

  // Renderizações do Componente
  if (loading) {
    return <Loader />
  }

  return (
    <div className="container">

      <div className="row mb-4">
        <div className="col-md-4">
          <label htmlFor="category" className="form-label">Categoria:</label>
          <select id="category" className="form-select" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="all">Todas</option>
            {
              categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))
            }
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="minPrice" className="form-label">Preço Mínimo:</label>
          <input
            id="minPrice"
            name="minPrice"
            type="number"
            className="form-control"
            value={priceRange[0]}
            onChange={handlePriceChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="maxPrice" className="form-label">Preço Máximo:</label>
          <input
            id="maxPrice"
            name="maxPrice"
            type="number"
            className="form-control"
            value={priceRange[1]}
            onChange={handlePriceChange}
          />
        </div>
      </div>

      <div className="row">
        {
          filteredProducts.map((product) => (
            <div className="col-md-3 mb-3" key={product.id}>
              <div className="card h-100">
                <img src={product.image} className="card-img-top p-5" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">R$ {product.price}</p>
                  <button
                    className="btn btn-primary my-2"
                    onClick={() => handleQuickView(product)}
                  >
                    <span role="img" aria-label="High Voltage Emoji">⚡ </span>
                    Detalhes Rápidos
                  </button>
                  <Link to={`/produto/${product.id}`} className="btn btn-outline-primary">
                    <span role="img" aria-label="Plus Emoji">➕ </span>
                    Mais Detalhes
                  </Link>
                  <button className="btn btn-success mt-2" onClick={() => handleAddToCart(product)}>
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      {
        selectedProduct && (
          <QuickViewModal
            show={showModal}
            onClose={handleCloseModal}
            product={selectedProduct}
          />
        )
      }

    </div>
  );
};

export default Products
