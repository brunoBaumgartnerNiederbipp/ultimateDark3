import React from "react";
import "./methode.css"
import Action from "../CallToAction/CallToAction"


const Methode = () => {
    return (
        <div className="method">
           <h1>Meine Methode</h1>
           <p>Erst lehren wir uns kennen und eruieren Ihre Bedürftnisse.
             Beim 2. Meeting schlage ich verschiedene Designs und Konzepte vor.
             Dabei können Sie aus einer Vielzahl von Vorschlägen aussuchen.
             Jetzt wird Geplant und Kontent zusammengestellt. Ich übernehme dabei 
             auch gerne das Copyrighting des Inhalts dabei werden auch Funktionen der Seite besprochnen.
             Danach setze ich mich an die Entwicklung der gewünschten Seite.
           </p>
           <div className="konzept">
           <h2>I. Reserch</h2>
           <h2>II. Konzeption</h2>
           <h2>III. Design</h2>
           <h2>IV. Veröffentlichung</h2>
           <h2>V. Wachstum</h2>
           </div>
           <Action/>
           <h2>Warum eine Seite von mir?</h2>
            <div className="flex">
            <div className="card">
                <h3>Modernes Webdesign</h3>
                <p>Ich orientiere mich immer an den neusten Trends und lasse diese in meine Designs einfliessen.</p>
                <p>Dabei eintstehen Pixelperfekte Webseiten die Ihren Bedürfnissen und Anforderungen angepasst werden.</p>
            </div>

            <div className="card">
                <h3>Alles aus einer Hand</h3>
                <p>Ich bin ein einzelner Designer der von der UX über die UI bis zum Hositng der Seite alles selber macht.</p>
                <p>In einer Agentur gibt es für die verschiedenen Aspekte einen Spezialisten. Ich vereine alle Disziplinen des Designs in einer Person.</p>
            </div>


            <div className="card">
                <h3>Sichtbar werden</h3>
                <p>Meine Kunden wünschen sich ja nicht einfach nur eine schöne Webseite, sie wünschen sich mehr Sichtbarkeit bei Google und co.</p>
                <p>Durch meine Langjährige Erfahrung ist es durch mich auch für Sie möglich bei Google ein breites Publikum anzusprechen.</p>
            </div>
            </div>
            <div className="flex">
            <div className="card">
                <h3>Kreativ Inovativ</h3>
                <p>Immer die Nase im Wind und am Puls der Zeit, bemühe ich mich um inovatives und kreatives Webdesign.</p>
                <p>Ich setzte dabei auf die Neusten Technologien im Webdesign.</p>
            </div>

            <div className="card">
                <h3>Leads Steigern</h3>
                <p>Eine Webseite ist heute das beste Werbemittel, wenn deise den auch Benutzerfreundlich und Suchmaschienen opitmiert ist.</p>
                <p>Unter berücksichtigung verschiedener SEO Prinzipien werden meine Seiten auf Google auch gut gefunden.</p>
            </div>

            <div className="card">
                <h3>Content erstellen</h3>
                <p>Einer der Wichtigsten Punkte im Webdesign ist der Content.</p>
                <p>Deshalb fülle ich meine Webseiten mit ansprechendem Inhalt der dem Nutzer den grösst möglichen Mehrwert bietet.</p>
            </div>
            </div>

        </div>
    );
    }

    export default Methode;

