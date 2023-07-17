import React from "react";
import Oneriler from "../comps/oneriler";
import "./secenekler.css";
import Menuler from "../comps/menuler";
import Urunler from "../comps/urunler";
export default function Secenekler() {
  return (
    <div id="secenekler">
      <div>
        <Oneriler />
      </div>
      <div>
        <Menuler />
      </div>

      <div>
        <Urunler />
      </div>
    </div>
  );
}
