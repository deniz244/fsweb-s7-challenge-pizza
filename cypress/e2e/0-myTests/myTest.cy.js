describe("Pizza projesi testlerim", () => {
  //localhost:3000 --- proje anasayfa'ya gidebiliyor mu?
  //main.js içindeki id'si main-button olan buton tıklandığında
  it("Anasayfa Test", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#main-button").click();
    cy.wait(500);
  });

  //sipariş oluşturma (/pizza sayfasında) id=1 (Terminal pizza için) o form sayfasına gidiyor mu?
  it("Sipariş sayfası form testleri", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[href="/siparis-olustur/1"] > .ürün-çeşitleri').click();
    cy.wait(2000);

    //en az 5 tane malzeme seçildi mi uyarı yazısı kontrolü
    cy.get("#uyari > div").should(
      "contain.text",
      "En az 5 malzeme seçmelisiniz."
    );
    cy.wait(2000);
    cy.get(":nth-child(1) > .checkmark").click();
    cy.get(":nth-child(2) > .checkmark").click();
    cy.get(":nth-child(3) > .checkmark").click();
    cy.get(":nth-child(4) > .checkmark").click();
    cy.get(":nth-child(5) > .checkmark").click();
    cy.wait(1000);

    //sipariş notu kısmına sipariş notu verilebiliyor mu yani Sipariş notu !!! yazıyor mu?
    cy.get("textarea").type("Sipariş notu !!!!");
    //ilk 5 ek malzeme seçildiğinde toplam ücret 85 yazmalı
    cy.get(".toplam-ucret > :nth-child(2)").should("contain.text", "85");

    //form sayfası gönderiliyor mu?
    //SİPARİŞ VER butonu tıklandığında sipariş onayı/success sayfasına gittiğinde
    //Terminal pizza ürün adını alabiliyor mu?
    cy.get("#button-siparis > button").click();
    cy.get("#onay-ürün-adi").should("contain.text", "Terminal Pizza");
  });
});
