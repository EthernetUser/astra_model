import { NavLink } from 'react-router-dom'
import useRoutes from './routes'
import style from './style.module.css'

const TasksPages = () => {
    const route = useRoutes()
    return (
        <div className={style.main__body}>
            <div className={style.left}>
                <h1>Страница заданий</h1>
                <ul className={style.menu}>
                    <li className={style.menu__item}><NavLink to="/tasks/mytasks" className={style.item__link} activeClassName={style['item__link-active']}>Мои задания</NavLink></li>
                    <li className={style.menu__item}><NavLink to="/tasks/createtask" className={style.item__link} activeClassName={style['item__link-active']}>Создать задание</NavLink></li>
                    <li className={style.menu__item}><NavLink to="/tasks/otherstasks" className={style.item__link} activeClassName={style['item__link-active']}>Задания сотрудников</NavLink></li>
                    <li className={style.menu__item}><NavLink to="/tasks/donetasks" className={style.item__link} activeClassName={style['item__link-active']}>Подтвердить выполненые задания</NavLink></li>
                </ul>
            </div>
            <div className={style.right}>
                {route}
            </div>
        </div>
    )
}

export default TasksPages