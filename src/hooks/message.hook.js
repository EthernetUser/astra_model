import React, { useContext, useReducer } from 'react'

const MessageContext = React.createContext()

export const useMessage = () => {
    return useContext(MessageContext)
}


const reducer = (state, action) => {
    switch (action.type) {
        case "show":
            return {...state, visible: true, message: action.text}
        case "hide":
            return {...state, visible: false, message: null}
        default: return state
    }
}

export const MessageProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, {
        message: null,
        visible: false
    })

    const show = text => dispatch({type: "show", text})
    const hide = () => dispatch({type: "hide"})

    return (
        <MessageContext.Provider value={{
            message: state.message, visible: state.visible,
            show, hide
        }}>
            {children}
        </MessageContext.Provider>
    )
}