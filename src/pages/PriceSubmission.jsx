import { useState } from 'react';

export default function PriceSubmission() {
  const [step, setStep] = useState(1);
  const [quality, setQuality] = useState('');
  const [form, setForm] = useState({
    product: '', market: '', pricePerKg: '', quantity: 1
  });

  const markets = ['Bamenda Central', 'Douala New Bell', 'Yaoundé Central', 'Kumbo Market', 'Buea Market'];
  const products = ['Tomatoes', 'Maize', 'Cassava', 'Onions', 'Pepper', 'Plantain'];

  const handleSubmit = () => {
    alert(`✅ Price submitted!\nProduct: ${form.product}\nMarket: ${form.market}\nPrice: ${form.pricePerKg} FCFA/kg\nQuality: ${quality}`);
    setStep(1);
    setForm({ product: '', market: '', pricePerKg: '', quantity: 1 });
    setQuality('');
  };

  return (
    <div>
      {/* Step Indicator */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 28 }}>
        {['Product Info', 'Market Details', 'Price & Quality'].map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: step === i + 1 ? '#27ae60' : '#e5e7eb',
              color: step === i + 1 ? 'white' : '#888',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: 14
            }}>{i + 1}</div>
            <span style={{ fontSize: 13, color: step === i + 1 ? '#27ae60' : '#888', fontWeight: step === i + 1 ? 600 : 400 }}>{s}</span>
            {i < 2 && <span style={{ color: '#ccc' }}>›</span>}
          </div>
        ))}
      </div>

      <div className="card" style={{ maxWidth: 600 }}>
        <h3 style={{ marginBottom: 20 }}>
          {step === 1 && 'Step 1: Product Information'}
          {step === 2 && 'Step 2: Market Details'}
          {step === 3 && 'Step 3: Price & Quality'}
        </h3>

        {step === 1 && (
          <>
            <div className="form-group">
              <label>Product</label>
              <select value={form.product} onChange={e => setForm({ ...form, product: e.target.value })}>
                <option value="">Select product</option>
                {products.map(p => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Quantity </label>
              <input type="number" value={form.quantity} onChange={e => setForm({ ...form, quantity: e.target.value })} />
            </div>
            <button className="btn-green" onClick={() => setStep(2)}>Next →</button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="form-group">
              <label>Market</label>
              <select value={form.market} onChange={e => setForm({ ...form, market: e.target.value })}>
                <option value="">Select market</option>
                {markets.map(m => <option key={m}>{m}</option>)}
              </select>
            </div>
            <div style={{ marginBottom: 18 }}>
              <button className="btn-outline" style={{ width: '100%', padding: 12, color: '#27ae60', borderColor: '#27ae60' }}>
                📍 Get GPS Location
              </button>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn-outline" onClick={() => setStep(1)}>← Back</button>
              <button className="btn-green" onClick={() => setStep(3)}>Next →</button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="form-group">
              <label>Price (FCFA)</label>
              <input type="number" placeholder="e.g. 1200" value={form.pricePerKg} onChange={e => setForm({ ...form, pricePerKg: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Quality</label>
              <div className="quality-buttons">
                {['Good', 'Average', 'Bad'].map(q => (
                  <button key={q} className={`quality-btn${quality === q ? ' selected' : ''}`} onClick={() => setQuality(q)}>{q}</button>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn-outline" onClick={() => setStep(2)}>← Back</button>
              <button className="btn-green" onClick={handleSubmit}>✅ Submit Price</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}