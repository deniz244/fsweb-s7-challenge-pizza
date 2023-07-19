import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./layout/home";
import SiparisOlustur from "./layout/siparisOlustur";
import Sepet_icerikleri from "./pages/Sepet/Siparis_Sayfasi/Sepet_icerikleri";
import SiparisOnayi from "./layout/siparis_onayi";

/* readme'de path'ler sırasıyla "/" ve "/pizza" */

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/siparis-olustur" element={<SiparisOlustur />}>
          <Route path="/siparis-olustur/:id" element={<Sepet_icerikleri />} />
        </Route>
        <Route path="/siparis-onayi" element={<SiparisOnayi />}>
          <Route path="/siparis-onayi:id" element={<SiparisOnayi />}></Route>
        </Route>
      </Routes>
    </>
  );
};
export default App;

/*
<Route path="/success" element={<SiparisOnayi />}>
          <Route path="/success:id" element={<SiparisOnayi />} />
        </Route>

        yani path="/success" olduğunda Sepet_icerikleri navigate kısmında da path="/success" verilirse yine çalışıyor 
 */
