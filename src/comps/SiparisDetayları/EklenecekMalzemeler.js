import React from "react";
import { useState, useEffect } from "react";
import "./css/EklenecekMalzemeler.css";

import * as yup from "yup";

const urunler = [
  { name: "Pepperoni " },
  { name: "Domates " },
  { name: "Biber " },
  { name: "Sosis " },
  { name: "Mısır " },
  { name: "Sucuk " },
  { name: "Kanada Jambonu " },
  { name: "Zeytin " },
  { name: "Ananas " },
  { name: "Tavuk Izgara " },
  { name: "Jalepeno " },
  { name: "Kabak " },
  { name: "Soğan " },
  { name: "Sarımsak " },
];

export default function EklenecekMalzemeler({
  eklenenUrunler,
  setEklenenUrunler,
}) {
  const [urunlerIsSelected, setUrunlerIsSelected] = useState(
    urunler.map((urun) => ({
      ...urun,
      isSelected: false,
    }))
  );

  //yup --- en az 5 ek malzeme kontrolü
  const schema = yup.object().shape({
    selectedItems: yup
      .array()
      .min(5, "En az 5 malzeme seçmelisiniz.")
      .of(yup.string())
      .required(),
  });
  // UYARI MESAJINI YAZDIRMA
  let uyarıMesajı = null;
  try {
    schema.validateSync({ selectedItems: eklenenUrunler });
  } catch (error) {
    uyarıMesajı = <div>{error.message}</div>;
  }

  //  consola 5 tane az ürün seçilirse yazdırıyor
  useEffect(() => {
    schema
      .validate({ selectedItems: eklenenUrunler })
      .then(() => {})
      .catch((error) => {
        console.error(error.message);
      });
  }, [eklenenUrunler, schema]);
  /////////////////////////////////////////////////

  const handleCheckboxChange = (urun) => {
    const yeniUrunler = urunlerIsSelected.map((u) =>
      u.name === urun.name ? { ...u, isSelected: !u.isSelected } : u
    );
    setUrunlerIsSelected(yeniUrunler);

    if (urun.isSelected) {
      setEklenenUrunler((prevUrunler) =>
        prevUrunler.filter((u) => u !== urun.name)
      );
    } else {
      setEklenenUrunler((prevUrunler) => [...prevUrunler, urun.name]);
    }
  };

  const urunButonlari = urunlerIsSelected.map((urun, index) => (
    <label key={index} className="checkbox">
      <input
        type="checkbox"
        value={urun.name}
        checked={urun.isSelected}
        onChange={() => handleCheckboxChange(urun)}
      />
      <span className="checkmark"></span>
      <span id="MalzemeAdi">{urun.name}</span>
    </label>
  ));

  return (
    <div id="EklenecekMalzemeler-Main">
      <h3>Ek Malzemeler</h3>
      <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
      {
        <p id="uyari">
          {uyarıMesajı}
        </p> /*yup tan gelen 5 malzeme seçin uyarı mesajı p tag içinde  */
      }
      <div id="Ürünler">{urunButonlari}</div>
    </div>
  );
}

/*function secilenler(event) {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setEklenenUrunler((prevEklenenUrunler) => [...prevEklenenUrunler, value]);
    } else {
      setEklenenUrunler((prevEklenenUrunler) =>
        prevEklenenUrunler.filter((topping) => topping !== value)
      );
    }
  }*/
