import { useContext } from 'react'
import AuthContext from 'src/context/AuthContext'
import { NavLink } from 'react-router-dom'
import './style.css'
import { useDoneTask, useOthersTask, useTasks } from 'src/hooks/task.hook'

const Nav = () => {
    const { logout } = useContext(AuthContext)
    const tasks = useTasks()
    const doneTasks = useDoneTask()
    const othersTasks = useOthersTask()

    const logoutHandler = event => {
        event.preventDefault()
        tasks.setNull()
        doneTasks.setNull()
        othersTasks.setNull()
        logout()
    }
    return (
        <nav className="nav">
            <ul className="nav__menu menu">
                <li className="menu__item"><NavLink to="/" className="menu__item-unactive" activeClassName="menu__item-active" exact>Главная</NavLink></li>
                <li className="menu__item"><NavLink to="/tasks" className="menu__item-unactive" activeClassName="menu__item-active">Задания</NavLink></li>
                <li className="menu__item"><NavLink to="/register" className="menu__item-unactive" activeClassName="menu__item-active" exact>Регистрация пользователя</NavLink></li>
                <li className="menu__item"><NavLink to="/settings" className="menu__item-unactive" activeClassName="menu__item-active">Настройки</NavLink></li>
                <li className="menu__item"><a href="/exit" className="menu__item-unactive" onClick={logoutHandler}>Выйти</a></li>
            </ul>
        </nav>
    )
}

export default Nav