import React from "react";
import "./css/HamurKalinligi.css";

export default function HamurKalinligi({ seciliHamur, setSeciliHamur }) {
  const hamurSeciminiDegistir = (event) => {
    setSeciliHamur(event.target.value);
  };

  return (
    <div>
      <div id="HamurKalinligi-Main">
        <div>
          <label htmlFor="size-dropdown">
            Hamur Seç <span className="star">*</span>
          </label>
        </div>
        <div></div>
        <select
          name="size-dropdown"
          id="hamur-kalinigi"
          value={seciliHamur}
          onChange={hamurSeciminiDegistir}
        >
          <option value="sec">-Hamur Kalınlığı Seç-</option>
          <option value="İnce">İnce</option>
          <option value="Normal">Normal</option>
          <option value="Kalın">Kalın</option>
        </select>
      </div>
    </div>
  );
}
