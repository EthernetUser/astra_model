import { useCallback, useContext, useEffect, useState } from 'react'
import AuthContext from 'src/context/AuthContext'
import useHttp from 'src/hooks/http.hook'
import { useMessage } from 'src/hooks/message.hook'
import style from './style.module.css'
import ReactHTMLDatalist from 'react-html-datalist'

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
    const { request, loading } = useHttp()
    const { show } = useMessage()
    const [executers, setExecuters] = useState([])

    const labelSpan = (
        <span className={style.executer_name}>{inputs.executerName}</span>
    )

    useEffect(() => {
        fetchExecuters()
        // eslint-disable-next-line
    }, [])

    const changeHandler = event => {
        setInputs({ ...inputs, [event.target.name]: event.target.value })
    }

    const fetchExecuters = useCallback(async () => {
        try {
            const headers = {
                authorization: `Bearer ${token}`
            }
            const data = await request('/api/user/', 'GET', null, headers)
            const temp = data.users.map(item => {
                return {text: `${item.firstName} ${item.lastName} (${item.post || "Должность не назначена"})`, value: item.id}
            })
            setExecuters(temp)
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
            <h1 onClick={() => console.log(inputs)}>Создание задания</h1>
            <form action="" className={style.form}>
                <label htmlFor="" className={style.label}>Название:</label>
                <input type="text" name="name" className={style.input} value={inputs.name} onChange={changeHandler} />

                <label htmlFor="" className={style.label}>Суть задания:</label>
                <textarea name="essence" id="" cols="60" rows="10" className={style.input} value={inputs.essence} onChange={changeHandler}/>

                <p className={style.label}>Исполнитель: {(inputs.executerName && labelSpan) || "не выбран"}</p>
                <ReactHTMLDatalist
                    name={'executerId'}
                    classNames={style.input}
                    onChange={(e) => {
                        if(e.target.value) {
                            setInputs({...inputs, executerId: e.target.value, executerName: e.target.text})
                        } else {
                            setInputs({...inputs, executerId: '', executerName: ''})
                        }
                    }}
                    options={executers}
                />

                <label htmlFor="" className={style.label}>Ожидаймое начало работы: {inputs.preStartTime ? new Date(inputs.preStartTime).toLocaleString() : "время не выбрано"}</label>
                <input type="datetime-local" name="preStartTime" id="" className={style.input} value={inputs.preStartTime} onChange={changeHandler} />

                <label htmlFor="" className={style.label}>Ожидаймый конец работы: {inputs.preFinishTime ? new Date(inputs.preFinishTime).toLocaleString() : "время не выбрано"}</label>
                <input type="datetime-local" name="preFinishTime" id="" className={style.input} value={inputs.preFinishTime} onChange={changeHandler} />

                <input type="button" value="Создать" className={style.btn} disabled={loading} onClick={createTask} />
            </form>
        </div>
    )
}

export default CreateTaskPage