import style from './style.module.css'
import { NavLink } from 'react-router-dom'
import useRoutes from './routes'

const SettingsPage = () => {
    const route = useRoutes()

    return (
        <>
            <div className={style.main__body}>
                <div className="left">
                    <h1>Настройки</h1>
                    <ul className={style.menu}>
                        <li className={style.menu__item}><NavLink to="/settings/roles" className={style.item__link} activeClassName={style['item__link-active']}>Роли</NavLink></li>
                        <li className={style.menu__item}><NavLink to="/settings/posts" className={style.item__link} activeClassName={style['item__link-active']}>Должности</NavLink></li>
                        <li className={style.menu__item}><NavLink to="/settings/users" className={style.item__link} activeClassName={style['item__link-active']}>Пользователи</NavLink></li>
                        <li className={style.menu__item}><NavLink to="/settings/mailing" className={style.item__link} activeClassName={style['item__link-active']}>Рассылка</NavLink></li>
                    </ul>
                </div>
                <div className="right">
                    {route}
                </div>
            </div>
        </>
    )
}

export default SettingsPage