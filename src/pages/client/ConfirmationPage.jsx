import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ConfirmationPage.css";

export default function confirmationPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const form = state?.form;

  if (!form) {
    return (
      <div className="confirmation-page">
        <p>No request data found.</p>
        <button className="back-btn" onClick={() => navigate("/client")}>
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className="confirmation-page">
      <header className="header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ←
        </button>
        <h2>Request Confirmed</h2>
      </header>

      <div className="confirmation-card">
        <h3>Fuel Delivery Details</h3>
        <div className="info-row">
          <span className="label">Name:</span>
          <span>{form.name}</span>
        </div>
        <div className="info-row">
          <span className="label">Phone:</span>
          <span>{form.phone}</span>
        </div>
        <div className="info-row">
          <span className="label">Address:</span>
          <span>{form.address}</span>
        </div>
        <div className="info-row">
          <span className="label">Fuel Type:</span>
          <span>{form.fuelType}</span>
        </div>
        <div className="info-row">
          <span className="label">Quantity:</span>
          <span>{form.quantity} Litres</span>
        </div>
        <div className="info-row">
          <span className="label">Scheduled Time:</span>
          <span>{form.schedule}</span>
        </div>

        <p className="thankyou-text">
          ✅ Thank you, {form.name}! Your {form.fuelType.toLowerCase()} delivery
          request has been received. Our driver will contact you shortly.
        </p>

        <button
          className="confirm-btn"
          onClick={() => navigate("/client")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
