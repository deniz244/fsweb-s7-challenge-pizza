import React from "react";
import "./main.css";

//import { useHistory } from "react-router-dom";

export default function Main() {
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

/*   <h1 className="FONT-Barlow">Teknolojik Yemekler</h1>   yerine

     <img src="logo.svg" alt="logo svg" /> ----artık çalışmıyor neden anlamadım

*/
