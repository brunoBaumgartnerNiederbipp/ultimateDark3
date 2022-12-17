import React from "react";
import logo from '../../img/logo2.png';
import Nav from "../Navbar/Navbar";

import "./header.css";




const Header = () => {
    return (
        <div className="header">
            <img src={logo} className="logo" alt="logo"></img>
                <Nav/>
        </div>
    );
    }

    export default Header;

