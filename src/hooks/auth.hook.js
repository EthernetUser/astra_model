import  { useCallback, useState, useEffect } from 'react'

const useAuth = () => {
    const [token, setToken] = useState(null)
    const [ready, setReady] = useState(false)

    const login = useCallback((token, isRemembered = false) => {
        setToken(token)
        const data = { token }

        if (!isRemembered) {
            sessionStorage.setItem('userData', JSON.stringify(data))
        } else {
            localStorage.setItem('userData', JSON.stringify(data))
        }
    }, [])

    const logout = useCallback(() => {
        setToken(null)

        localStorage.clear()
        sessionStorage.clear()
    }, [])

    useEffect(() => {
        let data = {}
        let isRemembered = false

        if (localStorage.getItem('userData')) {
            data = JSON.parse(localStorage.getItem('userData'))
            isRemembered = false
        } else if (sessionStorage.getItem('userData')) {
            data = JSON.parse(sessionStorage.getItem('userData'))
            isRemembered = true
        }

        if (data && data.token) {
            login(data.token, isRemembered)
        }
        setReady(true)
    }, [login])

    return { token, ready, login, logout }
}

export default useAuth