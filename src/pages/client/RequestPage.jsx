import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RequestPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    fuelType: '',
    quantity: '',
    deliveryTime: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('lastOrder', JSON.stringify(form));
    navigate('/client/confirmation');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-orange-600">
          Request Fuel Delivery
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Delivery Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <select
            name="fuelType"
            value={form.fuelType}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Fuel Type</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="LPG">LPG Gas</option>
          </select>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity (Litres)"
            value={form.quantity}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="time"
            name="deliveryTime"
            value={form.deliveryTime}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestPage;
