import { Route, Switch, Redirect } from 'react-router-dom'
import PostsPage from './PostsPage'
import UsersPage from './UsersPage'

const useRoutes = () => {
    return (
        <Switch>
            <Route path="/settings/posts" exact component={PostsPage}/>
            <Route path="/settings/users" exact component={UsersPage}/>
            <Redirect to="/settings"/>
        </Switch>
    )
}

export default useRoutes