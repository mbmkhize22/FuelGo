# 🛢️ FuelGo — On-Demand Fuel & Gas Delivery (POC)

**FuelGo** is a mobile-first web application (Proof of Concept) that allows users to request **fuel or gas deliveries** directly to their location — just like Uber, but for fuel and LPG gas!  

Built using **React + Vite**, this project demonstrates the **frontend flow** for three main roles:

- **Client** — requests and tracks deliveries
- **Driver** — views delivery routes and destinations
- **Admin** — monitors orders, drivers, and reports

---

## 🚀 Live Demos

🔹 **StackBlitz Live Project:**  
👉 [https://stackblitz.com/edit/vitejs-vite-ltsgr7hq](https://stackblitz.com/edit/vitejs-vite-ltsgr7hq)

🔹 **GitHub Pages Deployment:**  
👉 [https://mbmkhize22.github.io/FuelGo/](https://mbmkhize22.github.io/FuelGo/)

> The StackBlitz demo is ideal for interactive testing and live editing.  
> The GitHub Pages version is optimized for production preview.

---

## 📱 Application Overview

| Role | Description |
|------|--------------|
| **Client** | Requests fuel or gas, views delivery map, and checks previous orders. |
| **Driver** | Displays assigned deliveries, routes to destination, and live map tracking. |
| **Admin** | Monitors orders, active drivers, and system overview. |
| **404 Page** | Friendly “Not Found” page with a link back to the main menu. |

---

## 🗺️ Key Features

✅ **Google Maps Integration** – Live map for user’s location and delivery routes.  
✅ **Geolocation Auto-Detect** – Automatically fills in delivery address using GPS.  
✅ **Mobile-Optimized Design** – Clean, responsive layout for phones and tablets.  
✅ **Floating Action Buttons** – For intuitive navigation between key pages.  
✅ **Dynamic Routing (React Router)**  

- `/` → Main Menu  
- `/client` → Client Dashboard  
- `/client/request` → Fuel Request Form  
- `/client/confirmation` → Confirmation Page  
- `/driver` → Driver Dashboard  
- `/admin` → Admin Portal  
- `*` → Custom 404 Page  

✅ **Modern UI Design** – Inspired by Uber and Bolt apps, using warm gradients and soft cards.  
✅ **Ready for API Integration** – Can easily integrate back-end or mobile app API later.

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React (Vite) |
| **Routing** | React Router DOM |
| **Maps & Geo** | Google Maps JavaScript API, Places API, Geocoding API |
| **UI Styling** | Custom CSS (lightweight, mobile-first) |
| **Hosting** | GitHub Pages + StackBlitz |
| **Version Control** | GitHub |

---

## 📦 Installation & Setup

### 1️⃣ Clone this repository

```bash
git clone https://github.com/mbmkhize22/FuelGo.git
cd FuelGo
