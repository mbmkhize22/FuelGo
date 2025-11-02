import { Link } from 'react-router-dom';
import './MenuPage.css';

export default function MenuPage() {
  return (
    <div className="menu-page">
      {/* Background video  */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="menu-video"
        src="https://zamambocapital.co.za/bg.mp4"
      ></video>

      {/* Color overlay */}
      <div className="menu-overlay"></div>

      {/* Content */}
      <div className="menu-content">
        {/*<img
          src="https://csbox.co.za/wp-content/uploads/2024/05/cropped-csbox-_logo_main_white_transparent-1-159x53.png"
          alt="FuelGo Logo"
          className="menu-logo"
        />*/}

        <h1 className="menu-title">FuelGo Portal Access</h1>
        <p className="menu-subtitle">Choose your portal to continue</p>

        <div className="menu-options">
          <Link to="/client" className="menu-card client">
            <h2>Client</h2>
            <p>Request fuel or gas delivery</p>
          </Link>

          <Link to="/driver" className="menu-card driver">
            <h2>Driver</h2>
            <p>View assigned deliveries</p>
          </Link>

          <Link to="/admin" className="menu-card admin">
            <h2>Admin</h2>
            <p>Manage orders and users</p>
          </Link>
        </div>

        <footer className="menu-footer">
          © {new Date().getFullYear()} FuelGo | Powered by DTMM
        </footer>
      </div>
    </div>
  );
}
