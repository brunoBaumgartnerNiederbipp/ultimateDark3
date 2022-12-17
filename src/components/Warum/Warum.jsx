import React from "react";
import "./warum.css"



const Warum = () => {
    return (
        <div className="warum">
           <h3>Warum Bruno Baumgartner?</h3>
           <p>Innovatives Webdesign aus einer Hand!</p>

           <h3>Wie komme ich an das Angebot?</h3>
           <h4>Darf es ein bischen mehr sein?</h4>
            <p>Informieren Sie sich unverbindlich über die Kosten!</p>


            <div className="flexWarum">
            <h3>1.</h3><p>Formular ausfüllen!</p>
            </div> 
            <div className="flexWarum">
            <h3>2.</h3><p>Angebot erhalten!</p>
            </div>
            <div className="flexWaurm">
            <h3>3.</h3><p>Auftrags bestätigung!</p>
            </div> 
        </div>
    );
    }

    export default Warum;