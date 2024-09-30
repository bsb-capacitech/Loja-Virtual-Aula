import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'

function Products() {
    const navigate = useNavigate()
    const location = useLocation()
    const query = new URLSearchParams(location.search)

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(query.get('categoria') || 'all')
    const [priceRange, setPriceRange] = useState([
        Number(query.get('minPreco')) || 0,
        Number(query.get('maxPreco')) || 1000,
    ])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((data) => {
                setCategories(data)
            })

        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
                setLoading(false)
            })
    }, [])

    const handleCategoyChange = (e) => {
        setSelectedCategory(e.target.value)
        navigate({
            pathname: location.pathname,
            seacrh: `?categoria=${e.target.value}&minPreco=${priceRange[0]}&maxPreco=${priceRange[1]}`
        })
    }

    const handlePriceChange = (e) => {
        const { value, name } = e.target

        const newRange = name === 'minPrice' ? [Number(value), priceRange[1]] : [priceRange[0], Number(value)]

        setPriceRange(newRange)
        
        navigate({
            pathname: location.pathname,
            seacrh: `?categoria=${e.target.value}&minPreco=${priceRange[0]}&maxPreco=${priceRange[1]}`
        })
    }



    const filteredProducts = products.filter(product => {
        const inCategory = selectedCategory === 'all' || product.category === selectedCategory;

        const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1]

        return inCategory && inPriceRange;
    })



    if (loading) {
        return <Loader />
    }

    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-md-4">
                    <label htmlFor="category" className="form-label">Categoria:</label>
                    <select id="category" className="form-select" value={selectedCategory} onChange={handleCategoyChange}>
                        <option value="all">Todas</option>
                        {
                            categories.map(category => (
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
                                <img src={product.image} alt={product.title} className="card-img-top" />

                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">R$ {product.price}</p>
                                    <a href={`/produto/${product.id}`} className="btn btn-primary">Ver detalhes</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products
