import { Redirect, Route, Switch } from 'react-router-dom'
import CreateTaskPage from './CreateTaskPage'
import DoneTasksPage from './DoneTasksPage'
import MyTasksPage from './MyTasksPage'
import MyTaskPage from "./MyTaskPage";
import OthersTasksPage from './OtherTasksPage'
import React from "react";

const useRoutes = () => {
    return (
        <Switch>
            <Route path="/tasks/mytasks" exact>
                <MyTasksPage/>
            </Route>
            <Route path="/tasks/mytasks/:id" exact>
                <MyTaskPage/>
            </Route>
            <Route path="/tasks/otherstasks" exact>
                <OthersTasksPage/>
            </Route>
            <Route path="/tasks/createtask" exact>
                <CreateTaskPage/>
            </Route>
            <Route path="/tasks/donetasks" exact>
                <DoneTasksPage/>
            </Route>
            <Redirect to="/tasks"/>
        </Switch>
    )
}

export default useRoutes