import { useState } from 'react';
import cassavaImg from '/cassava.jpeg';
import tomatoesImg from '/tomatoes.jpeg';
import maizeImg from '/maize.jpeg';
import onionsImg from '/onions.jpeg';
import perperImg from '/perper.jpeg';
import palm_oilImg from '/palm_oil.jpeg';
import plantainImg from '/plantain.jpeg';
import groundnutImg from '/groundnut.jpeg';

const products = [
  {
    name: 'Cassava',
    img: cassavaImg,
    avgPrice: 14690,
    markets: [
      { name: 'Bamenda Central', price: 15690 },
      { name: 'Douala New Bell', price: 14490 },
      { name: 'Kumbo Market', price: 13800 },
      { name: 'Yaoundé Central', price: 16000 },
    ],
    available: ['Bamenda Market', 'Douala Market', 'Kumbo Market', 'Buea Market', 'Yaoundé Market', 'Wum Market'],
    trend: 'M0,160 Q50,140 80,80 Q120,20 150,60 Q180,100 220,50 Q260,10 300,5',
  },
  {
    name: 'Tomatoes',
    img: tomatoesImg,
    avgPrice: 1200,
    markets: [
      { name: 'Bamenda Central', price: 1350 },
      { name: 'Douala New Bell', price: 1100 },
      { name: 'Kumbo Market', price: 1000 },
      { name: 'Yaoundé Central', price: 1400 },
    ],
    available: ['Bamenda Market', 'Douala Market', 'Buea Market', 'Yaoundé Market'],
    trend: 'M0,140 Q40,120 80,100 Q120,80 160,90 Q200,100 240,60 Q270,30 300,20',
  },
  {
    name: 'Maize',
    img: maizeImg,
    avgPrice: 800,
    markets: [
      { name: 'Kumbo Market', price: 700 },
      { name: 'Bamenda Central', price: 800 },
      { name: 'Buea Market', price: 850 },
      { name: 'Yaoundé Central', price: 900 },
    ],
    available: ['Kumbo Market', 'Bamenda Market', 'Buea Market', 'Yaoundé Market', 'Wum Market'],
    trend: 'M0,150 Q60,130 100,110 Q140,90 170,100 Q210,110 250,70 Q280,40 300,30',
  },
  {
    name: 'Onions',
    img: onionsImg,
    avgPrice: 2500,
    markets: [
      { name: 'Douala New Bell', price: 2400 },
      { name: 'Yaoundé Central', price: 2600 },
      { name: 'Bamenda Central', price: 2300 },
      { name: 'Buea Market', price: 2700 },
    ],
    available: ['Douala Market', 'Yaoundé Market', 'Bamenda Market', 'Buea Market'],
    trend: 'M0,130 Q50,110 90,120 Q130,130 160,80 Q200,40 240,55 Q270,65 300,40',
  },
  {
    name: 'Pepper',
    img: perperImg,
    avgPrice: 3200,
    markets: [
      { name: 'Bamenda Central', price: 3000 },
      { name: 'Douala New Bell', price: 3200 },
      { name: 'Kumbo Market', price: 2900 },
      { name: 'Yaoundé Central', price: 3500 },
    ],
    available: ['Bamenda Market', 'Douala Market', 'Kumbo Market', 'Yaoundé Market'],
    trend: 'M0,155 Q50,120 85,100 Q120,80 155,95 Q195,110 230,65 Q265,30 300,15',
  },
  {
    name: 'Palm Oil',
    img: palm_oilImg,
    avgPrice: 5000,
    markets: [
      { name: 'Bamenda Central', price: 4800 },
      { name: 'Douala New Bell', price: 5200 },
      { name: 'Kumbo Market', price: 4600 },
      { name: 'Yaoundé Central', price: 5300 },
    ],
    available: ['Bamenda Market', 'Douala Market', 'Kumbo Market', 'Yaoundé Market', 'Buea Market'],
    trend: 'M0,150 Q50,130 90,120 Q130,110 160,125 Q200,140 240,100 Q270,70 300,50',
  },
  {
    name: 'Plantain',
    img: plantainImg,
    avgPrice: 600,
    markets: [
      { name: 'Buea Market', price: 500 },
      { name: 'Douala New Bell', price: 600 },
      { name: 'Bamenda Central', price: 650 },
      { name: 'Yaoundé Central', price: 700 },
    ],
    available: ['Buea Market', 'Douala Market', 'Bamenda Market', 'Yaoundé Market', 'Kumbo Market'],
    trend: 'M0,160 Q50,145 90,130 Q130,115 160,100 Q200,80 240,50 Q270,30 300,10',
  },
  {
    name: 'Groundnut',
    img: groundnutImg,
    avgPrice: 1800,
    markets: [
      { name: 'Kumbo Market', price: 1600 },
      { name: 'Bamenda Central', price: 1800 },
      { name: 'Douala New Bell', price: 1900 },
      { name: 'Yaoundé Central', price: 2000 },
    ],
    available: ['Kumbo Market', 'Bamenda Market', 'Douala Market', 'Yaoundé Market'],
    trend: 'M0,140 Q45,125 80,110 Q120,95 155,105 Q195,115 230,70 Q265,35 300,20',
  },
];

export default function ProductDetail() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(products[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectProduct = (p) => {
    setSelected(p);
    setSearch('');
    setShowDropdown(false);
  };

  return (
    <div>
      {/* Search Bar */}
      <div style={{ position: 'relative', maxWidth: 400, marginBottom: 24 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          background: 'white', border: '1px solid #e5e7eb',
          borderRadius: 10, padding: '11px 16px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
        }}>
          <span><img src="/search icon.jpeg" alt="Search" width="20px" height="20px" /></span>
          <input
            value={search}
            onChange={e => { setSearch(e.target.value); setShowDropdown(true); }}
            onFocus={() => setShowDropdown(true)}
            placeholder="Search product (e.g. Maize, Tomatoes...)"
            style={{
              border: 'none', outline: 'none',
              fontSize: 14, width: '100%', background: 'none'
            }}
          />
          {search && (
            <span
              onClick={() => { setSearch(''); setShowDropdown(false); }}
              style={{ cursor: 'pointer', color: '#999', fontSize: 18 }}
            >×</span>
          )}
        </div>

        {/* Dropdown */}
        {showDropdown && search && (
          <div style={{
            position: 'absolute', top: '110%', left: 0, right: 0,
            background: 'white', borderRadius: 10, zIndex: 100,
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            border: '1px solid #e5e7eb', overflow: 'hidden'
          }}>
            {filtered.length === 0 ? (
              <div style={{ padding: '14px 16px', color: '#888', fontSize: 14 }}>
                No product found
              </div>
            ) : (
              filtered.map((p, i) => (
                <div
                  key={i}
                  onClick={() => selectProduct(p)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '12px 16px', cursor: 'pointer',
                    borderBottom: i < filtered.length - 1 ? '1px solid #f5f5f5' : 'none',
                    transition: 'background 0.15s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#f0fdf4'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <img src={p.img} alt={p.name} style={{ width: '28px', height: '28px', borderRadius: '4px', objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{p.name}</div>
                    <div style={{ fontSize: 12, color: '#888' }}>
                      Avg: {p.avgPrice.toLocaleString()} FCFA
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Quick Select Pills */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
        {products.map((p, i) => (
          <button
            key={i}
            onClick={() => selectProduct(p)}
            style={{
              padding: '6px 14px', borderRadius: 20,
              border: '1px solid',
              borderColor: selected.name === p.name ? '#27ae60' : '#e5e7eb',
              background: selected.name === p.name ? '#d1fae5' : 'white',
              color: selected.name === p.name ? '#065f46' : '#555',
              fontWeight: selected.name === p.name ? 700 : 400,
              fontSize: 13, cursor: 'pointer', transition: 'all 0.2s'
            }}
          >
            <img src={p.img} alt={p.name} style={{ width: '16px', height: '16px', borderRadius: '2px', objectFit: 'cover', marginRight: '4px' }} />
            {p.name}
          </button>
        ))}
      </div>

      {/* Product Detail Card */}
      <div className="card">
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr 280px', gap: 24 }}>

          {/* Left - Product Image */}
          <div style={{
            background: '#f8f9fa', borderRadius: 12,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', padding: 20
          }}>
            <img src={selected.img} alt={selected.name} style={{ width: '80px', height: '80px', borderRadius: '8px', objectFit: 'cover' }} />
            <div style={{ fontSize: 22, fontWeight: 800, marginTop: 12 }}>{selected.name}</div>
          </div>

          {/* Center - Price & Chart */}
          <div>
            <div style={{ fontSize: 13, color: '#888', marginBottom: 4 }}>
              Current Average Price
            </div>
            <div style={{ fontSize: 40, fontWeight: 900, marginBottom: 4 }}>
              {selected.avgPrice.toLocaleString()} <span style={{ fontSize: 20, color: '#888' }}>FCFA</span>
            </div>
            <button style={{
              background: 'none', border: '1px solid #e5e7eb',
              borderRadius: 8, padding: '6px 14px', fontSize: 12,
              cursor: 'pointer', marginBottom: 16
            }}>
              📷 Scan Similar Product
            </button>

            <div style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
              Available at:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
              {selected.available.map((m, i) => (
                <span key={i} style={{
                  background: '#f0f0f0', padding: '4px 10px',
                  borderRadius: 20, fontSize: 12
                }}>{m}</span>
              ))}
            </div>

            {/* Line Chart */}
            <div style={{
              width: '100%', height: 130,
              background: '#f8f9fa', borderRadius: 10, overflow: 'hidden', position: 'relative'
            }}>
              <svg width="100%" height="130" viewBox="0 0 300 160" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#27ae60" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#27ae60" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={selected.trend} fill="none" stroke="#27ae60" strokeWidth="2.5" />
                <path d={`${selected.trend} L300,160 L0,160 Z`} fill="url(#chartGrad)" />
              </svg>
            </div>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              fontSize: 11, color: '#aaa', padding: '4px 8px'
            }}>
              {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map(m => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>

          {/* Right - Nearby Markets */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <h3 style={{ marginBottom: 4 }}>Nearby Markets</h3>
            {selected.markets.map((m, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '12px 16px', border: '1px solid #e5e7eb',
                borderRadius: 8, alignItems: 'center',
                background: i === 0 ? '#f0fdf4' : 'white'
              }}>
                <span style={{ fontSize: 13 }}>{m.name}</span>
                <span style={{ fontWeight: 700, fontSize: 14, color: i === 0 ? '#27ae60' : '#333' }}>
                  {m.price.toLocaleString()} FCFA
                </span>
              </div>
            ))}

            <button style={{
              marginTop: 8, background: '#27ae60', color: 'white',
              border: 'none', padding: '12px', borderRadius: 10,
              fontWeight: 600, fontSize: 14, cursor: 'pointer',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', gap: 8
            }}>
              📷 Scan Similar Product
            </button>

            {/* User Reviews */}
            <div style={{
              background: '#f0fdf4', borderRadius: 10, padding: 14, marginTop: 4
            }}>
              <div style={{ fontWeight: 700, marginBottom: 8 }}>⭐ User Reviews</div>
              <div style={{ fontSize: 12, color: '#444', lineHeight: 1.6 }}>
                Smart Market Price has become a cooperative for farmers. Users find this market a success.
              </div>
              <div style={{ marginTop: 8, color: '#f59e0b', fontSize: 16 }}>★★★★★</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}