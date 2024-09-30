import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <p>Carregando...</p>
    }

    return(
        <div className="container">
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} className='img-fluid' />
            <p>{product.description}</p>
            <p>Preço: R$ {product.price}</p>
        </div>
    )
}

export default ProductDetails
