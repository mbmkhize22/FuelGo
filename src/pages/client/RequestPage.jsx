import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RequestFuel.css";

export default function RequestFuel() {
  const navigate = useNavigate();

  // Simulate logged-in user (for demo)
  const [user] = useState({
    name: "Mondli Mkize",
    phone: "+27 73 429 5463",
  });

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    fuelType: "Diesel",
    quantity: "",
    schedule: "",
  });

  const [loadingLocation, setLoadingLocation] = useState(false);

  useEffect(() => {
    // Autofill user info
    setForm((f) => ({
      ...f,
      name: user.name,
      phone: user.phone,
    }));

    // Fetch GPS & address on mount
    getCurrentAddress();
  }, [user]);

  // Handle field changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Get location and reverse-geocode
  const getCurrentAddress = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported on this device.");
      return;
    }

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const apiKey = "AIzaSyAcxTrBuAVb9ZRxkTHJ1EhfXA2dzVZMn34";
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
          );
          const data = await response.json();

          if (data.results && data.results.length > 0) {
            const formattedAddress = data.results[0].formatted_address;
            setForm((f) => ({ ...f, address: formattedAddress }));
          } else {
            alert("Unable to retrieve address. Please type it manually.");
          }
        } catch (err) {
          console.error("Geocoding failed", err);
          alert("Error fetching address.");
        } finally {
          setLoadingLocation(false);
        }
      },
      (err) => {
        console.warn("GPS denied or failed:", err);
        alert("Location permission denied. Please type your address manually.");
        setLoadingLocation(false);
      }
    );
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //alert(`Fuel request submitted!\n\n${JSON.stringify(form, null, 2)}`);
    navigate("/client/confirmation", { state: { form } });
  };

  return (
    <div className="request-page">
      {/* Header */}
      <header className="header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ←
        </button>
        <h2>Request Fuel Delivery</h2>
      </header>

      {/* Form */}
      <form className="fuel-form" onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            readOnly
          />
        </label>

        <label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            readOnly
          />
        </label>

        <label className="address-field">
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder={
              loadingLocation
                ? "Fetching your current location..."
                : "Delivery Address"
            }
            required
          />
          {loadingLocation && <span className="loading-text">📍 Locating...</span>}
        </label>

        <label>
          <select
            name="fuelType"
            value={form.fuelType}
            onChange={handleChange}
          >
            <option value="Diesel">Diesel</option>
            <option value="Petrol">Petrol</option>
            <option value="LPG">LPG Gas</option>
          </select>
        </label>

        <label>
          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder="Quantity (Litres)"
            required
            min="1"
          />
        </label>

        <label>
          <input
            type="time"
            name="schedule"
            value={form.schedule}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="submit-btn">
          Submit Request
        </button>
      </form>
    </div>
  );
}
