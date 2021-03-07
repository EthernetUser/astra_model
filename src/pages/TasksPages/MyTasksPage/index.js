import style from './style.module.css'
import React, {useCallback, useContext, useEffect, useState} from 'react'
import useHttp from 'src/hooks/http.hook'
import Loader from 'src/components/Loader'
import {useTasks} from 'src/hooks/task.hook'
import AuthContext from 'src/context/AuthContext'
import RefreshButton from 'src/components/RefreshButton'
import {NavLink, useHistory} from "react-router-dom";

const MyTasksPage = () => {
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)
    const {tasks, addTasks, isFetched, setFetch} = useTasks()
    const history = useHistory()

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (!isFetched) fetchTasks()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) {
        return <Loader/>
    }

    if (tasks.length === 0) {
        return (
            <div className={style.main__body}>
                <h1>Мои задания</h1>
                <RefreshButton callback={fetchTasks} timeout={3000}/>
                <p>Заданий нет</p>
            </div>
        )
    }


    return (
        <div className={style.main__body}>
            <span className={style.main__header}>
            <h1>Мои задания</h1>
            <RefreshButton callback={fetchTasks} timeout={3000}/>
            </span>
            <ul className={style.list}>
                {
                    tasks.map((task, key) => {
                        return (
                            <li key={key} className={style.list__item}>
                                <NavLink
                                    to={`/tasks/mytasks/${task.id}`}>
                                    <span>{task.name}</span>
                                    <span>Выполнить к {new Date(Date.parse(task.predictedFinishTime)).toLocaleString()}</span>
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MyTasksPage