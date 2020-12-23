import React, { Component } from "react";
import {
  ContainerProduct,
  ContainerProductRev,
  ProductImage,
  ProductDescription1, 
  ProductDescription2, 
  ProductDescription3, 
  ProductDescription4, 
  ProductHeader, 
  ProductContent, 
  ProductHeaderRev, 
  ProductContentRev
} from "./MainProductsStyle";
import product1 from "../../../Assets/1-photo.png";
import product2 from "../../../Assets/2-photo.png";
import product3 from "../../../Assets/3-photo.png";
import product4 from "../../../Assets/4-photo.png";

class MainProducts extends Component {
  constructor(props) {
    super(props);
    this.getPHP = this.getPHP.bind(this);
  }
  getPHP(){
    /*
    var formData= new FormData();
    formData.append('content','test2');
        fetch(`http://srodowiskowokolicy.pl/wspolne_halas_json.php`,{
          method:'POST',
          headers:{
          
          },
          body: JSON.stringify({
       content:'test1',
          }),
        }).then(res => res.json())
        .then(response =>{
          console.log('response:');
          console.log(response);
        })
    */
   /*
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://srututuutu.pl/wspolne_halas_json.php"; // site that doesn’t send Access-Control-*
        fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
        .then(response => response.text())
        .then(contents => console.log(contents))
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

*/
      }
  render() {
    return (
      <React.Fragment>
        <ContainerProduct>
          <ProductImage src={product1} alt="produkt1"/>
          <ProductDescription1>
            <ProductHeader>Masz problem z hałasem?</ProductHeader>
            <ProductContent>Czujesz, że jest głośno, ale nie masz pewności czy to już przekroczenia? Mieszkasz lub pracujesz przy ruchliwej drodze lub zakładzie przemysłowym? Sąsiedzi skarżą się, że to twoje urządzania pracują za głośno? Po prostu mieszkasz w cichej okolicy i chcesz żeby tak zostało?</ProductContent>
          </ProductDescription1>
        </ContainerProduct>
        <ContainerProductRev>
          <ProductDescription2>
            <ProductHeaderRev>Monitoruj stan środowiska akustycznego w otoczeniu Twojego domu</ProductHeaderRev>
            <ProductContentRev>Oferujemy miernik poziomu dźwięku realizujący pomiar hałasu w czasie rzeczywistym z dostępem do wyników online poprzez stronę www z przejrzystą wizualizacją danych i podglądem na urządzeniach mobilnych. Nasze mierniki kalibrowane są do profesjonalnych urządzeń klasy 1.</ProductContentRev>
          </ProductDescription2>
          <ProductImage src={product2} alt="produkt2"/>
        </ContainerProductRev>
        <ContainerProduct>
          <ProductImage src={product3} alt="produkt3"/>
          <ProductDescription3>
            <ProductHeader>Z dbałością o detale</ProductHeader>
            <ProductContent>Opracowane przez nas unikatowe urządzanie w erze big data pozwala na gromadzenie i analizowanie praktycznie nieograniczonej liczby danych tak aby moc je wykorzystywać w minimalizacji negatywnego wpływu hałasu na otaczające nas środowisko.</ProductContent>
          </ProductDescription3>
        </ContainerProduct>
        <ContainerProductRev>
          <ProductDescription4>
            <ProductHeaderRev>Wielofunkcyjność</ProductHeaderRev>
            <ProductContentRev>Nadzorujemy proces montażu i analizujemy otrzymane wyniki w odniesieniu do aktualnych przepisów dotyczących dopuszczalnego poziomu hałasu. Nasze urządzenie zaprojektowaliśmy i stworzyliśmy do pomiarów zarówno wewnątrz jak i na zewnątrz pomieszczeń.</ProductContentRev>
          </ProductDescription4>
          <ProductImage src={product4} alt="produkt4"/>
        </ContainerProductRev>
      </React.Fragment>
      
    );
  }
}
export default MainProducts;