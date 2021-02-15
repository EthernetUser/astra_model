import React, { useState, useContext } from 'react'
import style from './style.module.css'
import AuthContext from 'src/context/AuthContext'
import { useMessage } from 'src/hooks/message.hook'
import useHttp from 'src/hooks/http.hook'
import Loader from 'src/components/Loader'

const LoginPage = () => {
    const { request, loading } = useHttp()
    const { login } = useContext(AuthContext)
    const { show } = useMessage()

    const [remembered, setRemembered] = useState(false)
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const rememberHandler = event => {
        setRemembered(event.target.checked)
    }

    const loginHandler = async event => {
        try {
            event.preventDefault()
            if (form.email === '' || form.password === '') {
                show('Все поля должны быть заполнены')
                return
            }
            const body = form
            const response = await request('api/auth/login', 'POST', body)
            login(response.token, remembered)
        } catch (error) {

        }
    }

    if (loading) {
        return <Loader />
    }

    return (
        <div className={style.main__body}>
            <div className={style.banner}>
                <h1 className={style.banner__h1}>ASTRA MODEL</h1>
                <p className={style.banner__p}>Современная система учета</p>
            </div>
            <form className={style.login__form}>
                <p className={style.login__header}>Войти</p>
                <p>Электронная почта</p>
                <input type="email" name="email" value={form.email} className={style.login__input} onChange={changeHandler} />
                <p>Пароль</p>
                <input type="password" name="password" value={form.password} className={style.login__input} onChange={changeHandler} />
                <span className={style.login__span}>
                    <p className={style.login__p}>Запомнить компьютер</p> <input type="checkbox" name="remember" checked={remembered} onChange={rememberHandler} />
                </span>
                <input type="submit" value="Войти" onClick={loginHandler} className={style.login__input} disabled={loading} />
            </form>
        </div>
    )
}

export default LoginPage