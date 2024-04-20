import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet CSS is imported
import './Map.css'; // Import the CSS file

const MapComponent = () => {
  return (
    <div className="map-container">
      {/* Left side content */}
      <div className="left-content">
        <h2>Some Text on the Left Side</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vitae
          justo volutpat, sed cursus nunc luctus. Aliquam non risus ac sem bibendum finibus. Sed
          nec ligula non lorem consectetur malesuada.
        </p>
      </div>

      {/* Right side map */}
      <div className="map-wrapper">
        <MapContainer center={[30.3753, 69.3451]} zoom={6} className="map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[30.3753, 69.3451]}>
            <Popup>
              This is a marker in Pakistan. <br /> Coordinates: (30.3753, 69.3451)
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
