import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import "./hamburger.css"
import { Link } from 'react-router-dom';
import DarkMode from '../DarkMode';



const Navigation = () => {

  return (
   <Menu>
       
   <Link to ="./" className="bm-item">Webdesign</Link>
   <Link to ="./onlineshop" className="bm-item">Onlineshop</Link>
   <Link to ="./agentur" className="bm-item">Agentur</Link>
   <Link to ="./designer" className="bm-item">Designer</Link>
   <Link to ="./angebot" className="bm-item">Angebot</Link>
   <Link to ="./methode" className="bm-item">Methode</Link>
   <DarkMode/>
   </Menu>
  );
  }

  export default Navigation;

