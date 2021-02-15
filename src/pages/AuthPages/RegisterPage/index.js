import style from './style.module.css'
import { useMessage } from 'src/hooks/message.hook'

function RegisterPage() {
    const { show } = useMessage()
    return (
        <div className={style.main__body}>
            <h1>Регистерационная страница</h1>
            <button onClick={() => {show('Hello')}}>Say Hello</button>
        </div>
    )
}

export default RegisterPage 