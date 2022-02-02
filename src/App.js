import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import NavigationComponent from "./components/navigation-component";
import HomePage from "./components/home-page/home-page";
import AuthPage from "./components/auth/auth-page";
import AboutPage from "./components/about/about-page";

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
                        <Route path="/auth">
                            <AuthPage handleLogin={handleLogin} />
                        </Route>
                        <Route path="/about">
                            <AboutPage />
                        </Route>
                        <Route path="/contact">{/* contact page goes here */}</Route>
                        {loggedInStatus === "LOGGED_IN" ? (
                            <Route path="/portfolio-manager">{/* portfolio manager here */}</Route>
                        ) : null}
                        <Route path="/portfolio/:permalink">
                            {/* portfolio detail goes here */}
                        </Route>
                        <Route>{/* no match component here */}</Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
