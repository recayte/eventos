import React from "react";
import PrimarySearchAppBar from "./components/navbar/PrimarySearchAppBar";
import MapGl from "./components/map/MapGl";

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <MapGl></MapGl>
    </div>
  );
}

export default App;
