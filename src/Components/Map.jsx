"use client";

import React, { useState } from "react";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "12px",
};

const MapComponent = ({ mapInfo }) => {
  const [activeMarker, setActiveMarker] = useState(null);

  // Load Google Maps script
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, 
  });

  if (!isLoaded) return <p>Loading Map...</p>;

  const center = {
    lat: mapInfo[0].latitude,
    lng: mapInfo[0].longitude,
  };

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
            position={{ lat: stop.latitude, lng: stop.longitude }}
            onClick={() => setActiveMarker(index)}
          >
            {activeMarker === index && (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div className="text-sm">
                  <h3 className="font-semibold">{stop.stop_name}</h3>
                  {stop.description && <p>{stop.description}</p>}
                </div>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
