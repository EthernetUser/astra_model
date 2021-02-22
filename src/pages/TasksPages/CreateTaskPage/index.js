import { useCallback, useContext, useEffect, useState } from 'react'
import AuthContext from 'src/context/AuthContext'
import useHttp from 'src/hooks/http.hook'
import { useMessage } from 'src/hooks/message.hook'
import style from './style.module.css'

const CreateTaskPage = () => {
    const { token } = useContext(AuthContext)
    const [inputs, setInputs] = useState({
        name: '',
        essence: '',
        executerName: '',
        executerId: '',
        preStartTime: '',
        preFinishTime: ''
    })
    const [inputEx, setInputEx] = useState('')
    const [isFocused, setFocused] = useState(false)
    const { request, loading } = useHttp()
    const { show } = useMessage()
    const [executers, setExecuters] = useState([])

    const executersList = (
        <ul className={style.executers}>
            {executers.map((executer) => {
                const name = `${executer.firstName} ${executer.lastName} ${executer.post || "(Должность не назначена)"}`
                return <li className={style.executers__item} onMouseDown={() => setInputs({ ...inputs, executerName: name, executerId: executer.id })} key={executer.id}>{name}</li>
            })}
        </ul>
    )

    const filteredExecutersList = (
        <ul className={style.executers}>
            {executers.map((executer) => {
                const name = `${executer.firstName} ${executer.lastName} ${executer.post || "(Должность не назначена)"}`
                if (name.toLowerCase().indexOf(inputEx.toLowerCase()) === -1) {
                    return null
                } else {
                    return <li className={style.executers__item} onMouseDown={() => setInputs({ ...inputs, executerName: name, executerId: executer.id })} key={executer.id}>{name}</li>
                }
            })}
        </ul>
    )

    const labelSpan = (
        <span className={style.executer_name}>{inputs.executerName}</span>
    )

    useEffect(() => {
        fetchExecuters()
        // eslint-disable-next-line
    }, [])

    const changeHandler = event => {
        console.log(1)
        setInputs({ ...inputs, [event.target.name]: event.target.value })
    }

    const fetchExecuters = useCallback(async () => {
        try {
            const headers = {
                authorization: `Bearer ${token}`
            }
            const data = await request('/api/user/all', 'GET', null, headers)
            setExecuters(data.users)
        } catch (error) {

        }
        // eslint-disable-next-line
    }, [])

    const createTask = useCallback(async () => {
        for (let key in inputs) {
            if (inputs[key] === null || inputs[key] === '') {
                show('Заполните все поля')
                return
            }
        }

        try {
            const headers = {
                authorization: `Bearer ${token}`
            }
            const body = {
                name: inputs.name,
                essence: inputs.essence,
                executerId: inputs.executerId.toString(),
                preStartTime: inputs.preStartTime,
                preFinishTime: inputs.preFinishTime,
            }
            await request('/api/task/create', 'POST', body, headers)
        } catch (error) {

        }
        // eslint-disable-next-line
    }, [inputs])

    return (
        <div className={style.main__body}>
            <h1>Создание задания</h1>
            <form action="POST" className={style.form}>
                <label htmlFor="" className={style.label}>Название:</label>
                <input type="text" name="name" className={style.input} value={inputs.name} onChange={changeHandler} />

                <label htmlFor="" className={style.label}>Суть задания:</label>
                <textarea name="essence" id="" cols="60" rows="10" className={style.input} value={inputs.essence} onChange={changeHandler}></textarea>

                <p inputsclassName={style.label}>Исполнитель: {labelSpan || "не выбран"}</p>
                <input type="text" className={style.input} placeholder="Поиск..." onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onChange={(e) => setInputEx(e.target.value)} />
                {(isFocused && !loading) && (inputEx ? filteredExecutersList : executersList)}

                <label htmlFor="" className={style.label}>Ожидаймое начало работы: {inputs.preStartTime ? new Date(inputs.preStartTime).toLocaleString() : null || "время не выбрано"}</label>
                <input type="datetime-local" name="preStartTime" id="" className={style.input} value={inputs.preStartTime} onChange={changeHandler} />

                <label htmlFor="" className={style.label}>Ожидаймый конец работы: {inputs.preFinishTime ? new Date(inputs.preFinishTime).toLocaleString() : null || "время не выбрано"}</label>
                <input type="datetime-local" name="preFinishTime" id="" className={style.input} value={inputs.preFinishTime} onChange={changeHandler} />

                <input type="button" value="Создать" className={style.btn} disabled={loading} onClick={createTask} />
            </form>
        </div>
    )
}

export default CreateTaskPage