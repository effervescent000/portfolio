import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import NavigationComponent from "./components/navigation-component";
import HomePage from "./components/home-page/home-page";

// import logo from './logo.svg';
// import './App.css';
import "bootstrap/scss/bootstrap.scss";
import "./styles/main.scss";

function App() {
    const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");

    const handleLogin = () => {
        setLoggedInStatus("LOGGED_IN");
    };

    const handleLogout = () => {
        setLoggedInStatus("NOT_LOGGED_IN");
    };

    return (
        <div className="App">
            <Router>
                <div>
                    <NavigationComponent
                        loggedInStatus={loggedInStatus}
                        handleLogout={handleLogout}
                    />
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
