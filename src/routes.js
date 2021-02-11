import { Redirect, Route, Switch, Routes } from 'react-router-dom'
import LoginPage from './pages/AuthPages/LoginPage'
import MainPage from './pages/@MainPage'
import RegisterPage from './pages/AuthPages/RegisterPage'
import PostsPage from './pages/SettingsPage/PostsPage'
import RolesPage from './pages/SettingsPage/RolesPage'
import SettingsPage from './pages/SettingsPage'

function useRoutes(authenticated) {
    if(!authenticated) {
        return (
            <Switch>
                <Route path="/" exact>
                    <LoginPage />
                </Route>
                <Redirect to="/" exact/>
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
                <SettingsPage/>
            </Route>
            <Redirect to="/" exact/>
        </Switch>
    )
}

export default useRoutes