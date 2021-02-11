import style from './style.module.css'
import { NavLink } from 'react-router-dom'
import useRoutes from './routes'

function SettingsPage() {
    const route = useRoutes()

    return (
        <>
            <div className={style.main__body}>
                <h1>Настройки</h1>
                <ul>
                    <li><NavLink to="/settings/posts">Должности</NavLink></li>
                    <li><NavLink to="/settings/roles">Роли</NavLink></li>
                </ul>
                {route}
            </div>
        </>
    )
}

export default SettingsPage