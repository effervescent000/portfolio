import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

const NavigationComponent = (props) => {
    const history = useHistory();

    const handleSignout = () => {
        axios
            .delete("https://api.devcamp.space/logout", { withCredentials: true })
            .then((response) => {
                if (response.status === 200) {
                    history.push("/");
                    props.handleLogout();
                }
                return response.data;
            });
    };

    return (
        <div className="nav-wrapper">
            <div className="left-side">
                <Navbar>
                    <NavbarBrand href="/">Tara Richardson</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About Me</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                        {props.loggedInStatus === "LOGGED_IN" ? (
                            <NavItem>
                                <NavLink href="/portfolio-manager">Portfolio Manager</NavLink>
                            </NavItem>
                        ) : null}
                    </Nav>
                </Navbar>
            </div>
            <div className="right-side">
                {props.loggedInStatus === "LOGGED_IN" ? (
                    <button className="link-button" onClick={handleSignout}>
                        Logout
                    </button>
                ) : null}
            </div>
        </div>
    );
};

export default NavigationComponent;
