"use client";

import React from "react";

const MapComponent = ({ mapInfo }) => {
  if (!mapInfo || mapInfo.length === 0) return <p>No map info available</p>;

  const center = {
    lat: mapInfo[0].latitude,
    lng: mapInfo[0].longitude,
  };

  // Google Map iframe URL
  const mapSrc = `https://www.google.com/maps?q=${center.lat},${center.lng}&z=12&output=embed`;

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl"
      ></iframe>
    </div>
  );
};

export default MapComponent;
