export default function Dashboard() {
  const history = [
    { id: 1, market: 'Mile 4 Market', product: 'Maize', price: 1200, date: '2026-10-01', status: 'approved' },
    { id: 2, market: 'Nkwen Market', product: 'Maize', price: 1200, date: '2026-10-01', status: 'approved' },
    { id: 3, market: 'Bambui Market', product: 'Maize', price: 1200, date: '2026-10-01', status: 'pending' },
  ];

  const alerts = [
    { product: {image: '/tomatoes.jpeg', name: 'Tomatoes'}, price: '05.07 mm', threshold: '00.01 pm', status: 'Threshold Hit' },
    { product: {image: '/perper.jpeg', name: 'Pepper'}, price: '06.09 mm', threshold: '02.00 pm', status: 'Threshold Hit' },
  ];

  return (
    <div>
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <img src="/WhatsApp Image 2026-02-24 at 8.10.00 PM (1).jpeg" alt="Farmer" className="farmer-avatar" />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, color: '#888' }}>Welcome back,</div>
          <div style={{ fontSize: 20, fontWeight: 800 }}>Farmer</div>
          <div style={{ fontSize: 13, color: '#888' }}>from Bamenda</div>
        </div>
        <div className="reputation-bar" style={{ maxWidth: 200 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
            <span>Reputation Score:</span>
            <strong>4.8/5</strong>
          </div>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: '96%' }} />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="label">Total Submissions</div>
          <div className="value">24</div>
        </div>
        <div className="stat-card">
          <div className="label">Approved</div>
          <div className="value approved">22</div>
        </div>
        <div className="stat-card">
          <div className="label">Pending</div>
          <div className="value pending">2</div>
        </div>
        <div className="stat-card">
          <div className="label">Rejected</div>
          <div className="value rejected">0</div>
        </div>
      </div>

      {/* Two Column */}
      <div className="two-col">
        {/* Price History */}
        <div className="card">
          <div className="section-header">
            <h3>Submitted Prices History</h3>
            <button className="btn-outline">See all →</button>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>#</th><th>Market</th><th>Product</th>
                <th>Price (FCFA)</th><th>Date</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map(h => (
                <tr key={h.id}>
                  <td>{h.id}</td>
                  <td>{h.market}</td>
                  <td>{h.product}</td>
                  <td>{h.price}</td>
                  <td>{h.date}</td>
                  <td><span className={`badge ${h.status}`}>{h.status.charAt(0).toUpperCase() + h.status.slice(1)}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Alerts + Settings */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="card">
            <div className="section-header">
              <h3>Saved Alerts</h3>
              <button className="btn-outline">See all →</button>
            </div>
            <table className="data-table">
              <thead>
                <tr><th>Product</th><th>Price Alert</th><th>Threshold</th><th>Status</th></tr>
              </thead>
              <tbody>
                {alerts.map((a, i) => (
                  <tr key={i}>
                    <td><img src={a.product.image} alt={a.product.name} style={{width: '16px', height: '16px', verticalAlign: 'middle'}} /> {a.product.name}</td>
                    <td>{a.price}</td>
                    <td>{a.threshold}</td>
                    <td><span className="badge approved">{a.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: 16 }}>Settings</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <span style={{ fontSize: 14 }}>Notification Preferences</span>
              <span style={{ fontSize: 12, color: '#888' }}>→</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 14 }}>Account Settings</span>
              <div style={{ width: 40, height: 22, background: '#27ae60', borderRadius: 11, cursor: 'pointer' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}