import React from "react";
import { useHistory } from "react-router-dom";

import Login from "./login";
import loginImage from "../../static/assets/images/login.jpg";

const AuthPage = (props) => {
    const history = useHistory();

    const handleAuth = () => {
        props.handleLogin();
        history.push("/");
    };
    return (
        <div className="auth-page-wrapper">
            <div className="left-column" style={{ backgroundImage: `url(${loginImage})` }} />
            <div className="right-column">
                <Login handleAuth={handleAuth} />
            </div>
        </div>
    );
};

export default AuthPage;
