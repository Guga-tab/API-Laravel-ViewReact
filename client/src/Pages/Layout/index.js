import { Link, Outlet } from 'react-router-dom'
import './Layout.scss'

export default function Layout() {
    return (
        <div>
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <div className="grade">
                <div className="side"></div>
                <div className="main">
                    <Outlet />
                </div>{/* Página correspondente ao link selecionado é exibida aqui. */ }
                <div className="side"></div>
            </div>
        </div>
    )
}