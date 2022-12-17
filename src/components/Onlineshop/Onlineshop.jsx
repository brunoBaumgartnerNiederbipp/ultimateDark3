import React from "react";
import Action from "../CallToAction/CallToAction";
import Container2 from "../Parallax2/Paralax2";
import Warum from "../Warum/Warum";
import {ContactUs }from "../Form/Form";
import "./onlineshop.css";


const Onlineshop = () => {
    return (
        <div className="onlineshop">
           <Action/>
           <div className="onlineshopText">
           <h1>Onlineshop</h1>
           <p>Ihr Onlineshop wird mit Woocomerce realisiert. Dieses Shopsystem eignet sich jedoch nur für Shops mit mehreren Hundert 
            Artikeln. Für einen grösseren Shop brauchen Sie Magento. Dies ist jedoch mit zusätzlichen Kosten für den Server verbunden.
            Ein Woocomerce Webshop ermöglicht eine ganze Reihe von Optionen. So sind Buchungen, Spenden, Downloads und Physische Wahren handelbar. 
            Die Verarbeitung der Zahlungen läuft dabe in einem Woocomerce Webshop über Stripe als Zahlungsprovider. Es sind So sowohl Zahlungen 
            von Master Card so wie Visa möglich.</p>

            </div>
            <Warum/>
            <Container2/>
            <ContactUs/>
            <Warum/>
        
        
        </div>
    );
    }

    export default Onlineshop;

