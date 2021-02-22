import { useCallback, useContext, useEffect } from 'react'
import Loader from 'src/components/Loader'
import AuthContext from 'src/context/AuthContext'
import useHttp from 'src/hooks/http.hook'
import { useOthersTask } from 'src/hooks/task.hook'
import style from './style.module.css'

const OthersTasksPage = () => {
    const { tasks, isFetched, setFetch, addTasks } = useOthersTask()
    const { token } = useContext(AuthContext)
    const { request, loading } = useHttp()

    const fetchOthersTasks = useCallback(async () => {
        try {
            const headers = {
                authorization: `Bearer ${token}`
            }
            const data = await request('/api/task/all', 'GET', null, headers)
            addTasks(data.tasks)
        } catch (error) {

        }

        setFetch()
    }, [addTasks, request, setFetch, token])

    useEffect(() => {
        if (!isFetched) fetchOthersTasks()
    }, [fetchOthersTasks, isFetched])

    if (loading) {
        return <Loader />
    }

    if (tasks.length === 0) {
        return (
            <div className={style.main__body}>
                <h1>Задания сотрудников</h1>
                <p>Заданий нет</p>
            </div>
        )
    }

    return (
        <div className={style.main__body}>
            <h1>Задания сотрудников</h1>
            <ul className={style.list}>
                {
                    tasks.map((task, key) => {
                        return <li key={key}>{task.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default OthersTasksPage