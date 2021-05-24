import React, {useReducer, useContext} from "react";
import {UsersActions, UsersReducer} from "../reducers/UsersReducer";


const UsersContext = React.createContext({})

export const useUsers = () => {
    return useContext(UsersContext)
}

export const UsersProvider = ({children}) => {
    const addUsers = users => dispatch({type: UsersActions.ADD_USERS, users})
    const [state, dispatch] = useReducer(UsersReducer, {
        users: [],
        addUsers
    })

    return (
        <UsersContext.Provider value={state}>
            {children}
        </UsersContext.Provider>
    )
}