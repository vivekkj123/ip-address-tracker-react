import React from "react";
import "./Map.scss";
import {MapContainer, Marker, TileLayer} from "react-leaflet";
import L from 'leaflet';
import markerIcon from './icon-location.svg'
const MarkerIcon = new L.Icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon,
    popupAnchor: [
        -0, -0
    ],
    iconSize: [32, 45]
});
const position = [51.05, -0.09];
console.log({MarkerIcon});
function Map() {

    return (
        <div className="Map">
            <MapContainer
                center={position}
                zoom={13}
                zoomControl={false}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
                <Marker position={position}
                    icon={MarkerIcon}></Marker>
            </MapContainer>

        </div>
    );
}

export default Map;
