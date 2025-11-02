import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete,
} from '@react-google-maps/api';
import './ClientHome.css';

const mapContainerStyle = {
  width: '100%',
  height: '55vh',
  borderRadius: '0 0 30px 30px',
};

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  gestureHandling: 'greedy',
};

export default function ClientHome() {
  const navigate = useNavigate();

  const [orders] = useState([
    {
      id: 1,
      type: 'Diesel',
      litres: 40,
      status: 'Delivered',
      date: '01 Nov 2025',
    },
    { id: 2, type: 'LPG', litres: 2, status: 'Pending', date: '31 Oct 2025' },
  ]);

  const [currentPosition, setCurrentPosition] = useState({
    lat: -26.2041,
    lng: 28.0473,
  });
  const [mapRef, setMapRef] = useState(null);
  const autocompleteRef = useRef(null);

  // Get user’s current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setCurrentPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        () => console.warn('Location access denied, using default position.')
      );
    }
  }, []);

  const onPlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry) {
        const newLocation = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        setCurrentPosition(newLocation);
        mapRef?.panTo(newLocation);
      }
    }
  };

  return (
    <div className="client-page">
      {/* MAP SECTION */}
      <div className="map-wrapper">
        <LoadScript
          googleMapsApiKey="AIzaSyAcxTrBuAVb9ZRxkTHJ1EhfXA2dzVZMn34"
          libraries={['places']}
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={currentPosition}
            zoom={15}
            onLoad={(map) => setMapRef(map)}
            options={mapOptions}
          >
            <Marker position={currentPosition} />
          </GoogleMap>

          {/* Search Bar */}
          <div className="search-bar">
            <Autocomplete
              onLoad={(auto) => (autocompleteRef.current = auto)}
              onPlaceChanged={onPlaceChanged}
            >
              <input
                type="text"
                placeholder="Where to?"
                className="search-input"
              />
            </Autocomplete>
          </div>
        </LoadScript>

        {/* Map Overlay */}
        <div className="map-overlay">
          <h1>FuelGo</h1>
          <p>Get fuel or gas delivered to your location</p>
        </div>
      </div>

      {/* Floating Request Button */}
      <div className="floating-btn-container">
        <Link to="/client/request" className="floating-btn">
          Request Fuel / Gas
        </Link>
      </div>

      {/* Orders Section */}
      <section className="orders">
        <h2>Previous Orders</h2>
        {orders.length === 0 ? (
          <p className="empty">No previous orders yet.</p>
        ) : (
          <ul className="order-list">
            {orders.map((o) => (
              <li key={o.id} className="order-item">
                <div className="order-info">
                  <span className="fuel-type">{o.type}</span>
                  <span className="litres">{o.litres} L</span>
                </div>
                <div className="order-status">
                  <span className={`status ${o.status.toLowerCase()}`}>
                    {o.status}
                  </span>
                  <span className="date">{o.date}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Floating Bottom-Right Menu Button */}
      {/* Floating Bottom-Right Home Button */}
      <button
        className="menu-fab"
        onClick={() => navigate('/')}
        title="Back to Home"
      >
        🏠
      </button>

    </div>
  );
}
