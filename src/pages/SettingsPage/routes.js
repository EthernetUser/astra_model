import { Route, Switch, Redirect } from 'react-router-dom'
import PostsPage from './PostsPage'
import RolesPage from './RolesPage'

function useRoutes() {
    return (
        <Switch>
            <Route path="/settings/posts" exact component={PostsPage}/>
            <Route path="/settings/roles" exact component={RolesPage}/>
            <Redirect to="/settings"/>       
        </Switch>
    )
}

export default useRoutes