export default function Analytics() {
  const harvests = [
    { percent: '34%', change: '+440%', icon: '🌱', label: 'Maize Harvest Prediction' },
    { percent: '4.5%', change: '+910%', icon: '🌾', label: 'Wheat Harvest Prediction' },
    { percent: '40%', change: '+931%', icon: '🐛', label: 'Rice Harvest Prediction' },
  ];

  const tableData = [
    { date: '10,335', price: '75,076', chate: '3,0,578', price2: '40,829', change: '4,9,835', change2: '41,5,576' },
    { date: '9,250', price: '62,340', chate: '2,8,100', price2: '38,200', change: '4,2,100', change2: '39,8,800' },
  ];

  return (
    <div>
      {/* Product Tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {['Maize', 'Wheat', 'Rice'].map((p, i) => (
          <button key={p} style={{
            padding: '8px 20px', borderRadius: 8,
            background: i === 1 ? '#1a1a1a' : 'white',
            color: i === 1 ? 'white' : '#555',
            border: '1px solid #e5e7eb',
            fontWeight: 600, fontSize: 14, cursor: 'pointer'
          }}>{p}</button>
        ))}
      </div>

      <div className="card" style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <h3>Maize / 30 days</h3>
          <div style={{ display: 'flex', gap: 8 }}>
            <span style={{ fontSize: 12, color: '#888' }}>Maize</span>
            <span style={{ fontSize: 12, color: '#888' }}>Plomih</span>
          </div>
        </div>

        {/* Area Chart */}
        <div style={{ position: 'relative', height: 200, background: '#f8f9fa', borderRadius: 10, overflow: 'hidden' }}>
          <svg width="100%" height="200" viewBox="0 0 600 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#27ae60" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#27ae60" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path d="M0,180 Q100,50 150,60 Q200,70 250,140 Q300,180 350,80 Q400,20 500,30 Q550,35 600,20" fill="none" stroke="#27ae60" strokeWidth="2.5" />
            <path d="M0,180 Q100,50 150,60 Q200,70 250,140 Q300,180 350,80 Q400,20 500,30 Q550,35 600,20 L600,200 L0,200Z" fill="url(#area)" />
            {/* Insight tooltip */}
            <rect x="120" y="30" width="70" height="24" rx="6" fill="#1a1a1a" />
            <text x="155" y="46" fill="white" fontSize="11" textAnchor="middle">Insight</text>
            <circle cx="155" cy="60" r="4" fill="white" stroke="#27ae60" strokeWidth="2" />
          </svg>
          <div style={{ position: 'absolute', bottom: 8, left: 0, right: 0, display: 'flex', justifyContent: 'space-around', fontSize: 12, color: '#888' }}>
            <span>Today</span><span>May</span><span>Today</span>
          </div>
        </div>
      </div>

      {/* Harvest Predictions */}
      <div className="analytics-grid" style={{ marginBottom: 20 }}>
        {harvests.map((h, i) => (
          <div key={i} className="harvest-card card">
            <div style={{ fontSize: 28 }}>{h.icon}</div>
            <div className="percent">{h.percent}</div>
            <div style={{ fontSize: 13, color: '#888', marginBottom: 4 }}>{h.label}</div>
            <div className="change">{h.change}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Date ⇅</th><th>Price ⇅</th><th>Chate ⇅</th><th>Price ⇅</th><th>Change ⇅</th><th>Change ⇅</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i}>
                <td>{row.date}</td>
                <td>{row.price}</td>
                <td>{row.chate}</td>
                <td>{row.price2}</td>
                <td>{row.change}</td>
                <td>{row.change2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}