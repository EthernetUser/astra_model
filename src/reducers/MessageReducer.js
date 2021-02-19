export const MessageReducer = (state, action) => {
    switch (action.type) {
        case MessageActions.SHOW:
            return { ...state, visible: true, message: action.text }
        case MessageActions.HIDE:
            return { ...state, visible: false, message: null }
        default: return state
    }
}

export const MessageActions = {
    SHOW: "SHOW",
    HIDE: "HIDE"
}