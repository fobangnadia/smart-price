import { NavLink } from 'react-router-dom';

const links = [
  { to: '/dashboard', icon: '🏠', label: 'Dashboard' },
  { to: '/submit', icon: '📋', label: 'Price Submission' },
  { to: '/history', icon: '🕐', label: 'Price History' },
  { to: '/map', icon: '🗺️', label: 'Market Map' },
  { to: '/product', icon: '🛒', label: 'Product Detail' },
  { to: '/trends', icon: '📈', label: 'Price Trends' },
  { to: '/analytics', icon: '📊', label: 'Analytics' },
];

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <span>🌿</span>
        <div>
          <div style={{ fontSize: 15 }}>Smart Market</div>
          <div style={{ fontSize: 11, color: '#888', fontWeight: 400 }}>Price Checker</div>
        </div>
      </div>
      <nav>
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            <span>{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <NavLink to="#" className="nav-link">⚙️ Settings</NavLink>
        <NavLink to="#" className="nav-link">❓ Help & Support</NavLink>
        
      </div>
    </div>
  );
}