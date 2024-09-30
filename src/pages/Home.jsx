function Home() {
    return (
        <div className="container mt-5">
            <div className="row mb-4">
                <div className="col">
                    <h1>Bem-vindo à nossa Loja Virtual!</h1>
                    <p>
                    Encontre os melhores produtos com ofertas exclusivas. Explore nossas categorias e descubra grandes promoções!
                    </p>
                    <a href="/produtos" className="btn btn-primary">Veja nossos produtos</a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                <div className="card">
                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="Produto 1" />
                    <div className="card-body">
                    <h5 className="card-title">Produto 1</h5>
                    <p className="card-text">Descrição breve do produto 1.</p>
                    <a href="#" className="btn btn-success">Adicionar ao carrinho</a>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="card">
                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="Produto 2" />
                    <div className="card-body">
                    <h5 className="card-title">Produto 2</h5>
                    <p className="card-text">Descrição breve do produto 2.</p>
                    <a href="#" className="btn btn-success">Adicionar ao carrinho</a>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="card">
                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="Produto 3" />
                    <div className="card-body">
                    <h5 className="card-title">Produto 3</h5>
                    <p className="card-text">Descrição breve do produto 3.</p>
                    <a href="#" className="btn btn-success">Adicionar ao carrinho</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home
