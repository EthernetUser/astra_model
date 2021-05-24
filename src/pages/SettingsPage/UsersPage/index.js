import style from './style.module.css'
import {useCallback, useContext, useEffect} from 'react'
import AuthContext from 'src/context/AuthContext'
import useHttp from 'src/hooks/http.hook'

const UsersPage = () => {
    const {token} = useContext(AuthContext)
    const {request} = useHttp() 
    const fetchUsers = useCallback(async () => {
        try {
            const headers = {
                authorization: `Bearer ${token}`
            }
            const data = await request('/api/user/', 'GET', null, headers)
            console.log(data);
        } catch (e) {

        }
    }, [token, request])

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    return (
        <div className={style.main__body}>
            <h1>Пользователи</h1>
            
        </div>
    )
}

export default UsersPage