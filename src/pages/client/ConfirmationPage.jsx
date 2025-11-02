import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import "./ConfirmationPage.css";

export default function ConfirmationPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const form = state?.form;

  // ⚙️ Your Paystack test public key (get it from https://dashboard.paystack.com/#/settings/developer)
  const publicKey = "pk_test_416215ddf2b56d36cddb96837d1bab65eabe57e8";

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

  // 🧮 Calculate total (for demo)
  const totalAmount = Number(form.quantity) * 20; // R20 per litre demo pricing
  const amountInKobo = totalAmount * 100; // Paystack uses kobo (ZAR * 100)

  const paystackProps = {
    email: "info@dtmm.co.za", // You can replace with form.email if you add it later
    amount: amountInKobo,
    publicKey,
    currency: "ZAR",
    text: `Pay R${totalAmount} Now`,
    onSuccess: () => {
      alert("✅ Payment successful!");
      navigate("/client");
    },
    onClose: () => alert("Payment window closed."),
  };

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
          request has been received. You can proceed with payment below.
        </p>

        {/* 🟩 Paystack Payment Button */}
        <div style={{ marginTop: "20px" }}>
          <PaystackButton
            {...paystackProps}
            className="paystack-button"
          />
        </div>

        <button className="confirm-btn" onClick={() => navigate("/client")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}
