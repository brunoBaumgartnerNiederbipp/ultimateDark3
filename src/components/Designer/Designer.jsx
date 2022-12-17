import React from "react";
import bruno from "../../img/Bruno.png";
import "./designer.css";


const Designer = () => {
    return (
        <div className="designer">
           <h1>Webdesign by Bruno Baumgartner</h1>
           <p>Ursprünglich habe ich Automechaniker gelernt, in dieser
            Ausbildung habe ich gelernt zu lernen.
            Seit 2012 lerne ich alles was mit IT zu tuen hat.
            2017 nahm ich das erste Mal einen Server in Betrieb und 
            seit 2018 Programmiere ich Webseiten. Ich habe mir UX und UI 
            Design selber beigebracht und mich jeden Tag weiter entickelt.
            Ich behaupte von mir mehr ein Entwickler mit Designskills zu sein 
            als ein Designer mit Entwicklerskills. Meine Zukunft liegt wohl
            in der Softwareentwicklung und in der KI.
           </p>
            <div className="flex">
           <img src={bruno} className="bruno" alt="Ein schönes Bild von Bruno Baumgarnter wie er Kaffe Trinkt" />
           </div>
        </div>
    );
    }

    export default Designer;

