import React from "react";
import "./css/SiparisNotu.css";

export default function SiparisNotu({ siparisNotu, setSiparisNotu }) {
  const siparisNotunuGuncelle = (event) => {
    setSiparisNotu(event.target.value);
  };

  return (
    <div className="SiparisNotu">
      <div className="SiparisNotuText">
        <label>Sipariş Notu</label>
      </div>
      <div className="SiparisNotuİnput">
        <textarea
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          type="text"
          value={siparisNotu}
          onChange={siparisNotunuGuncelle}
        />
      </div>
    </div>
  );
}
