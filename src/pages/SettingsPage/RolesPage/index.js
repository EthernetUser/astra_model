import { useState, useContext, useEffect, useCallback } from 'react'
import AuthContext from 'src/context/AuthContext'
import Loader from 'src/components/Loader'
import useHttp from 'src/hooks/http.hook'
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
            <h1>Роли</h1>
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