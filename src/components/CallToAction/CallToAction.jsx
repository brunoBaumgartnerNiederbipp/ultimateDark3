import React from "react";
import "./callToAction.css"
import Hex from "../../img/Hex2.mp4"
import {Link} from "react-router-dom"

const Action = () => {
    return (
        <div className="action">
            <video className="hex2" src={Hex} autoPlay muted loop></video>
           <h2 className="actionTitle">Sichern Sie sich jetzt ihre Webseite!</h2>
           <Link to="#angebotEinholen" reloadDocument >
            <button className="actionCall">Angebot Einholen</button>
            </Link>
        </div>
    );
    }

    export default Action;

