import React from "react";
import SepeteEkelenen from "../comps/SiparisDetayları/SeçilenÜrün";
import "./siparisOlustur.css";
import Sepet_icerikleri from "../pages/Sepet/Siparis_Sayfasi/Sepet_icerikleri";

import Footer from "../pages/footer";

export default function SiparisOlustur() {
  return (
    <div>
      <div id="siparis-header">
        <h1 id="siparisH1">Teknolojik Yemekler</h1>
      </div>

      <div id="siparis-ürünü">
        <SepeteEkelenen />
      </div>
      <div id="siparis-detayı">
        <Sepet_icerikleri />
      </div>

      <Footer />
    </div>
  );
}

/*
import ReactLogo from "./logo.svg";
<img src={ReactLogo} alt="logo svg" />



{/*<Sepet_icerikleri />*}

 */
