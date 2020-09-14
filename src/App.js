import React from "react";
import PrimarySearchAppBar from "./components/navbar/PrimarySearchAppBar";
import Map from "./components/map/ReactMapGL";

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <Map></Map>
    </div>
  );
}

export default App;
