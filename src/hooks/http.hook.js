import { useCallback, useState } from 'react'

const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const request = useCallback( async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            if(body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            const response = await fetch(url, {
                method, body, headers
            })
            const data = await response.json()

            if(!response.ok) {
                const err = new Error(data.message || "Что то пошло не так")
                throw err
            }

            setLoading(false)
            return data
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }, [])
    
    return {
        request,
        loading
    }
}

export default useHttp