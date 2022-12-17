import React from "react";
import {Link} from "react-router-dom";
import logo from '../../img/logo2.png';


import "./footer.css";




const Footer = () => {
    return (
        <div className="footer">

           
         
        <div className="footerLogoDiv">
            <img className="footerLogo" src={logo} alt="Logo" />
        </div>
        <div className="footerMenu">
            <Link to ="./">Webdesign</Link>
            <Link to ="./onlineshop">Onlineshop</Link>
            <Link to ="./agentur">Agentur</Link>
            <Link to ="./designer">Designer</Link>
            <Link to ="./angebot">Angebot</Link>
            <Link to ="./methode">Methode</Link>
        </div>
        <div className="angebot">
            <p>Um ein Angebot für Ihre Webseite einzuholen Klicken Sie einfach auf den Button!</p>
        </div>
        <div className="angebot1">
        <a href="tel: 0799552859">
            <button className="call">Let's Talk</button>
        </a>
        </div>
        <div className="copy">
        <p>© 2022 Bruno Baumgartner</p>
    
    <p>'Ghost Theme' by Bruno Baumgartner</p>
    </div>
        </div>
    );
    }

    export default Footer;

