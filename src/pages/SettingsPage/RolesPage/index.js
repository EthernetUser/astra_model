import {useState, useContext, useEffect, useCallback} from 'react'
import AuthContext from '../../../context/AuthContext'
import Loader from '../../../components/Loader'
import useHttp from '../../../hooks/http.hook'
import style from './style.module.css'

function RolesPage() {
    const [roles, setRoles] = useState([])
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

    useEffect(() => {
        fetchPosts()
    }, [fetchPosts])

    if (loading) {
        return <Loader />
    }
    return (
        <div className={style.main__body}>
            <h1>Страница ролей</h1>
            <ul>
                {roles.map((role, key) => {
                    return (
                        <li key={key}>{role.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default RolesPage