import { useState } from 'react';

const products = [
  { name: 'Tomatoes', image: '/tomatoes.jpeg', bamenda: 35100, kumbo: 20, buea: 57, yaounde: 57, yaounde2: 69, best: true },
  { name: 'Cassava', image:'/cassava.jpeg', bamenda: 50100, kumbo: 110, buea: 87, yaounde: 39, yaounde2: 28, best: false },
  { name: 'Maize', image: '/maize.jpeg', bamenda: 48100, kumbo: 10, buea: 77, yaounde: 28, yaounde2: 22, best: true },
  { name: 'Plantain', image: '/plantain.jpeg', bamenda: 45100, kumbo: 7100, buea: 61, yaounde: 45, yaounde2: 25, best: false },
  { name: 'Pepper', image: '/perper.jpeg', bamenda: 33100, kumbo: 91, buea: 61, yaounde: 18, yaounde2: 26, best: false },
  { name: 'Groundnut', image: '/groundnut.jpeg', bamenda: 38100, kumbo: 61, buea: 67, yaounde: 28, yaounde2: 311, best: false },
];

export default function PriceHistory() {
  const [search, setSearch] = useState('');
  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h1>Price History Page</h1>
      <div className="search-bar">
        <span><img src="/search icon.jpeg" alt="Search" width="20px" height="20px" /></span>
        <input placeholder="Search for a product" value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      <div className="card price-table-wrapper">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Category', 'Region', 'Series', 'Outlier'].map((f, i) => (
              <label key={f} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
                <input type="checkbox" defaultChecked={i === 0} /> {f}
              </label>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <select className="btn-outline" style={{ fontSize: 13 }}><option>Region ▾</option></select>
            <select className="btn-outline" style={{ fontSize: 13 }}><option>Sort by ▾</option></select>
          </div>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th><th>Bamenda</th><th>Kumbo</th><th>Buea</th><th>Yaoundé</th><th>Yaoundé</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, i) => (
              <tr key={i} style={{ background: p.best ? '#f0fdf4' : 'transparent' }}>
                <td style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {p.image ? <img src={p.image} alt={p.name} style={{width: '24px', height: '24px'}} /> : <span style={{ fontSize: 24 }}>{p.emoji}</span>} {p.name}
                </td>
                <td>${p.bamenda.toLocaleString()}</td>
                <td>${p.kumbo.toLocaleString()}</td>
                <td>${p.buea.toLocaleString()}</td>
                <td>${p.yaounde.toLocaleString()}</td>
                <td>${p.yaounde2.toLocaleString()}</td>
                <td>{p.best ? <span className="best-price-badge">Best Price</span> : <span style={{ color: '#888', fontSize: 12 }}>Last updated</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}