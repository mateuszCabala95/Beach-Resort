import React from 'react';
import {Link, Route, Switch} from 'react-router-dom'

import "./App.css"


import Home from "./pages/Home/Home";
import Rooms from "./pages/Rooms/Rooms";
import SingleRoom from "./pages/SingleRoom/SingleRoom";
import Error from "./pages/Error/Error";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    return (
        <React.Fragment>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/rooms/' component={Rooms}/>
                <Route exact path='/rooms/:slug' component={SingleRoom}/>
                <Route component={Error}/>
            </Switch>
        </React.Fragment>
    );
}

export default App;
