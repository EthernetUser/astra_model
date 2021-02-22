export const TaskReducer = (state, action) => {
    switch (action.type) {
        case TaskActions.ADD_ONE:
            state.tasks.push(action.task)
            return {...state}
        case TaskActions.REMOVE_ONE:
            state.tasks.splice(action.id, 1)
            return {...state}
        case TaskActions.ADD_MANY:
            state.tasks = [...state.tasks, ...action.arrTasks]
            return {...state}
        case TaskActions.REMOVE_MANY:
            action.arrId.forEach(id => state.tasks.splice(id, 1))
            return {...state}
        case TaskActions.FETCHED:
            return {...state, isFetched: true}
        case TaskActions.SET_NULL:
            return {...state, isFetched: false, tasks: []}
        default:
            return state
    }
}

export const TaskActions = {
    ADD_ONE: "ADD_ONE",
    REMOVE_ONE: "REMOVE_ONE",
    ADD_MANY: "ADD_MANY",
    REMOVE_MANY: "REMOVE_MANY",
    FETCHED: "FETCHED",
    SET_NULL: "SET_NULL"
}