import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"

function Home() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"]

    const fetchProductsByCategory = async () => {
        try {
            const fetchedProducts = []

            for (const category of categories) {
                const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
                const data = await response.json()

                fetchedProducts.push(data[0])
            }

            setProducts(fetchedProducts)
        } catch (error) {
            console.error("Erro ao buscar produtos: ", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProductsByCategory()
    }, [])


    if (loading) {
       return <Loader />
    }

    return (
        <div className="container mt-5">
            <div className="row mb-4">
                <div className="col">
                    <h1>Bem-vindo à nossa Loja Virtual!</h1>
                    <p>
                    Encontre os melhores produtos com ofertas exclusivas. Explore nossas categorias e descubra grandes promoções!
                    </p>
                    <Link to="/produtos" className="btn btn-primary">Veja nossos produtos</Link>
                </div>
            </div>
            <div className="row">
                {
                    products.map(product => (
                        <div className="col-md-3" key={product.id}>
                            <div className="card h-100">
                                <h3 className="text-center text-capitalize mt-3 mb-4">{product.category}</h3>
                                <img src={product.image} className="object-fit-contain p-3" alt={product.title} style={{ maxWidth: '290px', maxHeight: '290px' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
