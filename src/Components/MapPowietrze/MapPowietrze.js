import React, { Component } from "react";
import Dexie from "dexie";
import {
  Search,
  Container,
  ContainerDane,
  Dane,
  Menu,
  MenuElement,
  StyledLink,
  DaneContent,
  Dana,
  DanePolowa,
  Wykres,
  WykresContainer,
  DropDownList,
  ListElement,
  DropDownUp,
  DropDownContainer,
  Details,
  PopupDane,
  DaneMiejsce,
  DaneDetails,
  DaneValue,
  DaneKey,
  ClosePopup,
  WykresLink,
  Angle,
  Skala,
  DaneFlex,
  DaneKeyUp,
} from "./MapPowietrzeStyle";
import ReactSearchBox from "react-search-box";
import {
  Map,
  Marker,
  Tooltip,
  TileLayer,
  Circle,
  ScaleControl,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import angle from "../../Assets/angle-down.svg";
import skalaKolorow from "../../Assets/group-3.svg";
import skalaKolorowMobile from "../../Assets/skala_kol_mobile.svg";
import x from "../../Assets/times.svg";
import { push } from "react-burger-menu";
const kolor00cc66 = new L.Icon({
  iconUrl: require("./../../Assets/kolor_very_low.svg"),
  iconRetinaUrl: require("./../../Assets/kolor_very_low.svg"),
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 39),
  className: "leaflet-div-icon",
});

const kolor92d050 = new L.Icon({
  iconUrl: require("./../../Assets/kolor_low.svg"),
  iconRetinaUrl: require("./../../Assets/kolor_low.svg"),
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 39),
  className: "leaflet-div-icon",
});
const kolorffcc00 = new L.Icon({
  iconUrl: require("./../../Assets/kolor_medium.svg"),
  iconRetinaUrl: require("./../../Assets/kolor_medium.svg"),
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 39),
  className: "leaflet-div-icon",
});
const kolorff9900 = new L.Icon({
  iconUrl: require("./../../Assets/kolor_high.svg"),
  iconRetinaUrl: require("./../../Assets/kolor_high.svg"),
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 39),
  className: "leaflet-div-icon",
});
const kolor800000 = new L.Icon({
  iconUrl: require("./../../Assets/kolor_very_high.svg"),
  iconRetinaUrl: require("./../../Assets/kolor_very_high.svg"),
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 39),
  className: "leaflet-div-icon",
});
class MapPowietrze extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: [],
      lat: 51.106105,
      lng: 17.034652,
      zoom: 15,
      dataToMap: [],
      showDropDown: true,
      licznik: null,
      width: 0,
      height: 0,
      data: [
        {
          key: "Gostyń, Rybnicka",
          value: "Gostyń, Rybnicka",
          positionDlugosc: 50.1093,
          positionSzerokosc: 18.836207,
          temperatura: "20",
          cisnienie: 20,
          wilgoc: 20,
          pm10: 20,
          pm25: 20,
          pm100: 20,
          procent_pm10: 20,
          procent_pm25: 20,
          kolor: "#92d050",
        },
        {
          key: "Gostyń, OSP",
          value: "Gostyń, OSP",
          positionDlugosc: 18.881484,
          positionSzerokosc: 50.111855,
          temperatura: " 20",
          cisnienie: 20,
          wilgotnosc: 20,
          pm10: 20,
          pm25: 20,
          pm100: 20,
          procent_pm10: 20,
          procent_pm25: 20,
          kolor: "#92d050",
        },
        {
          key: "Bytom, Miechowice",
          value: "Bytom, Miechowice",
          positionDlugosc: 18.859736,
          positionSzerokosc: 50.36103,
          temperatura: "20",
          cisnienie: 20,
          wilgotnosc: 20,
          pm10: 20,
          pm25: 20,
          pm100: 20,
          procent_pm10: 20,
          procent_pm25: 20,
          kolor: "#92d050",
        },
        {
          key: "Orzesze, Woszczyce",
          value: "Orzesze, Woszczyce",
          positionDlugosc: 18.758083,
          positionSzerokosc: 50.091473,
          temperatura: "20",
          cisnienie: 20,
          wilgotnosc: 20,
          pm10: 20,
          pm25: 20,
          pm100: 20,
          procent_pm10: 20,
          procent_pm25: 20,
          kolor: "#92d050",
        },
        {
          key: "Gostyń, Dębowa",
          value: "Gostyń, Dębowa",
          positionDlugosc: 18.857061,
          positionSzerokosc: 50.116219,
          temperatura: 20,
          cisnienie: 20,
          wilgotnosc: 20,
          pm10: 20,
          pm25: 20,
          pm100: 20,
          procent_pm10: 20,
          procent_pm25: 20,
          kolor: "#92d050",
        },
        {
          key: "Gostyń, średnie",
          value: "Gostyń, średnie",
          positionDlugosc: 18.865384,
          positionSzerokosc: 50.111349,
          temperatura: 20,
          cisnienie: 20,
          wilgotnosc: 20,
          pm10: 20,
          pm25: 20,
          pm100: 20,
          procent_pm10: 20,
          procent_pm25: 20,
          kolor: "#92d050",
        },
        {
          key: "Radwanice, Wrocławska",
          value: "Radwanice, Wrocławska",
          positionDlugosc: 17.111003,
          positionSzerokosc: 51.052088,
          temperatura: 20,
          cisnienie: 20,
          wilgotnosc: 20,
          pm10: 20,
          pm25: 20,
          pm100: 20,
          procent_pm10: 20,
          procent_pm25: 20,
          kolor: "#92d050",
        },
        {
          key: "Gostyń, Miarowa",
          value: "Gostyń, Miarowa",
          positionDlugosc: 18.881086,
          positionSzerokosc: 50.09831,
          temperatura: 20,
          cisnienie: 20,
          wilgotnosc: 20,
          pm10: 20,
          pm25: 20,
          pm100: 20,
          procent_pm10: 20,
          procent_pm25: 20,
          kolor: "#92d050",
        },
        {
          key: "Wrocław, Mennicza",
          value: "Wrocław, Mennicza",
          positionDlugosc: 17.034652,
          positionSzerokosc: 51.106105,
          temperatura: 20,
          cisnienie: 20,
          wilgotnosc: 20,
          pm10: 20,
          pm25: 20,
          pm100: 20,
          procent_pm10: 20,
          procent_pm25: 20,
          kolor: "#92d050",
        },
        {
          key: "Wymysłów, ul. Jana Pawła II",
          value: "Wymysłów, ul. Jana Pawła II",
          positionDlugosc: 18.989514,
          positionSzerokosc: 50.407828,
          temperatura: 20,
          cisnienie: 20,
          wilgotnosc: 20,
          pm10: 20,
          pm25: 20,
          pm100: 20,
          procent_pm10: 20,
          procent_pm25: 20,
          kolor: "#92d050",
        },
      ],
      actualCoord: [
        {
          positionDlugosc: 45,
          positionSzerokosc: 45,
        },
      ],
      miejsce: "",
      updateFromDefault: true,
      pm10: null,
      pm25: null,
      showPopup: false,
      pm100: null,
      dataPomiaru: null,
      procent_pm25: null,
      procent_pm10: null,
      wilgoc: null,
      temperatura: null,

      cisnienie: null,
      wykres: "http://srodowiskowokolicy.pl/9CA72FC4F5FC.jpg",
    };
    this.getPHP = this.getPHP.bind(this);
    this.toMap = this.toMap.bind(this);
    this.getLastDexie = this.getLastDexie.bind(this);
    this.showDropDown = this.showDropDown.bind(this);
    this.showPopup = this.showPopup.bind(this);
    this.showPopupWithUpdate = this.showPopupWithUpdate.bind(this);
    this.hidePopup = this.hidePopup.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.showSensor = this.showSensor.bind(this);
  }
  componentDidMount() {
    this.getPHP();
    this.incrementOdwiedziny();
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  showPopup() {
    this.setState({ showPopup: true });
  }
  showPopupWithUpdate(value) {
    let copyActualCoord = {};
    copyActualCoord.positionSzerokosc = value.dlugosc;
    copyActualCoord.positionDlugosc = value.szerokosc;
    console.log(value);
    this.setState({ actualCoord: copyActualCoord });
    this.setState({ miejsce: value.nazwa_czujnika });
    this.setState({ dataPomiaru: value.data });
    this.setState({ temperatura: value.temperatura });
    this.setState({ cisnienie: value.cisnienie });
    this.setState({ wilgoc: value.wilgotnosc });
    this.setState({ pm10: value.pm1 });
    this.setState({ pm100: value.pm10 });
    this.setState({ lat: value.dlugosc });
    this.setState({ lng: value.szerokosc });
    this.setState({ pm25: value.pm2 });
    this.setState({ procent_pm25: value.procent_PM25 });
    this.setState({
      wykres: "http://srodowiskowokolicy.pl/" + value.nazwa_stacji + ".jpg ",
    });
    this.setState({ procent_pm10: value.procent_PM10 }, () => {
      this.indexedDB();
    });
    this.setState({ showPopup: true });
  }
  hidePopup() {
    this.setState({ showPopup: false });
  }
  getPHP() {
    const url = "http://srodowiskowokolicy.pl/wspolne_powietrze_json.php"; // site that doesn’t send Access-Control-*
    fetch(url) // https://cors-anywhere.herokuapp.com/https://example.com //fetch(proxy+url)
      .then((response) => response.text())
      .then((contents) => this.sensorsMap(contents))
      .catch(() => {
        this.secondFetch();
      });
  }

  sensorsMap(contents) {
    let txt = document.createElement("textarea");
    txt.innerHTML = contents;
    contents = txt.value;

    let contentsToJSON = JSON.parse(contents);
    let data1 = { ...this.state.data };

    this.updateFromDefault(contentsToJSON);

    for (let i = 0; i <= 13; i++) {
      data1[i].key = contentsToJSON["czujniki"][i].nazwa_czujnika;
      data1[i].value = decodeURIComponent(
        contentsToJSON["czujniki"][i].nazwa_czujnika
      );
      data1[i].positionSzerokosc = contentsToJSON["czujniki"][i].dlugosc;
      data1[i].positionDlugosc = contentsToJSON["czujniki"][i].szerokosc;
      data1[i].dataPomiaru = contentsToJSON["czujniki"][i].data;
      data1[i].temperatura = contentsToJSON["czujniki"][i].temperatura;
      data1[i].pm10 = contentsToJSON["czujniki"][i].pm1;
      data1[i].pm25 = contentsToJSON["czujniki"][i].pm2;
      data1[i].pm100 = contentsToJSON["czujniki"][i].pm10;
      data1[i].wilgoc = contentsToJSON["czujniki"][i].wilgotnosc;
      data1[i].cisnienie = contentsToJSON["czujniki"][i].cisnienie;
      data1[i].procent_pm10 = contentsToJSON["czujniki"][i].procent_PM10;
      data1[i].procent_pm25 = contentsToJSON["czujniki"][i].procent_PM25;
      data1[i].kolor = contentsToJSON["czujniki"][i].kolor_caqi;
      data1[i].nazwa_stacji = contentsToJSON["czujniki"][i].nazwa_stacji;
    }

    //setTimeout(this.poczatkoweDane(contentsToJSON),300);

    this.setState((prevState) => ({
      data: [...prevState.data, data1],
    }));
  }
  showSensor(value) {
    this.showPopup();
    this.showDropDown();
    let copyActualCoord = {};
    copyActualCoord.positionSzerokosc = value.positionSzerokosc;
    copyActualCoord.positionDlugosc = value.positionDlugosc;
    console.log(value);
    this.setState({ actualCoord: copyActualCoord });
    this.setState({ miejsce: value.value });
    this.setState({ dataPomiaru: value.dataPomiaru });
    this.setState({ temperatura: value.temperatura });
    this.setState({ cisnienie: value.cisnienie });
    this.setState({ wilgoc: value.wilgoc });
    this.setState({ pm10: value.pm10 });
    this.setState({ pm100: value.pm100 });
    this.setState({ lat: value.positionSzerokosc });
    this.setState({ lng: value.positionDlugosc });
    this.setState({ pm25: value.pm25 });
    this.setState({ procent_pm25: value.procent_pm25 });
    this.setState({
      wykres: "http://srodowiskowokolicy.pl/" + value.nazwa_stacji + ".jpg ",
    });
    this.setState({ procent_pm10: value.procent_pm10 }, () => {
      this.indexedDB();
    });
    this.getPHP();
  }

  secondFetch() {
    if (typeof this.state.data[3].temperatura !== "number") {
      console.log("Dwa");
      //  const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = "https://srodowiskowokolicy.pl/wspolne_powietrze_json.php"; // site that doesn’t send Access-Control-*
      fetch(url) // https://cors-anywhere.herokuapp.com/https://example.com //fetch(proxyurl+url)
        .then((response) => response.text())
        .then((contents) => this.sensorsMap(contents))
        .catch(() =>
          console.log("Can’t access " + url + " response. Blocked by browser?")
        );
    }
  }
  indexedDB() {
    var db = new Dexie("CzujnikiPowietrze");
    db.version(1).stores({
      powietrze: "++id,miejsce",
    });

    //
    // Manipulate and Query Database
    //
    db.powietrze.clear();
    db.powietrze
      .add({
        miejsce: this.state.miejsce,
      })
      .catch(function (e) {
        alert("Error: " + (e.stack || e));
      });
  }
  getLastDexie() {}
  updateFromDefault(contentsToJSON) {
    var db = new Dexie("CzujnikiPowietrze");
    db.version(1).stores({
      powietrze: "++id,miejsce",
    });

    const getPosts = async () => {
      const allPosts = await db.powietrze.toArray();

      if (allPosts.length > 0) {
        this.setState({ miejsce: allPosts[0].miejsce });
        for (let i = 0; i < contentsToJSON["czujniki"].length; i++) {
          if (
            contentsToJSON["czujniki"][i].nazwa_czujnika == allPosts[0].miejsce
          ) {
            let copyActualCoord = {};
            copyActualCoord.positionSzerokosc =
              contentsToJSON["czujniki"][i].dlugosc;
            copyActualCoord.positionDlugosc =
              contentsToJSON["czujniki"][i].szerokosc;
            this.setState({
              temperatura: contentsToJSON["czujniki"][i].temperatura,
            });
            this.setState({
              miejsce: contentsToJSON["czujniki"][i].nazwa_czujnika,
            });
            this.setState({
              cisnienie: contentsToJSON["czujniki"][i].cisnienie,
            });
            this.setState({ lat: contentsToJSON["czujniki"][i].dlugosc });
            this.setState({ lng: contentsToJSON["czujniki"][i].szerokosc });
            this.setState({ wilgoc: contentsToJSON["czujniki"][i].wilgotnosc });
            this.setState({ pm10: contentsToJSON["czujniki"][i].pm1 });
            this.setState({ pm25: contentsToJSON["czujniki"][i].pm2 });
            this.setState({ pm100: contentsToJSON["czujniki"][i].pm10 });
            this.setState({
              procent_pm10: contentsToJSON["czujniki"][i].procent_PM10,
            });
            this.setState({ actualCoord: copyActualCoord });
            this.setState({
              procent_pm25: contentsToJSON["czujniki"][i].procent_PM25,
            });
            this.setState({
              wykres:
                "http://srodowiskowokolicy.pl/" +
                contentsToJSON["czujniki"][i].nazwa_stacji +
                ".jpg",
            });
            this.setState({ dataPomiaru: contentsToJSON["czujniki"][i].data });
          }
        }
      } else {
        console.log("S3");
        let copyActualCoord = {};
        copyActualCoord.positionSzerokosc =
          contentsToJSON["czujniki"][9].dlugosc;
        copyActualCoord.positionDlugosc =
          contentsToJSON["czujniki"][9].szerokosc;
        this.setState({
          temperatura: contentsToJSON["czujniki"][9].temperatura,
        });
        this.setState({
          miejsce: contentsToJSON["czujniki"][9].nazwa_czujnika,
        });
        this.setState({ cisnienie: contentsToJSON["czujniki"][9].cisnienie });
        this.setState({ wilgoc: contentsToJSON["czujniki"][9].wilgotnosc });
        this.setState({ pm10: contentsToJSON["czujniki"][9].pm1 });
        this.setState({ pm25: contentsToJSON["czujniki"][9].pm2 });
        this.setState({ pm100: contentsToJSON["czujniki"][9].pm10 });
        this.setState({
          procent_pm10: contentsToJSON["czujniki"][9].procent_PM10,
        });
        this.setState({ actualCoord: copyActualCoord });
        this.setState({
          procent_pm25: contentsToJSON["czujniki"][9].procent_PM25,
        });
        this.setState({
          wykres:
            "http://srodowiskowokolicy.pl/" +
            contentsToJSON["czujniki"][9].nazwa_stacji +
            ".jpg",
        });
        this.setState({ dataPomiaru: contentsToJSON["czujniki"][9].data });
      }
    };

    getPosts();
    contentsToJSON["czujniki"].sort(function (a, b) {
      if (a.nazwa_czujnika > b.nazwa_czujnika) {
        return 1;
      }
      if (b.nazwa_czujnika > a.nazwa_czujnika) {
        return -1;
      }
      return 0;
    });
    this.setState({
      dataToMap: contentsToJSON["czujniki"],
    });
  }

  toMap(value) {
    this.showPopup();
    let copyActualCoord = {};
    copyActualCoord.positionSzerokosc = value.positionSzerokosc;
    copyActualCoord.positionDlugosc = value.positionDlugosc;
    this.setState({ actualCoord: copyActualCoord });
    this.setState({ pomiar: value.pomiar });
    this.setState({ miejsce: value.value });
    this.setState({ dataPomiaru: value.dataPomiaru });
    this.setState({ temperatura: value.temperatura });
    this.setState({ cisnienie: value.cisnienie });
    this.setState({ wilgoc: value.wilgoc });
    this.setState({ pm10: value.pm10 });
    this.setState({ pm100: value.pm100 });
    this.setState({ lat: value.positionSzerokosc });
    this.setState({ lng: value.positionDlugosc });
    this.setState({ pm25: value.pm25 });
    this.setState({ procent_pm25: value.procent_pm25 });
    this.setState({
      wykres: "http://srodowiskowokolicy.pl/" + value.nazwa_stacji + ".jpg ",
    });
    this.setState({ procent_pm10: value.procent_pm10 }, () => {
      this.indexedDB();
    });
    this.getPHP();
  }

  showDropDown() {
    if (this.state.showDropDown) {
      var arrayOfElements = document.querySelectorAll(".dropdown li");
      var lengthOfArray = arrayOfElements.length;

      for (var i = 0; i < lengthOfArray; i++) {
        arrayOfElements[i].style.display = "block";
      }
    } else {
      var arrayOfElements = document.querySelectorAll(".dropdown li");
      var lengthOfArray = arrayOfElements.length;

      for (var i = 0; i < lengthOfArray; i++) {
        arrayOfElements[i].style.display = "none";
      }
    }

    this.setState({ showDropDown: !this.state.showDropDown });
  }
  incrementOdwiedziny() {
    var db = new Dexie("LicznikMapPowietrze");
    db.version(1).stores({
      mapPowietrzeOdwiedziny: "++id,licznik",
    });

    const getPosts = async () => {
      const allPosts = await db.mapPowietrzeOdwiedziny.toArray();

      if (allPosts.length > 0) {
        this.setState(
          {
            licznik: allPosts[0]["licznik"] + 1,
          },
          () => {
            db.mapPowietrzeOdwiedziny.clear();
            db.mapPowietrzeOdwiedziny
              .add({
                licznik: this.state.licznik,
              })
              .catch(function (e) {
                alert("Error: " + (e.stack || e));
              });
            console.log(this.state.licznik);
          }
        );
      } else {
        this.setState(
          {
            licznik: 1,
          },
          () => {
            db.mapPowietrzeOdwiedziny.clear();
            db.mapPowietrzeOdwiedziny
              .add({
                licznik: this.state.licznik,
              })
              .catch(function (e) {
                alert("Error: " + (e.stack || e));
              });
            console.log(this.state.licznik);
          }
        );
      }
    };
    getPosts();
  }
  showFromMap(value) {
    this.setState({ miejsce: value.nazwa_czujnika });
    this.setState({ dataPomiaru: value.data });
    this.setState({ temperatura: value.temperatura });
    this.setState({ cisnienie: value.cisnienie });
    this.setState({ wilgoc: value.wilgotnosc });
    this.setState({ pm10: value.pm1 });
    this.setState({ pm100: value.pm10 });
    this.setState({ pm25: value.pm2 });
    this.setState({ procent_pm25: value.procent_PM25 });
    this.setState({
      wykres: "http://srodowiskowokolicy.pl/" + value.nazwa_stacji + ".jpg ",
    });
    this.setState({ procent_pm10: value.procent_PM10 }, () => {
      this.indexedDB();
    });
    window.scrollTo(0, 400);
    this.getPHP();
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Container>
        <Menu>
          <MenuElement>
            <StyledLink to="/map">Hałas</StyledLink>
          </MenuElement>
          <MenuElement>
            <StyledLink to="/mapPowietrze" activeClassName="active">
              Powietrze
            </StyledLink>
          </MenuElement>
        </Menu>
        <Search>
          <ReactSearchBox
            placeholder="Miasto, ulica"
            value={this.state.inputValue}
            data={this.state.data}
            onSelect={this.toMap}
            onFocus={() => {
              document.getElementsByClassName("sc-bdVaJa")[0].value = "";
            }}
          />
        </Search>
        <Map center={position} zoom={this.state.zoom}>
          <ScaleControl />
          <ZoomControl />
          {this.state.width > 800 ? (
            <Skala src={skalaKolorow} />
          ) : (
            <Skala src={skalaKolorowMobile} />
          )}
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.state.dataToMap.length >= this.state.data.length
            ? this.state.dataToMap.map((czujnik) => {
                return (
                  <div key={czujnik.nazwa_stacji}>
                    {czujnik.kolor_caqi == "#92d050" ? (
                      <div>
                        <Circle
                          center={[czujnik.dlugosc, czujnik.szerokosc]}
                          fillColor={czujnik.kolor_caqi}
                          radius={500}
                          weight={0}
                        />
                        <Marker
                          icon={kolor92d050}
                          position={[czujnik.dlugosc, czujnik.szerokosc]}
                          onClick={() => this.showPopupWithUpdate(czujnik)}
                        >
                          <Tooltip>
                            {czujnik.nazwa_czujnika} <br />
                            Temperatura: {czujnik.temperatura} °C <br />
                            Ciśnienie: {czujnik.cisnienie} kPa
                            <br />
                            Wilgotność: {czujnik.wilgotnosc} %<br />
                            PM 1.0 = {czujnik.pm1} μg/m³
                            <br />
                            <span style={{ color: czujnik.kolor_PM25 }}>
                              PM 2.5 ={czujnik.pm2} μg/m³ -{" "}
                              {czujnik.procent_PM25} %
                            </span>
                            <br />
                            <span style={{ color: czujnik.kolor_PM10 }}>
                              {" "}
                              PM 10 = {czujnik.pm10} μg/m³ -{" "}
                              {czujnik.procent_PM10} %
                            </span>
                            <br />
                          </Tooltip>
                        </Marker>
                      </div>
                    ) : czujnik.kolor_caqi == "#00cc66" ? (
                      <div>
                        <Circle
                          center={[czujnik.dlugosc, czujnik.szerokosc]}
                          fillColor={czujnik.kolor_caqi}
                          radius={500}
                          weight={0}
                        />
                        <Marker
                          icon={kolor00cc66}
                          position={[czujnik.dlugosc, czujnik.szerokosc]}
                          onClick={() => this.showPopupWithUpdate(czujnik)}
                        >
                          <Tooltip>
                            {czujnik.nazwa_czujnika} <br />
                            Temperatura: {czujnik.temperatura} °C <br />
                            Ciśnienie: {czujnik.cisnienie} kPa
                            <br />
                            Wilgotność: {czujnik.wilgotnosc} %<br />
                            PM 1.0 = {czujnik.pm1} μg/m³
                            <br />
                            <span style={{ color: czujnik.kolor_PM10 }}>
                              PM 2.5 ={czujnik.pm2} μg/m³ -{" "}
                              {czujnik.procent_PM25} %
                            </span>
                            <br />
                            <span style={{ color: czujnik.kolor_PM25 }}>
                              PM 10 = {czujnik.pm10} μg/m³ -{" "}
                              {czujnik.procent_PM10} %
                            </span>
                            <br />
                          </Tooltip>
                        </Marker>
                      </div>
                    ) : czujnik.kolor_caqi == "#ffcc00" ? (
                      <div>
                        <Circle
                          center={[czujnik.dlugosc, czujnik.szerokosc]}
                          fillColor={czujnik.kolor_caqi}
                          radius={500}
                          weight={0}
                        />
                        <Marker
                          icon={kolorffcc00}
                          position={[czujnik.dlugosc, czujnik.szerokosc]}
                          onClick={() => this.showPopupWithUpdate(czujnik)}
                        >
                          <Tooltip>
                            {czujnik.nazwa_czujnika} <br />
                            Temperatura: {czujnik.temperatura} °C <br />
                            Ciśnienie: {czujnik.cisnienie} kPa
                            <br />
                            Wilgotność: {czujnik.wilgotnosc} %<br />
                            PM 1.0 = {czujnik.pm1} μg/m³
                            <br />
                            <span style={{ color: czujnik.kolor_PM10 }}>
                              PM 2.5 ={czujnik.pm2} μg/m³ -{" "}
                              {czujnik.procent_PM25} %
                            </span>
                            <br />
                            <span style={{ color: czujnik.kolor_PM25 }}>
                              PM 10 = {czujnik.pm10} μg/m³ -{" "}
                              {czujnik.procent_PM10} %
                            </span>
                            <br />
                          </Tooltip>
                        </Marker>
                      </div>
                    ) : czujnik.kolor_caqi == "#ff9900" ? (
                      <div>
                        <Circle
                          center={[czujnik.dlugosc, czujnik.szerokosc]}
                          fillColor={czujnik.kolor_caqi}
                          radius={500}
                          weight={0}
                        />
                        <Marker
                          icon={kolorffcc00}
                          position={[czujnik.dlugosc, czujnik.szerokosc]}
                          onClick={() => this.showPopupWithUpdate(czujnik)}
                        >
                          <Tooltip>
                            {czujnik.nazwa_czujnika} <br />
                            Temperatura: {czujnik.temperatura} °C <br />
                            Ciśnienie: {czujnik.cisnienie} kPa
                            <br />
                            Wilgotność: {czujnik.wilgotnosc} %<br />
                            PM 1.0 = {czujnik.pm1} μg/m³
                            <br />
                            <span style={{ color: czujnik.kolor_PM10 }}>
                              PM 2.5 ={czujnik.pm2} μg/m³ -{" "}
                              {czujnik.procent_PM25} %
                            </span>
                            <br />
                            <span style={{ color: czujnik.kolor_PM25 }}>
                              PM 10 = {czujnik.pm10} μg/m³ -{" "}
                              {czujnik.procent_PM10} %
                            </span>
                            <br />
                          </Tooltip>
                        </Marker>
                      </div>
                    ) : czujnik.kolor_caqi == "#800000" ? (
                      <div>
                        <Circle
                          center={[czujnik.dlugosc, czujnik.szerokosc]}
                          fillColor={czujnik.kolor_caqi}
                          radius={500}
                          weight={0}
                        />
                        <Marker
                          icon={kolorffcc00}
                          position={[czujnik.dlugosc, czujnik.szerokosc]}
                          onClick={() => this.showPopupWithUpdate(czujnik)}
                        >
                          <Tooltip>
                            {czujnik.nazwa_czujnika} <br />
                            Temperatura: {czujnik.temperatura} °C <br />
                            Ciśnienie: {czujnik.cisnienie} kPa
                            <br />
                            Wilgotność: {czujnik.wilgotnosc} %<br />
                            PM 1.0 = {czujnik.pm1} μg/m³
                            <br />
                            <span style={{ color: czujnik.kolor_PM10 }}>
                              PM 2.5 ={czujnik.pm2} μg/m³ -{" "}
                              {czujnik.procent_PM25} %
                            </span>
                            <br />
                            <span style={{ color: czujnik.kolor_PM25 }}>
                              PM 10 = {czujnik.pm10} μg/m³ -{" "}
                              {czujnik.procent_PM10} %
                            </span>
                            <br />
                          </Tooltip>
                        </Marker>
                      </div>
                    ) : null}
                  </div>
                );
              })
            : console.log(this.state.data.length)}
        </Map>
        <DropDownContainer>
          <DropDownUp onClick={() => this.showDropDown()}>
            <div className="hideMobile">Lista czujników</div>
            <Angle src={angle} />
          </DropDownUp>
          <DropDownList className="dropdown">
            {this.state.data.map((czujnik, index) => {
              return (
                <ListElement
                  key={index}
                  onClick={() => this.showSensor(czujnik)}
                >
                  {czujnik.value}
                </ListElement>
              );
            })}
          </DropDownList>
        </DropDownContainer>
        {this.state.showPopup ? (
          <PopupDane id="popupDane">
            <Dane>
              <DaneMiejsce>{this.state.miejsce}</DaneMiejsce>
              <DaneDetails>
                <DaneKey>Data odczytu</DaneKey>
                <DaneValue>{this.state.dataPomiaru}</DaneValue>
              </DaneDetails>
              <DaneFlex>
                <DanePolowa>
                  <DaneKeyUp>PYŁY ZAWIESZONE</DaneKeyUp>
                  <DaneKey>Wartości po uśrednienu:</DaneKey>
                  <DaneValue>PM 1.0 = {this.state.pm10} μg/m³</DaneValue>
                  <DaneValue>
                    PM 2.5 = {this.state.pm25} μg/m³ - {this.state.procent_pm25}{" "}
                    %
                  </DaneValue>
                  <DaneValue>
                    PM 10 = {this.state.pm100} μg/m³ - {this.state.procent_pm10}{" "}
                    %
                  </DaneValue>
                </DanePolowa>
                <DanePolowa>
                  <DaneKeyUp>DANE POGODOWE</DaneKeyUp>
                  <DaneKey>Wartości zmierzone:</DaneKey>
                  <DaneValue>
                    Temperatura = {this.state.temperatura} °C
                  </DaneValue>
                  <DaneValue>Ciśnienie = {this.state.cisnienie} hPa</DaneValue>
                  <DaneValue>Wilgotność = {this.state.wilgoc} %</DaneValue>
                </DanePolowa>
              </DaneFlex>
            </Dane>
            <WykresLink
              onClick={() => window.open(this.state.wykres, "_blank")}
            >
              sprawdź wykres
            </WykresLink>
            <ClosePopup src={x} onClick={() => this.hidePopup()} />
          </PopupDane>
        ) : null}
      </Container>
    );
  }
}
export default MapPowietrze;
