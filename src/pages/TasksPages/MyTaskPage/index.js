import {useTasks} from "src/hooks/task.hook";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import style from "./style.module.css";


const MyTaskPage = () => {
    const { tasks } = useTasks()
    const [task, setTask] = useState({})
    let {id} = useParams()
    useEffect(() => {
        id = parseInt(id)
        tasks.forEach(task => {
            if(task.id === id) setTask(task)
        })
    })

    return (
        <div>
            <h1>{task.name}</h1>
            <p>{task.essence}</p>
            <p>Рекомендуймое время начала: {new Date(Date.parse(task.predictedStartTime)).toLocaleString()}</p>
            <p>Рекомендуймое время конца: {new Date(Date.parse(task.predictedFinishTime)).toLocaleString()}</p>
        </div>
    )
}

export default MyTaskPage