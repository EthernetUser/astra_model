import style from './style.module.css'
import {useCallback, useContext, useEffect, useState} from 'react'
import useHttp from 'src/hooks/http.hook'
import AuthContext from 'src/context/AuthContext'
import ReactHTMLDatalist from 'react-html-datalist'
import generatePassword from 'password-generator'

const UsersPage = () => {
    const {request} = useHttp() 
    const {token} = useContext(AuthContext)
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        post: '',
        phone: ''
    })

    const fetchUsers = useCallback(async () => {
        try {
            const headers = {
                authorization: `Bearer ${token}`
            }
            const data = await request('/api/user/', 'GET', null, headers)
            setUsers(data.users)
        } catch (e) {

        }
    }, [token, request])

    const fetchPosts = useCallback(async () => {
        try {
            const headers = {
                authorization: `Bearer ${token}`
            }
            const data = await request('/api/post/', 'GET', null, headers)
            const postsTmp = data.posts.map((post) => { return {text: post.name, value: post.name}})
            setPosts(postsTmp)
        } catch (e) {
        
        }
    }, [token, request])

    const generateRandomPassword = (e) => {
        e.preventDefault()
        setNewUser({...newUser, password: generatePassword(12, false)})
    }

    const changeNewUser = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }

    const createUser = useCallback(async (e) => {
        e.preventDefault()
        for(let key in newUser) {
            if(newUser[key] === '') {
                return
            }
        }

        try {
            const body = {
                ...newUser
            }

            const headers = {
                authorization: `Bearer ${token}`
            }
            const data = await request('/api/auth/register', 'POST', body, headers)
            if(data.status === 200) fetchUsers()
        } catch (e) {
        
        }
    }, [newUser, token, request])

    useEffect(() => {
        fetchUsers()
        fetchPosts()
    }, [fetchUsers, fetchPosts])

    return (
        <div className={style.main__body}>
            <h1>Пользователи</h1>
            <h4>Создать пользователя</h4>
            <form className={style.form}>
                <label htmlFor="" className={style.form__label}>Электронная почта</label>
                <input type="email" name="email" value={newUser.email} onChange={changeNewUser}/>
                <label htmlFor="" className={style.form__label}>Имя</label>
                <input type="text" name="firstName" value={newUser.firstName} onChange={changeNewUser}/>
                <label htmlFor="" className={style.form__label}>Фамилия</label>
                <input type="text" name="lastName" value={newUser.lastName} onChange={changeNewUser}/>
                <label htmlFor="" className={style.form__label}>Телефон</label>
                <input type="phone" name="phone" value={newUser.phone} onChange={changeNewUser}/>
                <label htmlFor="" className={style.form__label}>Должность</label>
                <ReactHTMLDatalist
                    name={"post"}
                    options={posts}
                    onChange={(e) => {
                        if(e.target.value) {
                            setNewUser({...newUser, post: e.target.value})
                        } else {
                            setNewUser({...newUser, post: ''})
                        }}
                    }
                />
                <label htmlFor="" className={style.form__label}>Пароль</label>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <input type="text" name="password" value={newUser.password} onChange={changeNewUser}/>
                    <button className={style.form__button} onClick={generateRandomPassword}>Сгенерировать случайный пароль</button>
                </div>
                <button className={style.form__button} onClick={createUser}>Создать</button>
            </form>
            <h4>Пользователи</h4>
            <div className={style.users}>
                {users.map((user, key) => {
                    return (
                        <div key={key} className={style.users__user}>
                           <p className={style.users__p}>Имя: {user.firstName}</p> 
                           <p className={style.users__p}>Фамилия: {user.lastName}</p> 
                           <p className={style.users__p}>Электронная почта: {user.email}</p> 
                           <p className={style.users__p}>Электронная почта: {user.phone}</p> 
                           <p className={style.users__p}>Должность: {user.post || "Не назначена"}</p> 
                           <button>Удалить пользователя</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UsersPage