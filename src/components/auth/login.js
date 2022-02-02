import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorText, setErrorText] = useState("");

    const handleChange = (event) => {
        if (event.target.name === "email") {
            setEmail(event.target.value);
        } else if (event.target.name === "password") {
            setPassword(event.target.value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post(
                `https://api.devcamp.space/sessions`,
                {
                    client: { email: email, password: password },
                },
                { withCredentials: true }
            )
            .then((response) => {
                if (response.data.status === "created") {
                    props.handleAuth();
                }
            })
            .catch((error) => {
                setErrorText("An error occurred");
            });
    };

    return (
        <div>
            <h1>Login to access your dashboard</h1>
            <div>{errorText}</div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Your password"
                    value={password}
                    onChange={handleChange}
                />
                <div className="button-wrapper">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
