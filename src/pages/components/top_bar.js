import React from "react";
import { Button } from "react-bootstrap";
import { useAuth } from '../../contexts/AuthContext';

const TopBar = () => {

    const { logout } = useAuth(); 

    const handleClick = () => {
        logout(); 
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold text-white" href="/">
                    My Todo List
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0"></div>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Button className="nav-link text-white" onClick={handleClick}>
                                Logout
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default TopBar;
