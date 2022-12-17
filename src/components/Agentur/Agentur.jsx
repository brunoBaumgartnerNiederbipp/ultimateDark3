import React from "react";
import "./agentur.css"
import sitzung from "../../img/sitzung.png"
import whitebord from "../../img/whitebord.png"
import work from "../../img/work.png"
import Warum from "../Warum/Warum";

const Agentur = () => {
    return (
        <div className="agentur">
           <h1>Agentur</h1>
           <p>Ich Arbeite alleine, meine Agentur verfügt jedoch über die nötige Infrastruktur um erfolgreich
            Entwickeln zu können.
           </p>
           <div className="flex1">
           <p>Sitzungsraum</p>
<img className="agi" src={sitzung} alt="sitzungsraum" />
<p>Whitebord</p>
<img className="agi" src={whitebord} alt="whitebord" />
<p>Workstation</p>
<img className="agi" src={work} alt="workstation" />

           </div>
           <Warum/>
        </div>
    );
    }

    export default Agentur;

