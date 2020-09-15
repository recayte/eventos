import React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    width: "100VW",
    height: 1000,
    latitude: -34.6,
    longitude: -58.45,
    zoom: 12,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/daannmf/ckf32gcuv0a1f1aoxnyn2ci17"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    />
  );
}

export default Map;
