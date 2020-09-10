import React, { useEffect } from 'react'
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import { useDispatch } from "react-redux";
import { loadUser } from "../actions/authActions";
import NavBar from "./NavBar";
// import Home from "../pages/Home";
import UserDashboard from "../pages/UserDashboard";
import PageOne from "../pages/PageOne";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
// import NoMatch from "../pages/NoMatch";
import SnakeGamePage from '../pages/SnakeGamePage';
import TetrisGamePage from '../pages/TetrisGamePage';
import LifeGamePage from '../pages/LifeGamePage';
import MemoryGamePage from '../pages/MemoryGamePage';
import Tic from '../pages/TictacGamePage';


export const App = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Router history={history}>
                <NavBar />
                <Switch>
                    {/* <Route path="/" exact component={Home} /> */}
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/snake" component={SnakeGamePage} />
                    <Route path="/memory" component={MemoryGamePage} />
                    <Route path="/tetris" component={TetrisGamePage} />
                    <Route path="/tictac" component={Tic} />
                    <Route path="/life" component={LifeGamePage} />
                    <PrivateRoute path="/dashboard" component={UserDashboard} />
                    <PrivateRoute path="/pageone" component={PageOne} />
                    {/* <Route component={NoMatch} /> */}
                </Switch>
            </Router>
        </>
    )
}

export default App;