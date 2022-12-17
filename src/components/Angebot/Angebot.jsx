import React from "react";
import "./angebot.css"
import Action from "../CallToAction/CallToAction";
import Warum from "../Warum/Warum";

import Container from "../parallax/Parallax";
import { ContactUs } from "../Form/Form";


const Angebot = () => {
    return (
        <div className="angebot">
           <h1>Zu meinem Angebot</h1>
           <div>
              
           <div className="card">
                <h3>Konzeption</h3>
                <p>Durch genaue Planung baue ich Webseiten die Ihr Publikum begeistert.</p>
                <p>Jeder Webseite geht eine Konzeptionierung von UX und UI voraus.</p>
            </div>

            <div className="card">
                <h3>Entwicklung</h3>
                <p>Ich entwickle mit modernster Technik um Ihre Kunden mit Ihrer Webseite zu begeistern.</p>
                <p>Für meie Webseiten verwende ich Wordpress5, React, HTML, CSS, Javascript, jQery und vieles mehr.</p>
            </div>

            <div className="card">
                <h3>Onlinemarketing</h3>
                <p>Eine Webseite ist ideal für Facebook Werbung, Google Adds und jede Art von Onlinemarkeitng.</p>
                <p>Um Werbekosten zu sparen schaue ich auf eine gute Platzierung im Google Index.</p>
            </div>

            </div>
            <Action/>
            <Warum/>
            <Container/>
            <div className="flex">
         
         
         <button className="call">Angebot Einholen</button>
         </div>
        

         <h2>Meine Neusten Projekte</h2>
         <div className="flex">
             
         <div className="card">
             <h3>Bellu</h3>
             <p>Bellu ist ein regionales Baugeschäft welches mir den Auftrag für eine Webseite gag.</p>
             <p>Bei Bellu.ch arbeitete ich mit dem CMS Wordpress.</p>
         </div>

         <div className="card">
             <h3>IKAL TCM</h3>
             <p>Ikal TCM ist ein Heilpraktiker für welchen ich die Webseite anfertigen durfte.</p>
             <p>Für Ikal TCM verwendete ich das CMS Wordpress.</p>
         </div>


         <div className="card">
             <h3>Jewtschuk</h3>
             <p>Herr Jewtschuk ist der Inhaber eines Bauunternehmens welcher auf mich als Webdesigner vertraut.</p>
             <p>Für Jewtschuk arbeitete ich mit dem CMS Wordpress</p>
         </div>
        
         <div className="card">
             <h3>Luna Roja</h3>
             <p>Am Puls der Zeit habe ich einen persönlichen Politblog erstellt.</p>
             <p>Der Blog ist mit dem CMS Wordpress erstellt.</p>
         </div>
         </div>
         <ContactUs/>
        </div>
    );
    }

    export default Angebot;

