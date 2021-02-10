import React from 'react'

const AuthContext = React.createContext({
    token: null,
    ready: null,
    login: () => {},
    logout: () => {}
})

export default AuthContext