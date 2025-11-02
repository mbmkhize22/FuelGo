import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import "./DriverHome.css";

const mapContainerStyle = {
  width: "100%",
  height: "45vh",
  borderRadius: "0 0 25px 25px",
};

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
};

export default function DriverHome() {
  const navigate = useNavigate();
  const [googleLoaded, setGoogleLoaded] = useState(false);
  const [directionsResponse, setDirectionsResponse] = useState(null);

  // ✅ Driver: Canal Walk, Cape Town
  const [currentPosition] = useState({
    lat: -33.8920,
    lng: 18.5114,
  });

  // ✅ Destination: V&A Waterfront, Cape Town
  const [destination] = useState({
    lat: -33.9075,
    lng: 18.4208,
  });

  const [deliveries] = useState([
    {
      id: 1,
      customer: "Mondli Mkize",
      address: "V&A Waterfront, Cape Town",
      fuelType: "Diesel",
      litres: 40,
      status: "In Progress",
    },
    {
      id: 2,
      customer: "Nhlanhla Mkhize",
      address: "Canal Walk, Century City, Cape Town",
      fuelType: "LPG Gas",
      litres: 5,
      status: "Pending",
    },
  ]);

  // Calculate directions once map is loaded
  const calculateRoute = () => {
    if (!window.google) return;

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: currentPosition,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          setDirectionsResponse(result);
        } else {
          console.error("Directions request failed due to " + status);
        }
      }
    );
  };

  return (
    <div className="driver-page">
      <header className="driver-header">
        <h2>Driver Dashboard</h2>
        <p>View deliveries and routes assigned to you.</p>
      </header>

      {/* MAP */}
      <div className="driver-map">
        <LoadScript
          googleMapsApiKey="AIzaSyAcxTrBuAVb9ZRxkTHJ1EhfXA2dzVZMn34"
          onLoad={() => setGoogleLoaded(true)}
          libraries={["places"]}
        >
          {googleLoaded && (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={currentPosition}
              zoom={12}
              options={mapOptions}
              onLoad={() => calculateRoute()}
            >
              {/* Driver Marker */}
              <Marker
                position={currentPosition}
                icon={{
                  path: window.google.maps.SymbolPath.CIRCLE,
                  scale: 8,
                  fillColor: "#4285F4",
                  fillOpacity: 1,
                  strokeColor: "#ffffff",
                  strokeWeight: 2,
                }}
                title="Driver: Canal Walk"
              />

              {/* Destination Marker */}
              <Marker
                position={destination}
                icon={{
                  url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                }}
                title="Destination: V&A Waterfront"
              />

              {/* Render the road-following route */}
              {directionsResponse && (
                <DirectionsRenderer
                  directions={directionsResponse}
                  options={{
                    polylineOptions: {
                      strokeColor: "#FF6F00",
                      strokeWeight: 6,
                    },
                    suppressMarkers: true,
                  }}
                />
              )}
            </GoogleMap>
          )}
        </LoadScript>
      </div>

      {/* Deliveries Section */}
      <section className="driver-deliveries">
        <h3>Assigned Deliveries</h3>
        <ul className="delivery-list">
          {deliveries.map((d) => (
            <li key={d.id} className="delivery-card">
              <div className="delivery-info">
                <h4>{d.customer}</h4>
                <p className="address">{d.address}</p>
              </div>
              <div className="delivery-meta">
                <span className="fuel">
                  ⛽ {d.fuelType} ({d.litres} L)
                </span>
                <span
                  className={`status ${d.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {d.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Floating Home Button */}
      <button
        className="menu-fab"
        onClick={() => navigate("/")}
        title="Back to Home"
      >
        🏠
      </button>
    </div>
  );
}
