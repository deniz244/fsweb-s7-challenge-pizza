import React from "react";

export default function SiparisNotu({ siparisNotu, setSiparisNotu }) {
  const siparisNotunuGuncelle = (event) => {
    setSiparisNotu(event.target.value);
  };

  return (
    <div>
      <label>Sipariş Notu:</label>
      <input type="text" value={siparisNotu} onChange={siparisNotunuGuncelle} />
    </div>
  );
}
