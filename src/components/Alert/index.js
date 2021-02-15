import style from './style.module.css'
import { useMessage } from 'src/hooks/message.hook'

const Alert = () => {
    const { message, hide, visible } = useMessage()


    if (!visible) return null

    return (
        <>
            <div className={style.alert}>
                <p className={style.text}>{message}</p>
                <p onClick={hide} className={style.btn}>X</p>
            </div>
        </>
    )
}

export default Alert