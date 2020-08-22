import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import "../components/Nav.css"
export const NavBar = () => {

    const { currentUser, isAuthenticated } = useSelector(state => state.auth)

    // helper to show links on Navbar if user is authenticated
    const showLinks = () => {
        if (isAuthenticated) {
            return (
                <>
                    <div className="ui inverted menu">
                        <div className="ui simple dropdown item">
                            <Link to="/dashboard" className="neon">{currentUser.email}</Link>
                            <i className="dropdown icon"></i>
                            <div className="menu dropbox">
                                <Logout />
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <Link to="/login" className="item">Login</Link>
                    <Link to="/register" className="item">Register</Link>
                </>
            )
        }

    }

    return (
        <div className="ui inverted menu">
            {/* <Link to="/" className="item">Home</Link> */}
            {isAuthenticated ? <Link to="/pageone" className="item">ARCADIAN</Link> : ""}
            <div className="right menu">
                {showLinks()}
            </div>
        </div>
    )
}

export default NavBar;