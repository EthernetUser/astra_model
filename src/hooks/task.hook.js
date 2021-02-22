import React, {useReducer, useContext} from 'react'
import {TaskActions, TaskReducer} from 'src/reducers/TaskReducer'

const TaskContext = React.createContext()

const OthersTaskContext = React.createContext()

const DoneTaskContext = React.createContext()

export const useTasks = () => {
    return useContext(TaskContext)
}

export const useOthersTask = () => {
    return useContext(OthersTaskContext)
}

export const useDoneTask = () => {
    return useContext(DoneTaskContext)
}

export const TaskProvider = ({children}) => {

    const addOneTask = task => {dispatch({type: TaskActions.ADD_ONE, task})}
    const removeOneTask = id => {dispatch({type: TaskActions.REMOVE_ONE, id})}
    const addTasks = arrTasks => {dispatch({type: TaskActions.ADD_MANY, arrTasks})}
    const removeTasks = arrId => {dispatch({type: TaskActions.REMOVE_MANY, arrId})}
    const setFetch = () => {dispatch({type: TaskActions.FETCHED})}
    const setNull = () => {dispatch({type: TaskActions.SET_NULL})}

    const [state, dispatch] = useReducer(TaskReducer, {
        tasks: [],
        isFetched: false,
        addOneTask,
        removeOneTask,
        addTasks,
        removeTasks,
        setFetch,
        setNull
    })

    return (
        <TaskContext.Provider value={state}>
            {children}
        </TaskContext.Provider>
    )
}

export const OthersTaskProvider = ({children}) => {

    const addOneTask = task => {dispatch({type: TaskActions.ADD_ONE, task})}
    const removeOneTask = id => {dispatch({type: TaskActions.REMOVE_ONE, id})}
    const addTasks = arrTasks => {dispatch({type: TaskActions.ADD_MANY, arrTasks})}
    const removeTasks = arrId => {dispatch({type: TaskActions.REMOVE_MANY, arrId})}
    const setFetch = () => {dispatch({type: TaskActions.FETCHED})}
    const setNull = () => {dispatch({type: TaskActions.SET_NULL})}

    const [state, dispatch] = useReducer(TaskReducer, {
        tasks: [],
        isFetched: false,
        addOneTask,
        removeOneTask,
        addTasks,
        removeTasks,
        setFetch,
        setNull
    })

    return (
        <OthersTaskContext.Provider value={state}>
            {children}
        </OthersTaskContext.Provider>
    )
}

export const DoneTaskProvider = ({children}) => {

    const addOneTask = task => {dispatch({type: TaskActions.ADD_ONE, task})}
    const removeOneTask = id => {dispatch({type: TaskActions.REMOVE_ONE, id})}
    const addTasks = arrTasks => {dispatch({type: TaskActions.ADD_MANY, arrTasks})}
    const removeTasks = arrId => {dispatch({type: TaskActions.REMOVE_MANY, arrId})}
    const setFetch = () => {dispatch({type: TaskActions.FETCHED})}
    const setNull = () => {dispatch({type: TaskActions.SET_NULL})}

    const [state, dispatch] = useReducer(TaskReducer, {
        tasks: [],
        isFetched: false,
        addOneTask,
        removeOneTask,
        addTasks,
        removeTasks,
        setFetch,
        setNull
    })

    return (
        <DoneTaskContext.Provider value={state}>
            {children}
        </DoneTaskContext.Provider>
    )
}