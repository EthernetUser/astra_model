import React, { useContext, useReducer } from 'react'
import { MessageActions, MessageReducer } from '../reducers/MessageReducer'

const MessageContext = React.createContext()

export const useMessage = () => {
    return useContext(MessageContext)
}

export const MessageProvider = ({ children }) => {

    const [state, dispatch] = useReducer(MessageReducer, {
        message: null,
        visible: false
    })

    const show = text => dispatch({ type: MessageActions.SHOW, text })
    const hide = () => dispatch({ type: MessageActions.HIDE })

    return (
        <MessageContext.Provider value={{
            message: state.message, visible: state.visible,
            show, hide
        }}>
            {children}
        </MessageContext.Provider>
    )
}