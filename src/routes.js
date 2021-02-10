import { Redirect, Route, Switch } from 'react-router-dom'
import LoginPage from './pages/AuthPages/LoginPage'
import MainPage from './pages/MainPage'
import RegisterPage from './pages/AuthPages/RegisterPage'
import PostsPage from './pages/SettingsPages/PostsPage'
import RolesPage from './pages/SettingsPages/RolesPage'

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
            <Route path="/settings/posts" exact>
                <PostsPage />
            </Route>
            <Route path="/settings/roles" exact>
                <RolesPage />
            </Route>
            <Redirect to="/" exact/>
        </Switch>
    )
}

export default useRoutes