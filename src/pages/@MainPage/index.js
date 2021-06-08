import style from './style.module.css'

const MainPage = () => {
    return (
        <div className={style.main__body}>
            <h1>Главная страница</h1>
            <h3>Задания</h3>
            <div className={style.task}>
                <p><span>Задание: </span>Test</p>
                <p><span>Суть задания: </span> Протестировать приложение.</p>
                <p><span>Дата начала: </span>10:00 01.05.2021</p>
                <p><span>Дата завершения: </span>16:00 02.05.2021</p>
                <button>К заданию</button>
            </div>
            <div className={style.task}>
                <p><span>Задание: </span>Test</p>
                <p><span>Суть задания: </span> Протестировать приложение.</p>
                <p><span>Дата начала: </span>10:00 01.05.2021</p>
                <p><span>Дата завершения: </span>16:00 02.05.2021</p>
                <button>К заданию</button>
            </div>
        </div>
    )
}

export default MainPage