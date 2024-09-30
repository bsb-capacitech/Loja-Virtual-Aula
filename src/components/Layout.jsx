import { Outlet, NavLink } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/sobre">Sobre</NavLink></li>
                    <li><NavLink to="/contato">Contato</NavLink></li>
                    <li><NavLink to="/trabalhe-conosco">Trabalhe Conosco</NavLink></li>
                </ul>
            </nav>

            <hr />

            <Outlet />
        </div>
    )
}

export default Layout
