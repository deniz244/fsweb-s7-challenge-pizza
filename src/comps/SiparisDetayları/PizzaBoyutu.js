import React from "react";
import "./css/PizzaBoyutu.css";

export default function HamurBoyutu({ secilenBoyut, setSecilenBoyut }) {
  const sizeOptions = [
    { name: "S", value: "Küçük Boy (S)" },
    { name: "M", value: "Orta Boy (M)" },
    { name: "L", value: "Büyük Boy (L)" },
  ];

  // butona tıkladıgında iptal edemiyor. sedece butonlar arası geçiş yapabiliyor
  const handleSizeSelection = (value) => {
    if (secilenBoyut !== value) {
      setSecilenBoyut(value);
    }
  };

  return (
    <div id="PizzaBoyutu-Main">
      <h3>
        Boyut Seç <span className="star">*</span>
      </h3>
      {sizeOptions.map((option) => (
        <input
          key={option.value}
          onClick={() => handleSizeSelection(option.value)}
          style={{
            backgroundColor: secilenBoyut === option.value ? "#FDC913" : "",
          }}
          type="button"
          value={option.name}
        />
      ))}
    </div>
  );
}
