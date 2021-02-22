import style from './style.module.css'
import React, { useCallback, useContext, useEffect } from 'react'
import useHttp from 'src/hooks/http.hook'
import Loader from 'src/components/Loader'
import { useTasks } from 'src/hooks/task.hook'
import AuthContext from 'src/context/AuthContext'

const MyTasksPage = () => {
    const { loading, request } = useHttp()
    const { token } = useContext(AuthContext)
    const { tasks, addTasks, isFetched, setFetch } = useTasks()

    const fetchTasks = useCallback(async () => {
        try {
            const headers = {
                authorization: `Bearer ${token}`
            }
            const data = await request('/api/task/executer/all', 'GET', null, headers)
            addTasks(data.tasks)
        } catch (error) {

        }

        setFetch()
    }, [])

    useEffect(() => {
        if (!isFetched) fetchTasks() 
    }, [])

    if (loading) {
        return <Loader />
    }

    if (tasks.length === 0) {
        return (
            <div className={style.main__body}>
                <h1>Мои задания</h1>
                <p>Заданий нет</p>
            </div>
        )
    }

    return (
        <div className={style.main__body}>
            <h1>Мои задания</h1>
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

export default MyTasksPage