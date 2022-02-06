import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import NavigationComponent from "./components/navigation-component";
import HomePage from "./components/home-page/home-page";
import AuthPage from "./components/auth/auth-page";
import AboutPage from "./components/about/about-page";
import PortfolioDetail from "./components/portfolio/portfolio-detail";

// import logo from './logo.svg';
// import './App.css';
import "bootstrap/scss/bootstrap.scss";
import "./styles/main.scss";
import PortfolioManagerPage from "./components/portfolio/portfolio-manager/portfolio-manager-page";

function App() {
    const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");

    useEffect(() => {
        checkLoginStatus();
    }, []);

    const checkLoginStatus = () => {
        axios
            .get(`https://api.devcamp.space/logged_in`, { withCredentials: true })
            .then((response) => {
                const loggedIn = response.data.logged_in;
                if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
                    setLoggedInStatus("LOGGED_IN");
                } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
                    setLoggedInStatus("NOT_LOGGED_IN");
                }
            })
            .catch((error) => console.log(error.response));
    };

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
                            <Route path="/portfolio-manager">
                                <PortfolioManagerPage />
                            </Route>
                        ) : null}
                        <Route path="/portfolio/:permalink">
                            <PortfolioDetail />
                        </Route>
                        <Route>{/* no match component here */}</Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
