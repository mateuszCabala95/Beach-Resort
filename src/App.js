import React from 'react';
import {Link, Route, Switch} from 'react-router-dom'

import "./App.css"


import Home from "./pages/Home/Home";
import Rooms from "./pages/Rooms/Rooms";
import SingleRoom from "./pages/SingleRoom/SingleRoom";
import Error from "./pages/Error/Error";


function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/rooms/' component={Rooms}/>
                <Route exact path='/rooms/:slug' component={SingleRoom}/>
                <Route component={Error}/>
            </Switch>
        </div>
    );
}

export default App;
