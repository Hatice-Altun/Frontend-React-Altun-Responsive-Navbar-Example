import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import Logo from "../assets/logo.png";
import "../styles/Navbar.css";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>

            <div className="toggleButton">
                <button
                    onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}
                >
                    <ReorderIcon />
                </button>
            </div>
            <div className="links">
                <Link to="/">
          <span className="logo-container">
            <img src={Logo} alt="logo"/>
          </span>
                </Link>
                <Link to="/"> Home </Link>
                <Link to="/About"> About </Link>
                <Link to="/Shop"> Shop </Link>
                <Link to="/Contact"> Contact </Link>
            </div>
        </div>
    );
}

export default Navbar;
