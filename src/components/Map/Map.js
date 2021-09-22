import React from "react";
import "./Map.scss";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import markerIcon from "./icon-location.svg";
import { useStateValue } from "../../StateProvider";
const MarkerIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
  popupAnchor: [-0, -0],
  iconSize: [32, 45],
});

console.log({ MarkerIcon });
function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}

function Map() {
  /* eslint-disable no-unused-vars */
  const [{ data }, dispatch] = useStateValue();
  const position = [data.data.location.lat, data.data.location.lng];

  return (
    <div className="Map">
      <MapContainer center={position} zoom={25} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <ChangeMapView coords={position} />
        <Marker position={position} icon={MarkerIcon}></Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
