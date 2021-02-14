import React, { useEffect, useContext, useState, useCallback } from 'react'
import AuthContext from '../../../context/AuthContext'
import style from './style.module.css'
import useHttp from '../../../hooks/http.hook'
import Loader from '../../../components/Loader'

function PostsPage() {
    const [posts, setPosts] = useState([])
    const { token } = useContext(AuthContext)
    const { loading, request } = useHttp()

    const fetchPosts = useCallback(async () => {
        try {
            const headers = {
                authorization: `Bearer ${token}`
            }
            const data = await request('/api/post/', 'GET', null, headers)
            setPosts(data.posts)
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
            <h1>Должности</h1>
            <ul>
                {posts.map((post, key) => {
                    return (
                        <li key={key}>{post.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PostsPage