import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import "./css/SeçilenÜrün.css";

export default function SepeteEkelenen({ urunler, setUrunler }) {
  const { id } = useParams();
  console.log("merhaba", id);

  useEffect(() => {
    axios
      .get(`https://6456b1042e41ccf16923222e.mockapi.io/pizza/${id}`)
      .then((response) => {
        setUrunler(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="container_urun">
      <div id="SecilenUrun-img">
        {/*<img src={urunler.foto} alt={urunler.PizzaAdi} />*/}
      </div>

      {/* <h3>{urunler.PizzaAdi}</h3>*/}
      <div id="fiyat-puan-satıs">
        {/*<h2 id="urun-fiyati">{urunler.Fiyat}₺</h2> */}
        <div id="puan-adet">
          {/* <p>{urunler.Paun}</p>*/}
          {/* <p>({urunler.SatisAdeti})</p>*/}
        </div>
      </div>
      {/* <p id="urun-acıklaması">{urunler.Aciklamasi}</p>*/}
    </div>
  );
}
