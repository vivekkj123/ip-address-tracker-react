import React from "react";
import "./Map.scss";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

const position = [51.05, -0.09];
function Map() {
    return (
        <div className="Map">
            <MapContainer style={
                    {height: "100vh"}
                }
                center={position}
                zoom={13}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
                <Marker position={position}>
                    <Popup>
                        <span>A pretty CSS3 popup.
                            <br/>
                            Easily customizable.</span>
                    </Popup>
                </Marker>
            </MapContainer>

        </div>
    );
}

export default Map;
