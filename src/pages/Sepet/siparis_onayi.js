import React from "react";

export default function SiparisOnayi({ EklenenUrunlerDatası, siparisNotu }) {
  console.log("Çekilen veriler", EklenenUrunlerDatası);
  return (
    <div>
      <h2>Seçili malzemeler:</h2>
      <ul>
        {EklenenUrunlerDatası.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
      {siparisNotu}
    </div>
  );
}
