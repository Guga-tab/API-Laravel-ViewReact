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
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>
            <div className="grade">
                <div className="lateral">x</div>
                <Outlet />
                <div className="lateral">y</div>
            </div>
        </div>
    )
}