import { useState } from 'react';

const allProducts = [
  {
    category: 'Fruits',
    name: 'Banana',
    image: '/banana.jpeg',
    cities: [
      { city: 'Bamenda', price: 500 },
      { city: 'Kumbo', price: 400, best: true },
      { city: 'Buea', price: 550 },
      { city: 'Yaoundé', price: 600 },
    ],
    bestCity: 'Kumbo',
    saving: 100,
    bars: [280, 180, 160, 70, 35, 18, 8, 8, 4, 4],
  },
  {
    category: 'Vegetables',
    name: 'Tomatoes',
    image: '/tomatoes.jpeg',
    cities: [
      { city: 'Bamenda', price: 1000 },
      { city: 'Kumbo', price: 900, best: true },
      { city: 'Buea', price: 1100 },
      { city: 'Yaoundé', price: 1200 },
    ],
    bestCity: 'Kumbo',
    saving: 100,
    bars: [260, 200, 170, 90, 50, 30, 15, 10, 6, 5],
  },
  {
    category: 'Vegetables',
    name: 'Pepper',
    image: '/perper.jpeg',
    cities: [
      { city: 'Bamenda', price: 2800 },
      { city: 'Kumbo', price: 2600, best: true },
      { city: 'Buea', price: 3000 },
      { city: 'Yaoundé', price: 3200 },
    ],
    bestCity: 'Kumbo',
    saving: 200,
    bars: [300, 220, 190, 100, 60, 35, 20, 12, 8, 5],
  },
  {
    category: 'Suki',
    name: 'Suki Leaf',
    image: '/suki.jpeg',
    cities: [
      { city: 'Bamenda', price: 300 },
      { city: 'Kumbo', price: 250, best: true },
      { city: 'Buea', price: 320 },
      { city: 'Yaoundé', price: 350 },
    ],
    bestCity: 'Kumbo',
    saving: 50,
    bars: [200, 160, 140, 80, 40, 20, 10, 8, 5, 3],
  },
  {
    category: 'Grains',
    name: 'Maize',
    image: '/maize.jpeg',
    cities: [
      { city: 'Bamenda', price: 800 },
      { city: 'Kumbo', price: 700, best: true },
      { city: 'Buea', price: 850 },
      { city: 'Yaoundé', price: 900 },
    ],
    bestCity: 'Kumbo',
    saving: 200,
    bars: [300, 200, 180, 80, 40, 20, 10, 10, 5, 5],
  },
  {
    category: 'Grains',
    name: 'Rice',
    image: '/rice.jpeg',
    cities: [
      { city: 'Bamenda', price: 1500 },
      { city: 'Kumbo', price: 1300, best: true },
      { city: 'Buea', price: 1600 },
      { city: 'Yaoundé', price: 1700 },
    ],
    bestCity: 'Kumbo',
    saving: 200,
    bars: [290, 210, 175, 95, 55, 30, 18, 10, 7, 4],
  },
  {
    category: 'Hodiclies',
    name: 'Njama Njama',
    image: '/njama-njama.jpeg',
    cities: [
      { city: 'Bamenda', price: 400 },
      { city: 'Kumbo', price: 350, best: true },
      { city: 'Buea', price: 450 },
      { city: 'Yaoundé', price: 500 },
    ],
    bestCity: 'Kumbo',
    saving: 50,
    bars: [220, 170, 150, 85, 45, 25, 12, 9, 6, 3],
  },
  {
    category: 'Porimities',
    name: 'Palm Oil',
    image: '/palm-oil.jpeg',
    cities: [
      { city: 'Bamenda', price: 2000 },
      { city: 'Kumbo', price: 1800, best: true },
      { city: 'Buea', price: 2100 },
      { city: 'Yaoundé', price: 2300 },
    ],
    bestCity: 'Buea',
    saving: 300,
    bars: [270, 190, 165, 88, 48, 28, 14, 10, 6, 4],
  },
  {
    category: 'Genvid',
    name: 'Ginger',
    image: '/ginger.jpeg',
    cities: [
      { city: 'Bamenda', price: 1200 },
      { city: 'Kumbo', price: 1000, best: true },
      { city: 'Buea', price: 1300 },
      { city: 'Yaoundé', price: 1400 },
    ],
    bestCity: 'Kumbo',
    saving: 200,
    bars: [250, 185, 155, 82, 42, 22, 11, 9, 5, 3],
  },
  {
    category: 'Yestell',
    name: 'Yam',
    image: '/yam.jpeg',
    cities: [
      { city: 'Bamenda', price: 900 },
      { city: 'Kumbo', price: 750, best: true },
      { city: 'Buea', price: 950 },
      { city: 'Yaoundé', price: 1000 },
    ],
    bestCity: 'Kumbo',
    saving: 150,
    bars: [240, 175, 148, 78, 38, 19, 10, 8, 5, 3],
  },
  {
    category: 'Tubins',
    name: 'Cassava',
    image: '/cassava.jpeg',
    cities: [
      { city: 'Bamenda', price: 600 },
      { city: 'Kumbo', price: 500, best: true },
      { city: 'Buea', price: 650 },
      { city: 'Yaoundé', price: 700 },
    ],
    bestCity: 'Kumbo',
    saving: 100,
    bars: [230, 165, 140, 75, 36, 17, 9, 7, 4, 2],
  },
  {
    category: 'Alangforn',
    name: 'Groundnut',
    image: '/groundnut.jpeg',
    cities: [
      { city: 'Bamenda', price: 1600 },
      { city: 'Kumbo', price: 1400, best: true },
      { city: 'Buea', price: 1700 },
      { city: 'Yaoundé', price: 1800 },
    ],
    bestCity: 'Kumbo',
    saving: 200,
    bars: [260, 195, 160, 86, 46, 26, 13, 10, 6, 4],
  },
];

const categories = [...new Set(allProducts.map(p => p.category))];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

export default function PriceTrends() {
  const [selectedCategory, setSelectedCategory] = useState('Grains');
  const [selectedCityIndex, setSelectedCityIndex] = useState(1);

  // Get current product based on selected category
  const currentProduct = allProducts.find(p => p.category === selectedCategory) || allProducts[0];
  const maxBar = Math.max(...currentProduct.bars);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '190px 1fr', gap: 20 }}>

      {/* Left Category Sidebar */}
      <div className="card" style={{ padding: '16px 12px' }}>
        {/* Active Category Button */}
        <div style={{
          background: '#27ae60', color: 'white',
          padding: '10px 14px', borderRadius: 8,
          marginBottom: 14, display: 'flex',
          justifyContent: 'space-between', alignItems: 'center',
          cursor: 'pointer', fontWeight: 700, fontSize: 14,
        }}>
          <span>✓ {selectedCategory}</span>
          <span>▾</span>
        </div>

        {/* Category List */}
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setSelectedCityIndex(1);
            }}
            style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '9px 6px', cursor: 'pointer', borderRadius: 6,
              fontSize: 14, transition: 'all 0.15s',
              color: selectedCategory === cat ? '#27ae60' : '#555',
              fontWeight: selectedCategory === cat ? 700 : 400,
              background: selectedCategory === cat ? '#f0fdf4' : 'transparent',
            }}
          >
            <div style={{
              width: 16, height: 16, border: `2px solid`,
              borderColor: selectedCategory === cat ? '#27ae60' : '#ccc',
              borderRadius: '50%',
              background: selectedCategory === cat ? '#27ae60' : 'transparent',
              flexShrink: 0,
            }} />
            {cat}
          </div>
        ))}
      </div>

      {/* Right Main Panel */}
      <div className="card">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 13, color: '#888', marginBottom: 2 }}>
              <img src={currentProduct.image} alt={currentProduct.name} style={{width: '16px', height: '16px', verticalAlign: 'middle'}} /> {selectedCategory}
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 900, margin: 0 }}>
              {currentProduct.name}
            </h2>
            <div style={{ fontSize: 13, color: '#888', marginTop: 4 }}>Select city:</div>
          </div>
          <button style={{
            background: 'none', border: '1px solid #e5e7eb',
            padding: '8px 16px', borderRadius: 8,
            fontSize: 13, cursor: 'pointer', fontWeight: 600,
          }}>
            📤 Share Trend
          </button>
        </div>

        {/* City Price Cards */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
          {currentProduct.cities.map((c, i) => (
            <div
              key={i}
              onClick={() => setSelectedCityIndex(i)}
              style={{
                padding: '14px 20px', borderRadius: 10, cursor: 'pointer',
                border: '2px solid',
                borderColor: selectedCityIndex === i ? '#27ae60' : '#e5e7eb',
                background: selectedCityIndex === i ? '#27ae60' : 'white',
                color: selectedCityIndex === i ? 'white' : '#333',
                transition: 'all 0.2s', minWidth: 110,
              }}
            >
              <div style={{ fontSize: 13, marginBottom: 4, opacity: 0.85 }}>{c.city}</div>
              <div style={{ fontSize: 20, fontWeight: 900 }}>
                {c.price.toLocaleString()} <span style={{ fontSize: 13 }}>FCFA</span>
              </div>
              {c.best && (
                <div style={{ fontSize: 11, marginTop: 4, opacity: 0.9 }}>⭐ Best Price</div>
              )}
            </div>
          ))}
        </div>

        {/* Bar + Line Chart */}
        <div style={{
          background: '#f8f9fa', borderRadius: 12,
          padding: '16px 16px 8px', marginBottom: 8,
        }}>
          <svg width="100%" height="180" viewBox="0 0 580 180">
            {/* Bars */}
            {currentProduct.bars.map((h, i) => {
              const barH = (h / maxBar) * 150;
              const isSelected = i === selectedCityIndex % currentProduct.bars.length;
              return (
                <rect
                  key={i}
                  x={i * 56 + 8}
                  y={160 - barH}
                  width={32}
                  height={barH}
                  fill={isSelected ? '#27ae60' : i === 0 ? '#a8e6c3' : '#e8f5e9'}
                  rx={4}
                />
              );
            })}

            {/* Trend line */}
            <polyline
              points={currentProduct.bars.map((h, i) => {
                const y = 160 - (h / maxBar) * 150;
                return `${i * 56 + 24},${y}`;
              }).join(' ')}
              fill="none"
              stroke="#f39c12"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Dots on line */}
            {currentProduct.bars.map((h, i) => {
              const y = 160 - (h / maxBar) * 150;
              return (
                <circle key={i} cx={i * 56 + 24} cy={y} r="4"
                  fill="white" stroke="#f39c12" strokeWidth="2" />
              );
            })}
          </svg>

          {/* Month labels */}
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            padding: '4px 8px 0', fontSize: 11, color: '#999',
          }}>
            {months.map(m => <span key={m}>{m}</span>)}
          </div>
        </div>

        {/* Recommendation Bar */}
        <div style={{
          background: '#1a1a1a', borderRadius: 12,
          padding: '14px 20px', marginTop: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{
              fontSize: 11, color: '#f39c12', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4,
            }}>
              💡 Recommendation
            </div>
            <div style={{ color: 'white', fontWeight: 700, fontSize: 15 }}>
              Best in {currentProduct.bestCity} — Save {currentProduct.saving.toLocaleString()} FCFA
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{
              background: 'rgba(255,255,255,0.15)', color: 'white',
              border: '1px solid rgba(255,255,255,0.3)',
              padding: '8px 16px', borderRadius: 8,
              cursor: 'pointer', fontSize: 13, fontWeight: 600,
            }}>📤 Share</button>
            <button style={{
              background: 'rgba(255,255,255,0.15)', color: 'white',
              border: '1px solid rgba(255,255,255,0.3)',
              padding: '8px 16px', borderRadius: 8,
              cursor: 'pointer', fontSize: 13, fontWeight: 600,
            }}>🔔 Set Alert</button>
          </div>
        </div>
      </div>
    </div>
  );
}