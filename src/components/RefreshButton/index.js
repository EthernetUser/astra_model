import { useCallback, useEffect, useState } from 'react'
import style from './style.module.css'

const RefreshButton = ({ callback, timeout }) => {
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        setTimeout(() => setDisabled(false), timeout)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const clickAction = useCallback(() => {
        callback()
    }, [callback])


    return (
        <button className={style.btn} onClick={clickAction} disabled={disabled}>Обновить</button>
    )
}

export default RefreshButton