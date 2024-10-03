import { useEffect, useState, memo } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import Loader from '../components/Loader'

function ProductDetails() {
    const { addToCart } = useCart()
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
        return <Loader />
    }

    return(
        <div className="container">
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} className='img-fluid' />
            <p>{product.description}</p>
            <p>Preço: R$ {product.price}</p>
            <button className="btn btn-success" onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
        </div>
    )
}

export default memo(ProductDetails)
