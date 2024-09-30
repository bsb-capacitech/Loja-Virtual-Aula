import { useState, useEffect } from 'react'

function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setProducts(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <p>Carregando...</p>
    }

    return (
        <div className="container">
            <div className="row">
                {
                    products.map((product) => (
                        <div className="col-md-4" key={product.id}>
                            <div className="card h-100">
                                <img src={product.image} alt={product.title} className="card-img-top" />

                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.price}</p>
                                    <a href={`produtos/produto-{product.id}`} className="btn btn-primary">Ver detalhes</a>
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
