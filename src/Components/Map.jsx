"use client";

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon issues in Leaflet + Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Dark / Starlight tile layer (Carto Dark)
const DARK_TILE_LAYER =
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

const MapComponent = ({ mapInfo }) => {
  const [activeMarker, setActiveMarker] = useState(null);

  // Center map on first stop
  const center = [mapInfo[0].latitude, mapInfo[0].longitude];

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
      <MapContainer 
      center={center} 
      zoom={12}
      className="z-0"
       style={{ width: "100%", height: "100%" }}>
        <TileLayer
          url={DARK_TILE_LAYER}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        />

        {mapInfo.map((stop, index) => (
          <Marker
            key={index}
            position={[stop.latitude, stop.longitude]}
            eventHandlers={{
              click: () => setActiveMarker(index),
            }}
          >
            {activeMarker === index && (
              <Popup
                position={[stop.latitude, stop.longitude]}
                onClose={() => setActiveMarker(null)}
              >
                <div className="text-sm">
                  <h3 className="font-semibold">{stop.stop_name}</h3>
                  {stop.description && <p>{stop.description}</p>}
                </div>
              </Popup>
            )}
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
