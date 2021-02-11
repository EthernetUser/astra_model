import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { NavLink } from 'react-router-dom'
import './style.css'

function Nav() {
    const { logout } = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        logout()
    }
    return (
        <nav className="nav">
            <ul className="nav__menu menu">
                <li className="menu__item"><NavLink to="/">Главная</NavLink></li>
                <li className="menu__item"><NavLink to="/register">Регистрация пользователя</NavLink></li>
                <li className="menu__item"><NavLink to="/settings">Настройки</NavLink></li>
                <li className="menu__item"><a href="/exit" onClick={logoutHandler}>Выйти</a></li>
            </ul>
        </nav>
    )
}

export default Nav