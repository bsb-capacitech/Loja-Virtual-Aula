import { memo } from 'react'

function Contact() {
    return (
        <div className="container mt-5">
            <div className="row">
            <div className="col-md-6">
                <h1>Fale Conosco</h1>
                <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="name" placeholder="Digite seu nome" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Digite seu email" />
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Mensagem</label>
                    <textarea className="form-control" id="message" rows="3" placeholder="Digite sua mensagem"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default memo(Contact)
