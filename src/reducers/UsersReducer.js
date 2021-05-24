export const UsersReducer = (state, action) => {
    switch (action.type) {
        case UsersActions.ADD_USERS:
            const usersToAdding = new Set(action.users)
            state.users = [...usersToAdding]
            return {...state}
        default: return state
    }
}

export const UsersActions = {
    ADD_USERS: "ADD_USERS"
}