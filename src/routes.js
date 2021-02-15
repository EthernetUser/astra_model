import { Redirect, Route, Switch } from 'react-router-dom'
import { useMemo } from 'react'
import LoginPage from './pages/AuthPages/LoginPage'
import MainPage from './pages/@MainPage'
import RegisterPage from './pages/AuthPages/RegisterPage'
import SettingsPage from './pages/SettingsPage'

function useRoutes(authenticated) {
    return useMemo(() => {
        if (!authenticated) {
            return (
                <Switch>
                    <Route path="/" exact>
                        <LoginPage />
                    </Route>
                    <Redirect to="/" exact />
                </Switch>
            )
        }

        return (
            <Switch>
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="/register" exact>
                    <RegisterPage />
                </Route>
                <Route path="/settings">
                    <SettingsPage />
                </Route>
                <Redirect to="/" exact />
            </Switch>
        )
    }, [authenticated])
}

export default useRoutes