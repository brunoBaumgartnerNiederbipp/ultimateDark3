import React from 'react';

import './index.css';
import App from './App';

import { BrowserRouter as Router } from "react-router-dom";

//import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";


//ReactDOM.render(<App />, document.getElementById("root"));

const container = document.getElementById("root");
const root = createRoot(container)
root.render(
 
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
 
)
