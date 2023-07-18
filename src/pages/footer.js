import React from "react";
import Footer1 from "../image/footer-icon/icon-1.png";
import Footer2 from "../image/footer-icon/icon-2.png";
import Footer3 from "../image/footer-icon/icon-3.png";

import Insta0 from "../image/footer-icon/insta/li-0.png";
import Insta1 from "../image/footer-icon/insta/li-1.png";
import Insta2 from "../image/footer-icon/insta/li-2.png";
import Insta3 from "../image/footer-icon/insta/li-3.png";
import Insta4 from "../image/footer-icon/insta/li-4.png";
import Insta5 from "../image/footer-icon/insta/li-5.png";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./footer.css";

export default function Footer() {
  return (
    <div id="footer-main">
      <div id="container">
        <div id="footer-container1">
          <div className="footer-contents">
            <h1>Teknolojik Yemekler</h1>
            <p>
              <img src={Footer1} alt="fimg1"></img> 341 Londonderry Road,
              İstanbul Türkiye
            </p>
            <p>
              <img src={Footer2} alt="fimg2"></img>{" "}
              aciktim@teknolojikyemekler.com
            </p>
            <p>
              <img src={Footer3} alt="fimg3"></img> +90 216 123 45 67
            </p>
          </div>

          <div className="footer-contents">
            <h2>Sıcacık Menüler</h2>
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hackathlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
          </div>

          <div className="footer-contents">
            <h2>Instagram</h2>
            <div id="insta-resimleri">
              <img src={Insta0} alt="insta0"></img>
              <img src={Insta1} alt="insta1"></img>
              <img src={Insta2} alt="insta2"></img>
              <img src={Insta3} alt="insta3"></img>
              <img src={Insta4} alt="insta4"></img>
              <img src={Insta5} alt="insta5"></img>
            </div>
          </div>
        </div>
        <hr id="hr" size="2" color="#2b2b2b" align="center" />
        <div id="footer-container2">
          <div>
            <p>@ 2023 Teknolojik Yemekler.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
