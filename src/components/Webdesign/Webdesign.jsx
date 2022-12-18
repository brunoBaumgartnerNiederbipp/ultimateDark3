import React from "react";
import {Link} from "react-router-dom"
import "./webdesign.css"
import Container from "../parallax/Parallax";
import Warum from "../Warum/Warum";
import Action from "../CallToAction/CallToAction";
import Hex from "../../img/Hex.mp4"
import Container2 from "../Parallax2/Paralax2";
import { ContactUs } from "../Form/Form";  



const Webdesign = () => {


    var bild = "";
var jetzt = new Date();
var Std = jetzt.getHours();
if (Std >= 5 && Std < 12) {
  bild = "./img/Tag.png";
} else if (Std >= 12 && Std < 18) {
  bild = "./img/Tag.png";
} else if (Std >= 18 && Std <= 23) {
  bild = "./img/Nacht.png";
} else if (Std >= 0 && Std < 5) {
  bild = "./img/Abend.png";
}

    return (
        <div className="webdesign">
            <img className="bild" src={bild} alt="Bildwechsler mit Winterbildern" />
            <video className="hex" src={Hex} autoPlay muted loop></video>
           <h1>Webdesign Bruno Baumgartner Niederbipp</h1>
           <div className="white">
           <p>Modern Webdesign for your Bussines!
            Seit 2018 erstelle ich für Sie moderne Webseiten in Wordpress5, HTML5, CSS3 und React.js.
           </p>
           <p>Dabei ist mir keine Herausforderung zu gross. Ob für Ihr Baugeschäft, Ihren Verein oder Ihren Coiffeursalon.
            Ob Komplette Unternehmensseite oder Mikropage, mit meiner Passion für Programierung kreiere ich
            originelle, schnelle und funktionale Seiten von A bis Z. 
           </p>
           <p>Mein Service beinhaltet modernes Userinterface, Userführung und SEO!</p>
            </div>
            <div className="flex">
                
            <Link to="./angebot" >
            <button className="call">Mehr erfahren</button>
            </Link>
            
            <Link to="#angebotEinholen" reloadDocument >
            <button className="call">Angebot einholen</button>
            </Link>
            </div>
            <h2>Warum eine Seite von Bruno Baumgartner?</h2>
            <div className="flex">
            <div className="card">
                <h3>Modernes Webdesign</h3>
                <p>Ich orientiere mich immer an den neusten Technologietrends und lasse diese in meine Designs einfliessen.</p>
                <p>Dabei eintstehen pixelperfekte Webseiten die Ihren Bedürfnissen und Anforderungen angepasst werden.</p>
            </div>

            <div className="card">
                <h3>Alles aus einer Hand</h3>
                <p>Ich bin ein einzelner Developer der von der UX über die UI bis zum Hositng der Seite alles selber macht.</p>
                <p>In einer Agentur gibt es für die verschiedenen Aspekte einen Spezialisten. Ich vereine alle Disziplinen des Webdevelopment in einer Person.</p>
            </div>


            <div className="card">
                <h3>Sichtbar werden</h3>
                <p>Meine Kunden wünschen sich ja nicht einfach nur eine schöne Webseite, sie wünschen sich mehr Sichtbarkeit bei Google und co.</p>
                <p>Durch meine langjährige Erfahrung ist es durch mich auch für Sie möglich bei Google ein breites Publikum anzusprechen.</p>
            </div>
            </div>
            <div className="flex">
            <div className="card">
                <h3>Kreativ Innovativ</h3>
                <p>Immer die Nase im Wind und am Puls der Zeit, bemühe ich mich um inovatives und kreatives Webdesign.</p>
                <p>Ich setzte dabei auf die neusten Technologien im Webdesign.</p>
            </div>

            <div className="card">
                <h3>Leads steigern</h3>
                <p>Eine Webseite ist heute das beste Werbemittel, wenn deise den auch benutzerfreundlich und Suchmaschienen opitmiert ist.</p>
                <p>Unter berücksichtigung verschiedener SEO Prinzipien werden meine Seiten auf Google auch gut gefunden.</p>
            </div>

            <div className="card">
                <h3>Content erstellen</h3>
                <p>Einer der Wichtigsten Punkte im Webdesign ist der Content.</p>
                <p>Deshalb fülle ich meine Webseiten mit ansprechendem Inhalt der dem Nutzer den grösst möglichen Mehrwert bietet.</p>
            </div>
            </div>

            <div className="flex">
         
         
            <button className="call">Angebot Einholen</button>
            </div>
            <Container/>

            <h2>Meine neusten Projekte</h2>
            <div className="flex">
                
            <div className="card">
                <h3>Bellu</h3>
                <p>Bellu ist ein regionales Baugeschäft welches mir den Auftrag für eine Webseite gab.</p>
                <p>Bei Bellu.ch arbeitete ich mit dem CMS Wordpress.</p>
                <a href="https://bellu.ch">Bellu</a>
            </div>

            <div className="card">
                <h3>IKAL TCM</h3>
                <p>Ikal TCM ist ein Heilpraktiker für welchen ich die Webseite anfertigen durfte.</p>
                <p>Für Ikal TCM verwendete ich das CMS Wordpress.</p>
                <a href="https://ikaltcm.ch">Ikal TCM</a>
            </div>


            <div className="card">
                <h3>Jewtschuk</h3>
                <p>Herr Jewtschuk ist der Inhaber eines Bauunternehmens welcher auf mich als Webdesigner vertraut.</p>
                <p>Für Jewtschuk arbeitete ich mit dem CMS Wordpress</p>
           <a href="https://jewtschuk.ch">Jewtschuk</a>
            </div>
           
            <div className="card">
                <h3>Luna Roja</h3>
                <p>Am Puls der Zeit habe ich einen persönlichen Politblog erstellt.</p>
                <p>Der Blog ist mit dem CMS Wordpress erstellt.</p>
           <a href="https://lunaroja.ch">Luna Roja</a>
            </div>
            </div>
            <Warum/>
            <Action/>
            <div className="competenzen">
                <h2>Meine Kompetenzen:</h2>
                <div className="card">
                
                <p>5 Jahre Erfahrung in der Webprogrammierung.</p>
                <p>Wordpress5, HTML5, CSS3, javaScript, React.js und vieles mehr.</p>
                <p>Professionelles Webdesign, professioneller Host, professionelles SEO.</p>
            </div>
            <Container2/>
            </div>
            <h2>Häufig gestellte Fragen!</h2>
            <div className="flex">
               
            <div className="card">
                <h3>Was kostet eine Webseite</h3>
                <p>Die Kosten für eine Webseite bemessen sich nach dem Aufwand.</p>
                <p>Dabei liegen die Preise zwischen 500.- und 3500.-</p>
            </div>

            <div className="card">
                <h3>Wie melde ich mich für eine Webseite</h3>
                <p>Sie können sich bei mir über das Formular auf der Webseite, per E-Mail oder telefonisch melden.</p>
                <p>Gerne vereinbare ich mit Ihnen ein Treffen um unverbindlich weiteres zu besprechen.</p>
            </div>

            <div className="card">
                <h3>Entstehen Unterhaltskosten und wieviel muss ich dafür aufwänden?</h3>
                <p>Die Kosten für den Server betragen 150.- pro Jahr</p>
                <p>Muss eine Webseite angepasst werden, belaufen sich die Kosten für den Unterhalt auf 32.-/ pro Stunde</p>
            </div>
            </div>
            <h2>Projekt starten!</h2>
            <div className="flex">
            <address >
                <p>Bruno Baugmartner</p>
                <p>Schlüsselmattweg 2</p>
                <p>4704 Niederbipp</p>
                <p>Tel: 079 955 28 59</p>
            </address>
            <div className="block">
            <ContactUs/>
            <div className="flex">
                <a href="mailto:hallo@oihawa.io">
            <button className="mailto">mailto:</button>
            </a>
            <a href="tel:0799552859">
            <button className="tel">tel:</button>
            </a>
            </div>
            </div>
            </div>
        </div>
    );
    }

    export default Webdesign;

