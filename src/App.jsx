import React from "react";
import {
 
  Routes,
  Route,

} from "react-router-dom";


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Contact from "./components/Contact/Contact";
import Onlineshop from "./components/Onlineshop/Onlineshop";
import Webdesign from "./components/Webdesign/Webdesign";
import Agentur from "./components/Agentur/Agentur";
import Designer from "./components/Designer/Designer";
import Angebot from "./components/Angebot/Angebot";
import Methode from "./components/Methode/Methode";


function App() {
  return (
<>

    <Header/>
   
    <Routes>
            <Route path="/" exact element={<Webdesign />} />
            <Route path="/Onlineshop" exact element={<Onlineshop/>} />
            <Route path="/Agentur" exact element={<Agentur/>} />
            <Route path="/Designer" exact element={<Designer/>} />
            <Route path="/Angebot" exact element={<Angebot/>} />
            <Route path="/Methode" exact element={<Methode/>} />
            <Route path="/Contact" exact element={<Contact/>} />
            <Route path="*" element={404} />
    </Routes>
    <Footer/>
   
    </>
  );
}


export default App;