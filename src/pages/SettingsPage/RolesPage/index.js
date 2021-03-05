import React, { useState, useContext, useEffect, useCallback } from 'react'
import AuthContext from 'src/context/AuthContext'
import Loader from 'src/components/Loader'
import useHttp from 'src/hooks/http.hook'
import style from './style.module.css'
import ReactHTMLDatalist from 'react-html-datalist'

const RolesPage = () => {
    const [roles, setRoles] = useState([])
    const [users, setUsers] = useState([])
    const [inputs, setInputs] = useState({
        user: '',
        userId: ''
    })
    const { token } = useContext(AuthContext)
    const { loading, request } = useHttp()

    const fetchPosts = useCallback(async () => {
        try {
            const headers = {
                authorization: `Bearer ${token}`
            }
            const data = await request('/api/role/', 'GET', null, headers)
            setRoles(data.roles)
        } catch (error) {
            console.log(error)
        }
    }, [request, token])

    const fetchUsers = useCallback(async () => {
        try {
            const headers = {
                authorization: `Bearer ${token}`
            }
            const data = await request('/api/user/', 'GET', null, headers)
            const temp = data.users.map(item => {
                return {value: item.id, text: `${item.firstName} ${item.lastName}`}
            })
            setUsers(temp)
        } catch (error) {
            console.log(error)
        }
    }, [request, token])

    useEffect(() => {
        fetchPosts()
        fetchUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const changeHandler = (e) => {
        if(e.target.value){
            setInputs({...inputs, [e.target.name]: e.target.value})
        } else {
            setInputs({...inputs, [e.target.name]: ''})
        }
    }

    if (loading) {
        return <Loader />
    }

    // if(roles.length < 1) {
    //     return (
    //         <div className={style.main__body}>
    //             <h1>Роли</h1>
    //             <p>Роли не найдены</p>
    //         </div>
    //     )
    // }

    return (
        <div className={style.main__body}>
            <h1 onClick={() => console.log(inputs)}>Роли</h1>
            <ul>
                {roles.map((role, key) => {
                    return (
                        <li key={key}>{role.name}</li>
                    )
                })}
                {/*<input type="text" list={'data'}  placeholder={'Поиск...'} value={inputs.user} name={'user'} onChange={inputHandler}/>*/}
                {/*<Datalist id={"data"} list={users}/>*/}
                <ReactHTMLDatalist
                    name={'userId'}
                    onChange={changeHandler}
                    options={users}
                />
            </ul>
        </div>
    )
}

export default RolesPage