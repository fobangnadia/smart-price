import { useLocation } from 'react-router-dom';

const titles = {
  '/': 'Smart Market Price Checker',
  '/submit': 'Price Submission',
  '/history': 'Price History',
  '/map': 'Market Price Checker Map',
  '/product': 'Product Detail',
  '/trends': 'Price Trends',
  '/analytics': 'Analytics',
};

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <div className="navbar">
      <h1>{titles[pathname] || 'Smart Market'}</h1>
      <div className="navbar-actions">
        <button>🔔</button>
        <button>👤</button>
        <div className="avatar">FY</div>
      </div>
    </div>
  );
}