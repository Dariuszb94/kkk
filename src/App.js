import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Map from "./Components/Map/Map";
import MapPowietrze from "./Components/MapPowietrze/MapPowietrze";
import Wykresy from "./Components/Wykresy/Wykresy";
import ONas from "./Components/ONas/ONas";
import Kontakt from "./Components/Kontakt/Kontakt";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />     
        <Route path="/wykresy" component={Wykresy} />
        <Route path="/map" component={Map} />
        <Route path="/oNas" component={ONas} />
        <Route path="/kontakt" component={Kontakt} />
        <Route path="/mapPowietrze" component={MapPowietrze} />
        <Route component={Home} />{" "}
      </Switch>
    </React.Fragment>
  );
}

export default App;
