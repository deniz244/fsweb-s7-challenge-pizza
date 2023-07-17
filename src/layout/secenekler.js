import React from "react";
import Oneriler from "../pages/oneriler";
import "./secenekler.css";
import Menuler from "../pages/menuler";
export default function Secenekler() {
  return (
    <div id="secenekler">
      <div>
        <Oneriler />
      </div>
      <div>
        <Menuler />
      </div>
    </div>
  );
}
