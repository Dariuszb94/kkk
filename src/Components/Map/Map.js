import React, { Component } from "react";
import {
  Search,
  Container,
  ContainerDane,
  Dane,
  Menu,
  MenuElement,
  StyledLink,
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
  Skala,
  Angle,
} from "./MapStyle";
import ReactSearchBox from "react-search-box";
import Dexie from "dexie";
import x from "../../Assets/times.svg";
import skalaKolorow from "../../Assets/group-3.svg";
import skalaKolorowMobile from "../../Assets/skala_kol_mobile.svg";
import L from "leaflet";
import $ from "jquery";
import angle from "../../Assets/angle-down.svg";
import {
  Map as Map2,
  Marker,
  Tooltip,
  TileLayer,
  CircleMarker,
  Circle,
  ScaleControl,
  ZoomControl,
} from "react-leaflet";

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
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 51.106105,
      dataToMap: [],
      lng: 17.034652,
      zoom: 15,
      showDropDown: true,
      inputValue: "Miasto, ulica",
      licznik: null,
      showPopup: false,
      data: [
        {
          key: "Wrocław",
          value: "Gostyń, Rybnicka",
          positionDlugosc: 50.1093,
          positionSzerokosc: 18.836207,
          pomiar: 20,
          kolor: "kolor",
        },
      ],
      actualCoord: [
        {
          positionDlugosc: 6,
          positionSzerokosc: 25,
        },
      ],
      miejsce: "",
      pomiar: null,
      dataPomiaru: "",
      wykres: "http://srodowiskowokolicy.pl/9CA72FC4F5FC.jpg",
      width: 0,
      height: 0,
    };
    this.getPHP = this.getPHP.bind(this);
    this.toMap = this.toMap.bind(this);
    this.showSensor = this.showSensor.bind(this);
    this.showDropDown = this.showDropDown.bind(this);
    this.clearInput2 = this.clearInput2.bind(this);
    this.incrementOdwiedziny = this.incrementOdwiedziny.bind(this);
    this.showPopup = this.showPopup.bind(this);
    this.showPopupWithUpdate = this.showPopupWithUpdate.bind(this);
    this.hidePopup = this.hidePopup.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    setInterval(this.getPHP(), 3000);
    this.incrementOdwiedziny();
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  getLastDexie() {}
  clearInput2() {
    this.setState({ inputValue: "" }, () => {
      //  console.log(this.state.inputValue);
    });
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  showDropDown() {
    console.log(this.state.showDropDown);
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
  showSensor(value) {
    this.showPopup();
    this.showDropDown();
    let copyActualCoord = {};
    copyActualCoord.positionSzerokosc = value.positionSzerokosc;
    copyActualCoord.positionDlugosc = value.positionDlugosc;
    this.setState({ actualCoord: copyActualCoord });
    this.setState({ pomiar: value.pomiar });
    this.setState({ miejsce: value.value });
    this.setState({ lng: value.positionSzerokosc });
    this.setState({ lat: value.positionDlugosc });
    this.setState({ dataPomiaru: value.dataPomiaru }, () => {
      this.indexedDB();
    });
    this.setState({
      wykres: "http://srodowiskowokolicy.pl/" + value.nazwa_stacji + ".jpg ",
    });

    setTimeout(this.getPHP(), 1000);
  }
  componentDidUpdate() {
    //console.log("update");
    // console.log(this.state.data);
  }
  showPopup() {
    this.setState({ showPopup: true });
  }
  showPopupWithUpdate(value) {
    let copyActualCoord = {};
    copyActualCoord.positionSzerokosc = value.szerokosc;
    copyActualCoord.positionDlugosc = value.dlugosc;
    this.setState({ actualCoord: copyActualCoord });
    this.setState({ pomiar: value.pomiar });
    this.setState({ miejsce: value.nazwa_czujnika });
    this.setState({ lng: value.szerokosc });
    this.setState({ lat: value.dlugosc });
    this.setState({ dataPomiaru: value.data }, () => {
      this.indexedDB();
    });
    this.setState({
      wykres: "http://srodowiskowokolicy.pl/" + value.nazwa_stacji + ".jpg ",
    });
    this.setState({ showPopup: true });
  }
  hidePopup() {
    this.setState({ showPopup: false });
  }
  indexedDB() {
    var db = new Dexie("CzujnikiHalas");
    db.version(1).stores({
      halas: "++id,miejsce",
    });

    //
    // Manipulate and Query Database
    //
    db.halas.clear();
    db.halas
      .add({
        miejsce: this.state.miejsce,
      })
      .catch(function (e) {
        alert("Error: " + (e.stack || e));
      });
  }

  getPHP() {
    const url = "http://srodowiskowokolicy.pl/wspolne_halas_json.php"; // site that doesn’t send Access-Control-*
    fetch(url) // https://cors-anywhere.herokuapp.com/https://example.com //fetch(proxyurl+url)
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
    for (let i = 0; i <= 3; i++) {
      data1[i].key = contentsToJSON["czujniki"][i].nazwa_czujnika;
      data1[i].value = decodeURIComponent(
        contentsToJSON["czujniki"][i].nazwa_czujnika
      );
      data1[i].positionSzerokosc = contentsToJSON["czujniki"][i].szerokosc;
      data1[i].positionDlugosc = contentsToJSON["czujniki"][i].dlugosc;
      data1[i].pomiar = contentsToJSON["czujniki"][i].pomiar;
      data1[i].dataPomiaru = contentsToJSON["czujniki"][i].data;

      data1[i].kolor = contentsToJSON["czujniki"][i].kolor.replace(
        "#",
        "kolor"
      );
      data1[i].nazwa_stacji = contentsToJSON["czujniki"][i].nazwa_stacji;
    }

    this.setState((prevState) => ({
      data: [...prevState.data, data1],
    }));
  }
  incrementOdwiedziny() {
    var db = new Dexie("LicznikMap");
    db.version(1).stores({
      mapOdwiedziny: "++id,licznik",
    });

    const getPosts = async () => {
      const allPosts = await db.mapOdwiedziny.toArray();

      if (allPosts.length > 0) {
        this.setState(
          {
            licznik: allPosts[0]["licznik"] + 1,
          },
          () => {
            db.mapOdwiedziny.clear();
            db.mapOdwiedziny
              .add({
                licznik: this.state.licznik,
              })
              .catch(function (e) {
                alert("Error: " + (e.stack || e));
              });
            //   console.log(this.state.licznik);
          }
        );
      } else {
        this.setState(
          {
            licznik: 1,
          },
          () => {
            db.mapOdwiedziny.clear();
            db.mapOdwiedziny
              .add({
                licznik: this.state.licznik,
              })
              .catch(function (e) {
                alert("Error: " + (e.stack || e));
              });
            //console.log(this.state.licznik);
          }
        );
      }
    };
    getPosts();
  }
  licznikToIndexedDB() {}
  updateFromDefault(contentsToJSON) {
    //(contentsToJSON);
    var db = new Dexie("CzujnikiHalas");
    db.version(1).stores({
      halas: "++id,miejsce",
    });

    const getPosts = async () => {
      const allPosts = await db.halas.toArray();

      if (allPosts.length > 0) {
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
              pomiar: contentsToJSON["czujniki"][i].pomiar,
            });
            this.setState({
              wykres:
                "http://srodowiskowokolicy.pl/" +
                contentsToJSON["czujniki"][i].nazwa_stacji +
                ".jpg",
            });
            this.setState({ dataPomiaru: contentsToJSON["czujniki"][i].data });
            this.setState({
              miejsce: contentsToJSON["czujniki"][i].nazwa_czujnika,
            });
            this.setState({ lat: contentsToJSON["czujniki"][i].dlugosc });
            this.setState({ lng: contentsToJSON["czujniki"][i].szerokosc });
          }
        }
      } else {
        let copyActualCoord = {};
        copyActualCoord.positionSzerokosc =
          contentsToJSON["czujniki"][1].szerokosc;
        copyActualCoord.positionDlugosc = contentsToJSON["czujniki"][1].dlugosc;
        this.setState({ actualCoord: copyActualCoord });
        this.setState({ pomiar: contentsToJSON["czujniki"][1].pomiar });
        this.setState({
          miejsce: contentsToJSON["czujniki"][1].nazwa_czujnika,
        });
        if (this.state.wykres !== contentsToJSON["czujniki"][1].nazwa_stacji)
          console.log(contentsToJSON["czujniki"]);
        this.setState({
          wykres:
            "http://srodowiskowokolicy.pl/" +
            contentsToJSON["czujniki"][1].nazwa_stacji +
            ".jpg",
        });
        this.setState(
          { dataPomiaru: contentsToJSON["czujniki"][1].data },
          () => {
            this.getLastDexie();
          }
        );
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
  secondFetch() {
    if (this.state.data[0].kolor == "kolor") {
      console.log("dwa");
      //const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = "https://srodowiskowokolicy.pl/wspolne_halas_json.php"; // site that doesn’t send Access-Control-*
      fetch(url)
        .then((response) => response.text())
        .then((contents) => this.sensorsMap(contents))
        .catch(() =>
          console.log("Can’t access " + url + " response. Blocked by browser?")
        );
    }
  }

  toMap(value) {
    this.showPopup();
    let copyActualCoord = {};
    copyActualCoord.positionSzerokosc = value.positionSzerokosc;
    copyActualCoord.positionDlugosc = value.positionDlugosc;
    this.setState({ actualCoord: copyActualCoord });
    this.setState({ pomiar: value.pomiar });
    this.setState({ miejsce: value.value });
    this.setState({ lng: value.positionSzerokosc });
    this.setState({ lat: value.positionDlugosc });
    this.setState({ dataPomiaru: value.dataPomiaru }, () => {
      this.indexedDB();
    });
    this.setState({
      wykres: "http://srodowiskowokolicy.pl/" + value.nazwa_stacji + ".jpg ",
    });
    this.getPHP();
    //this.setState({ inputValue: ""},()=>{console.log(this.state.inputValue)});
  }
  showFromMap(value) {
    this.setState({ pomiar: value.pomiar });
    this.setState({ miejsce: value.nazwa_czujnika });
    this.setState({ dataPomiaru: value.data }, () => {
      this.indexedDB();
    });
    this.setState({
      wykres: "http://srodowiskowokolicy.pl/" + value.nazwa_stacji + ".jpg ",
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
            <StyledLink to="/map" activeClassName="active">
              Hałas
            </StyledLink>
          </MenuElement>
          <MenuElement>
            <StyledLink to="/mapPowietrze">Powietrze</StyledLink>
          </MenuElement>
        </Menu>
        <Search>
          <ReactSearchBox
            placeholder="Miasto, ulica"
            value={this.state.inputValue}
            data={this.state.data}
            onSelect={this.toMap}
            onClick={this.clearInput}
            onFocus={() => {
              document.getElementsByClassName("sc-bdVaJa")[0].value = "";
            }}
          />
        </Search>

        <Map2 center={position} zoom={this.state.zoom}>
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
                  <div key={czujnik.nazwa_czujnika}>
                    {czujnik.kolor == "#92d050" ? (
                      <div>
                        <Circle
                          center={[czujnik.dlugosc, czujnik.szerokosc]}
                          fillColor={czujnik.kolor}
                          radius={500}
                          weight={0}
                        />
                        <Marker
                          icon={kolor92d050}
                          position={[czujnik.dlugosc, czujnik.szerokosc]}
                          onClick={() => this.showPopupWithUpdate(czujnik)}
                        >
                          <Tooltip>
                            {czujnik.nazwa_czujnika} <br />{" "}
                            <span style={{ color: czujnik.kolor }}>
                              {czujnik.pomiar} dBA
                            </span>
                          </Tooltip>
                        </Marker>
                      </div>
                    ) : czujnik.kolor == "#00cc66" ? (
                      <div>
                        <Circle
                          center={[czujnik.dlugosc, czujnik.szerokosc]}
                          fillColor={czujnik.kolor}
                          radius={500}
                          weight={0}
                        />
                        <Marker
                          icon={kolor00cc66}
                          position={[czujnik.dlugosc, czujnik.szerokosc]}
                          onClick={() => this.showPopupWithUpdate(czujnik)}
                        >
                          <Tooltip>
                            {czujnik.nazwa_czujnika} <br />{" "}
                            <span style={{ color: czujnik.kolor }}>
                              {czujnik.pomiar} dBA
                            </span>{" "}
                          </Tooltip>
                        </Marker>
                      </div>
                    ) : czujnik.kolor == "#ffcc00" ? (
                      <div>
                        <Circle
                          center={[czujnik.dlugosc, czujnik.szerokosc]}
                          fillColor={czujnik.kolor}
                          radius={500}
                          weight={0}
                        />
                        <Marker
                          icon={kolorffcc00}
                          position={[czujnik.dlugosc, czujnik.szerokosc]}
                          onClick={() => this.showPopupWithUpdate(czujnik)}
                        >
                          <Tooltip>
                            {czujnik.nazwa_czujnika} <br />{" "}
                            <span style={{ color: czujnik.kolor }}>
                              {czujnik.pomiar} dBA
                            </span>{" "}
                          </Tooltip>
                        </Marker>
                      </div>
                    ) : czujnik.kolor == "#ff9900" ? (
                      <div>
                        <Circle
                          center={[czujnik.dlugosc, czujnik.szerokosc]}
                          fillColor={czujnik.kolor}
                          radius={500}
                          weight={0}
                        />
                        <Marker
                          icon={kolorff9900}
                          position={[czujnik.dlugosc, czujnik.szerokosc]}
                          onClick={() => this.showPopupWithUpdate(czujnik)}
                        >
                          <Tooltip>
                            {czujnik.nazwa_czujnika} <br />{" "}
                            <span style={{ color: czujnik.kolor }}>
                              {czujnik.pomiar} dBA
                            </span>{" "}
                          </Tooltip>
                        </Marker>
                      </div>
                    ) : czujnik.kolor == "#800000" ? (
                      <div>
                        <Circle
                          center={[czujnik.dlugosc, czujnik.szerokosc]}
                          fillColor={czujnik.kolor}
                          radius={500}
                          weight={0}
                        />
                        <Marker
                          icon={kolor800000}
                          position={[czujnik.dlugosc, czujnik.szerokosc]}
                          onClick={() => this.showPopupWithUpdate(czujnik)}
                        >
                          <Tooltip>
                            {czujnik.nazwa_czujnika} <br />{" "}
                            <span style={{ color: czujnik.kolor }}>
                              {czujnik.pomiar} dBA
                            </span>{" "}
                          </Tooltip>
                        </Marker>
                      </div>
                    ) : null}
                  </div>
                );
              })
            : null}
        </Map2>
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
              <DaneDetails>
                <DaneKey>Poziom hałasu</DaneKey>
                <DaneValue>{this.state.pomiar} dBA</DaneValue>
              </DaneDetails>
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
export default Map;
