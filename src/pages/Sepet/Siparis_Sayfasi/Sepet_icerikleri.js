import React, { useState, useEffect } from "react";
import HamurBoyutu from "../../../comps/SiparisDetayları/PizzaBoyutu";
import HamurKalinligi from "../../../comps/SiparisDetayları/HamurKalinligi";
import SiparisNotu from "../../../comps/SiparisDetayları/SiparisNotu";
import EklenecekMalzemeler from "../../../comps/SiparisDetayları/EklenecekMalzemeler";
import SepeteEkelenen from "../../../comps/SiparisDetayları/SeçilenÜrün";

import ArtirmaEksiltme from "../../../comps/SiparisDetayları/ArtirmaEksiltme";

import axios from "axios";
import "./Sepet_icerikleri.css";
import { useNavigate } from "react-router-dom";

export default function Sepet_icerikleri() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      ÜrünAdı: ürünler.PizzaAdi,
      ÜrünFiyatı: ToplamFiyat + "₺",
      ÜrünAçıklaması: ürünler.Aciklamasi,
      ÜrünPuanı: ürünler.Puan,
      ÜrünSatışAdeti: ürünler.SatisAdeti,
      seçiliHamur: seciliHamur,
      SecilenBoyut: secilenBoyut,
      eklenenUrunler: eklenenUrunler,
      siparisNotu: siparisNotu,
    };

    // VERİ BAŞARILI GÖNDERLİRSE ==>>> SİPARİŞ ONAY SAYFASINA YÖNLENDİRME SUCCESS
    fetch("https://6456b1042e41ccf16923222e.mockapi.io/pizzaSiparisleri", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate(`/siparis-onayi/${sonSiparisId}`); //  Veri başarılı şekilde yüklendiyse yönlendirme yap
      })
      .catch((error) => console.log(error));
  };

  // SİPARİŞİN GÖNDERİLDİĞİ DATA SUNUCUDAN ESKİ BİR ÖNCEKİ İD NUMARASI ÇEKİLİYOR VE
  // ÇEKİLEN İD NUMARASININA  +1 EKLEYEREK YENİ SAYFAYA YÖNLENDİRMEK İÇİN İD NUMARASINI sonSiparisId İÇERİSİNE ATIYOR
  const [sonSiparisId, setSonSiparisId] = useState("");

  console.log("sonSiparisId", sonSiparisId);

  axios
    .get("https://6456b1042e41ccf16923222e.mockapi.io/pizzaSiparisleri")
    .then((response) => {
      const sonSiparisIdFromAPI = response.data[response.data.length - 1].id;
      const sonSiparisIdNumber = parseInt(sonSiparisIdFromAPI);
      const yeniSiparisId = sonSiparisIdNumber + 1;
      setSonSiparisId(yeniSiparisId.toString());
      console.log("En son yüklenen siparişin ID'si:", sonSiparisIdFromAPI);
    })
    .catch((error) => {
      console.error("API'den veriler alınamadı:", error);
    });

  const [ürünler, setÜrünler] = useState([]);

  // Pizza Boyutu
  const [secilenBoyut, setSecilenBoyut] = useState("Orta Boy (M)");
  console.log("Pizza Boyutu", { secilenBoyut });

  // Pizza Hamur Kalınlığı
  const [seciliHamur, setSeciliHamur] = useState("sec");
  console.log("Pizza Hamuru Kalınlığı", { seciliHamur });

  // Pizza Sipariş Notu
  const [siparisNotu, setSiparisNotu] = useState("");
  console.log("Siparis Notu:", { siparisNotu });

  //Ek Malzemeler
  const [eklenenUrunler, setEklenenUrunler] = useState([]);
  console.log("Eklenen Malzemeler:", { eklenenUrunler });

  // Sipariş Adeti Artırma ve Eksiltme
  const [adet, setAdet] = useState(1);
  console.log("Sipariş Adeti");

  //  TOPLAM FİYAT OLUŞTURMA BÖLÜMÜ //
  const PizzaUcreti = adet * ürünler.Fiyat;
  // EKLENEN ÜRÜN BAŞINA 5TL FİYAT EKLEME BÖLÜMÜ
  const EklenenUrunlerFiyati = adet * (eklenenUrunler.length * 5);

  // Toplam Ücret Hesaplandı
  const ToplamFiyat = PizzaUcreti + EklenenUrunlerFiyati;
  console.log("Toplam Güncel Fiyat:", ToplamFiyat, "₺");

  // 5 üründen az ek malzeme eklenirse submit button disable
  const [submitDisabled, setSubmitDisabled] = useState(false);
  useEffect(() => {
    if (eklenenUrunler.length < 5) {
      setSubmitDisabled(true);
    } else {
      setSubmitDisabled(false);
    }
  }, [eklenenUrunler]);

  return (
    <div id="main-con-sepet-icerik">
      <div id="main-container-sepet">
        <form id="pizza-form" onSubmit={handleSubmit}>
          <div id="container-Page">
            <div className="container-Siparis">
              <SepeteEkelenen urunler={ürünler} setUrunler={setÜrünler} />
            </div>

            <div id="Boyut-Hamur">
              <div className="container-Siparis">
                <HamurBoyutu
                  secilenBoyut={secilenBoyut}
                  setSecilenBoyut={setSecilenBoyut}
                />
              </div>

              <div className="container-Siparis">
                <HamurKalinligi
                  seciliHamur={seciliHamur}
                  setSeciliHamur={setSeciliHamur}
                />
              </div>
            </div>

            <div className="container-Siparis">
              <EklenecekMalzemeler
                eklenenUrunler={eklenenUrunler}
                setEklenenUrunler={setEklenenUrunler}
              />
            </div>

            <div className="container-Siparis">
              <SiparisNotu
                siparisNotu={siparisNotu}
                setSiparisNotu={setSiparisNotu}
              />
            </div>

            <div className="container-Siparis" id="button-siparis">
              <div id="siparis-detay-main">
                <div id="siparis-detay-container-1">
                  <div className="siparis_container_padding">
                    <ArtirmaEksiltme adet={adet} setAdet={setAdet} />
                  </div>

                  <div
                    className="siparis_container_padding"
                    id="siparis-detay-container-1-0"
                  >
                    <div id="siparis-detay-container-1-1">
                      <div className="siparis-fiyatlar">
                        <p id="bolder">Sipariş Toplamı</p>
                      </div>
                      <div className="siparis-fiyatlar acik-gri">
                        <p>Pizza Ücreti</p>
                        <p>{PizzaUcreti}₺</p>
                      </div>

                      <div className="siparis-fiyatlar acik-gri">
                        <p>Ek Ürünler</p>
                        <p>{EklenenUrunlerFiyati}₺</p>
                      </div>

                      <div className="siparis-fiyatlar toplam-ucret">
                        <p>Toplam</p>
                        <p>{ToplamFiyat}₺</p>
                      </div>
                    </div>

                    <div id="button-siparis">
                      <button
                        id="order-button"
                        type="submit"
                        disabled={submitDisabled}
                      >
                        SİPARİŞ VER
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
