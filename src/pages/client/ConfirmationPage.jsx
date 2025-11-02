import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  if (!order) {
    return (
      <div className="text-center mt-10">
        <h2>No recent order found.</h2>
        <Link
          to="/client/request"
          className="text-orange-600 underline hover:text-orange-800"
        >
          Create new order
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Request Submitted ✅
        </h2>
        <p className="text-gray-700 mb-2">
          Thank you, <strong>{order.name}</strong>! Your request has been
          received.
        </p>
        <p className="text-gray-500 mb-6">
          We’ll deliver <strong>{order.quantity}L</strong> of{' '}
          <strong>{order.fuelType}</strong> to <strong>{order.address}</strong>{' '}
          at <strong>{order.deliveryTime}</strong>.
        </p>
        <Link
          to="/client"
          className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;
