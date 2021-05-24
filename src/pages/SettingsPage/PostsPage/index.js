import React, { useEffect, useContext, useState, useCallback } from 'react'
import AuthContext from 'src/context/AuthContext'
import style from './style.module.css'
import useHttp from 'src/hooks/http.hook'
import Loader from 'src/components/Loader'

const PostsPage = () => {
    const [posts, setPosts] = useState([])
    const { token } = useContext(AuthContext)
    const { loading, request } = useHttp()
    const [newPost, setNewPost] = useState('')

    const fetchPosts = useCallback(async () => {
        try {
            const headers = {
                authorization: `Bearer ${token}`
            }
            const data = await request('/api/post/', 'GET', null, headers)
            data.posts.sort((a, b) => a.id - b.id)
            setPosts(data.posts)
        } catch (error) {
            console.log(error)
        }
    }, [request, token])

    const createNewPost = useCallback(async () => {
        try {
            const headers = {
                authorization: `Bearer ${token}`
            }
            const body = {
                name: newPost
            }
            const data = await request('/api/post/create', 'POST', body, headers)
            fetchPosts()
        } catch (error) {
            console.log(error)
        }
    }, [newPost])

    const deletePost = useCallback(async (id) => {
        try {
            const headers = {
                authorization: `Bearer ${token}`
            }
            const body = {
                id
            }
            const data = await request('/api/post/delete', 'DELETE', body, headers)
            console.log(data);
            fetchPosts()
        } catch (error) {
            console.log(error)
        }
    }, [])

    const changeNewPost = (e) => {
        setNewPost(e.target.value)
    }

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
            <div className={style.leftSide}>
                <h1>Должности</h1>
                <ul className={style.posts}>
                    {posts.map((post, key) => {
                        return (
                            <li key={key} className={style.posts_item}>{post.name} <button onClick={() => deletePost(post.id.toString())}>Удалить</button></li>
                        )
                    })}
                </ul>
            </div>
            <div className={style.rightSide}>
                <h1>Добавить новую должность</h1>
                <label htmlFor="">Название:</label>
                <input type="text" onChange={changeNewPost}/>
                <button onClick={createNewPost}>Добавить</button>
            </div>
        </div>
    )
}

export default PostsPage