import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter } from "react-router-dom";
import App from "./App";


// Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Custom CSS
import './assets/css/main.css';
import './assets/css/media-query.css';

// Jquery
import jQuery from "jquery";
// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.min';
window.$ = window.jQuery = jQuery;




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
