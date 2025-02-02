import axios from "axios";
import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import "./siparis_onayi.css";

export default function SiparisOnayi() {
  const { id } = useParams();
  console.log("merhaba", id);

  const [onayDatası, setOnayDatası] = useState([]);

  useEffect(() => {
    axios
      .get(`https://6456b1042e41ccf16923222e.mockapi.io/pizzaSiparisleri/${id}`)
      .then((response) => {
        setOnayDatası(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="onay-sayfasi-main">
      <div id="siparis-header">
        <h1 id="siparisH1">Teknolojik Yemekler</h1>
      </div>
      <div id="onay-sayfasi-1">
        <div>
          <div id="onay-sayfasi-container-1">
            <p id="lezzetin-yolda">lezzetin yolda</p>
            <h2>SİPARİŞ ALINDI</h2>
          </div>
          <hr />
          <div id="onay-sayfasi-container-2">
            <p id="onay-ürün-adi">{onayDatası.ÜrünAdı}</p>
            <div id="onay-container-2-içerisi">
              <div>
                <p>
                  Boyut:{" "}
                  <span className="onay-font-kalin">
                    {onayDatası.SecilenBoyut}
                  </span>
                </p>
                <p>
                  Hamur:{" "}
                  <span className="onay-font-kalin">
                    {onayDatası.seçiliHamur}
                  </span>
                </p>
                <p>
                  Ek Malzemeler:{" "}
                  <span className="onay-font-kalin">
                    {onayDatası.eklenenUrunler}
                  </span>
                </p>
                <p>
                  Sipariş Notu:{" "}
                  <span className="onay-font-kalin">
                    {onayDatası.siparisNotu}
                  </span>
                </p>
                <p>
                  Sipariş Toplamı:{" "}
                  <span className="onay-font-kalin">
                    {onayDatası.ÜrünFiyatı}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
