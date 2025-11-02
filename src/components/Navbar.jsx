import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex gap-6">
      <Link to="/client" className="hover:text-orange-400">
        Client
      </Link>
      <Link to="/driver" className="hover:text-orange-400">
        Driver
      </Link>
      <Link to="/admin" className="hover:text-orange-400">
        Admin
      </Link>
    </nav>
  );
};

export default Navbar;
