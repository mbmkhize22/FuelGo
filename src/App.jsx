import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// MENU
import MenuPage from './pages/MenuPage';

// CLIENT
import ClientHome from './pages/client/ClientHome';
import RequestPage from './pages/client/RequestPage';
import ConfirmationPage from './pages/client/ConfirmationPage';

// DRIVER
import DriverHome from './pages/driver/DriverHome';
import DeliveryList from './pages/driver/DeliveryList';

// ADMIN
import AdminHome from './pages/admin/AdminHome';
import Dashboard from './pages/admin/Dashboard';

// NOT FOUND
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        {/* MAIN MENU */}
        <Route path="/" element={<MenuPage />} />

        {/* CLIENT */}
        <Route path="/client" element={<ClientHome />} />
        <Route path="/client/request" element={<RequestPage />} />
        <Route path="/client/confirmation" element={<ConfirmationPage />} />

        {/* DRIVER */}
        <Route path="/driver" element={<DriverHome />} />
        <Route path="/driver/deliveries" element={<DeliveryList />} />

        {/* ADMIN */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />

        {/* CATCH-ALL */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Router>
  );
}

export default App;
