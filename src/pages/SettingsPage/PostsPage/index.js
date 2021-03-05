import React, { useEffect, useContext, useState, useCallback } from 'react'
import AuthContext from 'src/context/AuthContext'
import style from './style.module.css'
import useHttp from 'src/hooks/http.hook'
import Loader from 'src/components/Loader'

const PostsPage = () => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) {
        return <Loader />
    }

    if(posts.length < 1) {
        return (
            <div className={style.main__body}>
                <h1>Должности</h1>
                <p>Должностей не найдено</p>
            </div>
        )
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