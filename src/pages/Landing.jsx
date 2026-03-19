import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = ['Vegetables', 'Grains', 'Tubers'];

const products = [
  {
    name: 'Cassava',
    market: 'Mile 4 Market',
    img: '/cassava.jpeg',
    badge: 'Sure Price',
    color: '#f0fdf4',
  },
  {
    name: 'Tomatoes',
    market: 'Nkwen Market',
    img: '/tomatoes.jpeg',
    badge: 'Sure Price',
    color: '#f0fdf4',
  },
  {
    name: 'Maize',
    market: 'Bambui Market',
    img: '/maize.jpeg',
    badge: 'Sure Price',
    color: '#f0fdf4',
  },
  {
    name: 'Palm Oil',
    market: 'Mile 4 Market',
    img: '/palm_oil.jpeg',
    badge: 'Sure Price',
    color: '#f0fdf4',
  },
  {
    name: 'Onion',
    market: 'Nkwen Market',
    img: '/onions.jpeg',
    badge: 'Sure Price',
    color: '#f0fdf4',
  },
  {
    name: 'Pepper',
    market: 'Bambui Market',
    img: '/perper.jpeg',
    badge: 'Sure Price',
    color: '#f0fdf4',
  },
  {
    name: 'Plantain',
    market: 'Mile 4 Market',
    img: '/plantain.jpeg',
    badge: 'Sure Price',
    color: '#f0fdf4',
  },
  {
    name: 'Groundnut',
    market: 'Nkwen Market',
    img: '/groundnut.jpeg',
    badge: 'Sure Price',
    color: '#f0fdf4',
  },
];

export default function Landing() {
  const [activeCategory, setActiveCategory] = useState('Vegetables');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f5f0',
      fontFamily: 'Segoe UI, sans-serif',
    }}>
      {/* Top Navbar */}
      <div style={{
        background: 'white',
        padding: '16px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 24 }}>📈</span>
          <span style={{ fontWeight: 700, fontSize: 17 }}>Smart Market Price Checker</span>
        </div>

        {/* Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <a onClick={() => navigate('/history')} style={navLink}>Prices</a>
          <a onClick={() => navigate('/map')} style={navLink}>Map</a>
          <a onClick={() => navigate('/submit')} style={navLink}>Submit</a>
          <button
            onClick={() => navigate('/')}
            style={{
              background: '#d1fae5',
              color: '#065f46',
              border: 'none',
              padding: '10px 22px',
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 15,
              cursor: 'pointer',
            }}
          >
            Dashboard
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px' }}>

        {/* Hero Section */}
        <div style={{
          borderRadius: 20,
          overflow: 'hidden',
          position: 'relative',
          height: 320,
          marginBottom: 36,
          background: 'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url("https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200") center/cover no-repeat',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <h1 style={{
            color: 'white',
            fontSize: 42,
            fontWeight: 900,
            margin: 0,
            textAlign: 'center',
            textShadow: '0 2px 8px rgba(0,0,0,0.4)',
          }}>
            Get Fair Prices Instantly
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: 16,
            margin: '10px 0 24px',
            letterSpacing: 1,
          }}>
            Real-time • Compare • Transparent
          </p>

          {/* Search Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'white',
            borderRadius: 50,
            padding: '12px 24px',
            width: '60%',
            maxWidth: 520,
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            gap: 10,
          }}>
            <span style={{ fontSize: 18 }}><img src="/search icon.jpeg" alt="Search" width="20px" height="20px" /></span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search any product or market (e.g. Maize in Bamenda)"
              style={{
                border: 'none',
                outline: 'none',
                fontSize: 14,
                width: '100%',
                color: '#333',
                background: 'transparent',
              }}
            />
          </div>
        </div>

        {/* Category Filter */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: 20,
                border: '1px solid #d1d5db',
                background: activeCategory === cat ? '#1a1a1a' : 'white',
                color: activeCategory === cat ? 'white' : '#333',
                fontWeight: 600,
                fontSize: 14,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }}>
          {products.map((p, i) => (
            <div
              key={i}
              onClick={() => navigate('/product')}
              style={{
                background: 'white',
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.07)';
              }}
            >
              {/* Card Content */}
              <div style={{ padding: '20px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  {/* Badge */}
                  <span style={{
                    background: '#d1fae5',
                    color: '#065f46',
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: 20,
                    display: 'inline-block',
                    marginBottom: 10,
                  }}>
                    {p.badge}
                  </span>
                  <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{p.name}</div>
                  <div style={{ fontSize: 13, color: '#888' }}>{p.market}</div>
                </div>
                {/* Product image */}
                <img src={p.img} alt={p.name} style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
              </div>

              {/* Bottom bar */}
              <div style={{
                marginTop: 'auto',
                padding: '12px 20px',
                borderTop: '1px solid #f0f0f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: 13,
                color: '#27ae60',
                fontWeight: 600,
              }}>
                <span>View Prices →</span>
                <span style={{ color: '#888', fontSize: 12 }}>Updated today</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

const navLink = {
  fontSize: 15,
  color: '#333',
  textDecoration: 'none',
  fontWeight: 500,
  cursor: 'pointer',
};