import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminPortal.css";

export default function AdminHome() {
  const navigate = useNavigate();

  // Mock data (replace with API later)
  const [stats, setStats] = useState({
    totalOrders: 124,
    activeDrivers: 8,
    pendingOrders: 5,
    completedOrders: 119,
  });

  const [recentOrders, setRecentOrders] = useState([
    {
      id: "ORD-1023",
      customer: "Mondli Mkize",
      fuel: "Diesel",
      litres: 40,
      status: "Delivered",
      date: "01 Nov 2025",
    },
    {
      id: "ORD-1024",
      customer: "Buhle Dlamini",
      fuel: "Petrol",
      litres: 20,
      status: "Pending",
      date: "02 Nov 2025",
    },
  ]);

  useEffect(() => {
    // Later: fetch admin dashboard data from API
  }, []);

  return (
    <div className="admin-page">
      <header className="admin-header">
        <h1>Admin Portal</h1>
        <p>Monitor orders, drivers, and reports.</p>
      </header>

      {/* Stats Overview */}
      <section className="stats-grid">
        <div className="stat-card orange">
          <h2>{stats.totalOrders}</h2>
          <p>Total Orders</p>
        </div>
        <div className="stat-card green">
          <h2>{stats.activeDrivers}</h2>
          <p>Active Drivers</p>
        </div>
        <div className="stat-card blue">
          <h2>{stats.pendingOrders}</h2>
          <p>Pending Orders</p>
        </div>
        <div className="stat-card gray">
          <h2>{stats.completedOrders}</h2>
          <p>Completed</p>
        </div>
      </section>

      {/* Recent Orders */}
      <section className="orders-section">
        <div className="orders-header">
          <h3>Recent Orders</h3>
          <button className="view-all" onClick={() => alert("Coming soon!")}>
            View All →
          </button>
        </div>

        <ul className="order-list">
          {recentOrders.map((order) => (
            <li key={order.id} className="order-item">
              <div className="order-info">
                <h4>{order.customer}</h4>
                <p>
                  {order.fuel} — {order.litres}L
                </p>
              </div>
              <div className="order-status">
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
                <span className="date">{order.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Floating Button */}
      <button className="floating-home-btn" onClick={() => navigate("/")}>
        🏠
      </button>
    </div>
  );
}
