import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./urunler.css";

export default function Urunler() {
  const [urunler, setUrunler] = useState([]);

  useEffect(() => {
    axios
      .get("https://6456b1042e41ccf16923222e.mockapi.io/pizza")
      .then((response) => {
        setUrunler(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="ürünler-main">
      <div id="ürünler-container">
        <div className="ürünler">
          {urunler.map((urun) => (
            <Link key={urun.id} to={`/siparis-olustur/${urun.id}`}>
              <button className="ürün-çeşitleri">
                <img src={urun.foto} alt={urun.PizzaAdi} />
                <div className="puan-satış-fiyat">
                  <h2>{urun.PizzaAdi}</h2>
                  <div>
                    <p>{urun.Paun}</p>
                    <p>({urun.SatisAdeti})</p>
                    <p className="fiyat">{urun.Fiyat}</p>
                  </div>
                </div>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* 

import ürün1 from "../image/ürünler/food-1.png";
import ürün2 from "../image/ürünler/food-2.png";
import ürün3 from "../image/ürünler/food-3.png";



<div id="ürünler-main">
      <div id="ürünler-container">
        <div className="ürünler">
          <button className="ürün-çeşitleri">
            <img src={ürün1}></img>
            <div className="puan-satış-fiyat">
              <h2>Terminal Pizza</h2>
              <div>
                <p>4.9</p>
                <p>(200)</p>
                <p className="fiyat">60₺</p>
              </div>
            </div>
          </button>

          <button className="ürün-çeşitleri">
            <img src={ürün2}></img>
            <div className="puan-satış-fiyat">
              <h2>Position Absolute Acı Pizza</h2>
              <div>
                <p>4.9</p>
                <p>(928)</p>
                <p className="fiyat">85₺</p>
              </div>
            </div>
          </button>

          <button className="ürün-çeşitleri">
            <img src={ürün3}></img>
            <div className="puan-satış-fiyat">
              <h2>useEffect Tavuklu Burger</h2>
              <div>
                <p>4.9</p>
                <p>(462)</p>
                <p className="fiyat">75₺</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>*/
