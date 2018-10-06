import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";
import data from "./data.json";
import "./styles.css";

const MapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCpRT2Fboqg_A0j-1cb4H5tJBEwmwtgLUA",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(() => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 28.6139391, lng: 77.2090212 }}
    mapTypeId={"satellite"}
  >
    {Object.keys(data).map((key, index) => (
      <Marker
        position={{
          lat: Number(data[key].lat_long.split(",")[0]),
          lng: Number(data[key].lat_long.split(",")[1])
        }}
        label={data[key]["consignee_name"] + "," + data[key]["destination"]}
        key={`${key}_${index}`}
      />
    ))}
  </GoogleMap>
));

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <MapComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MapComponent />, rootElement);
