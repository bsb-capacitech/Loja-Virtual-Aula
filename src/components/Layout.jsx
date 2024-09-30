import { Outlet, NavLink } from 'react-router-dom'
import styles from './Layout.module.css'

function Layout() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles.navbar}`}>
                <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    Minha Loja
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                to="/sobre"
                            >
                                Sobre
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                to="/contato"
                            >
                                Contato
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                to="/trabalhe-conosco"
                            >
                                Trabalhe Conosco
                            </NavLink>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>

            <div className={`container ${styles.mainComponent} mt-4 mb-3`}>
                <Outlet />
            </div>

            <footer className={`bg-dark text-light py-3 mt-auto ${styles.footer}`}>
                <div className="container text-center">
                <p>© 2024 Minha Loja. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout
