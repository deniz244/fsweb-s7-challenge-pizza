import React from "react";
import "./main.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Secenekler from "./secenekler";
import Navmenu from "../pages/navmenu";
import { useHistory } from "react-router-dom";

export default function Main() {
  const history = useHistory();
  const scrollToOptions = () => {
    const optionsElement = document.getElementById("secenekler");
    if (optionsElement) {
      optionsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="order-pizza">
      <div id="menü-içerik">
        <div id="menü-yazıları">
          <img src="logo.svg" alt="logo svg" />
          <p className="FONT-Satisfy">fırsatı kaçırma</p>
          <h1 className="FONT-Barlow-KOD">KOD ACIKTIRIR</h1>
          <h1 className="FONT-Barlow-KOD">PIZZA, DOYURUR</h1>
          <button id="main-button" onClick={scrollToOptions}>
            ACIKTIM
          </button>
        </div>
      </div>
    </div>
  );
}

/*   <h1 className='FONT-Barlow'>Teknolojik Yemekler</h1>*/
