import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom colored pin icons
const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const orangeIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const allMarkets = [
  {
    name: 'Bamenda Central Market',
    lat: 5.9631, lng: 10.1591,
    tomatoes: '1000 FCFA/kg',
    tomatoes2: '1750 FCFA/kg',
    type: 'cheap',
    price: '900/kg',
  },
  {
    name: 'Bamenda Central Market',
    lat: 5.9550, lng: 10.1450,
    tomatoes: '1000 FCFA/kg',
    tomatoes2: '1200 FCFA/kg',
    type: 'cheap',
    price: '900/kg',
  },
  {
    name: 'Bamenda Central Market',
    lat: 5.9700, lng: 10.1700,
    tomatoes: '1000 FCFA/kg',
    tomatoes2: '1015 FCFA/kg',
    type: 'cheap',
    price: '900/kg',
  },
  {
    name: 'Wum Market',
    lat: 6.0500, lng: 10.0667,
    tomatoes: '1600 FCFA/kg',
    tomatoes2: '1800 FCFA/kg',
    type: 'average',
    price: '900/kg',
  },
  {
    name: 'Wum Market',
    lat: 6.0300, lng: 10.0800,
    tomatoes: '1700 FCFA/kg',
    tomatoes2: null,
    type: 'average',
    price: '10 FCFA/kg',
  },
  {
    name: 'Wum Market',
    lat: 6.0100, lng: 10.1000,
    tomatoes: '1650 FCFA/kg',
    tomatoes2: null,
    type: 'average',
    price: '12 905/kg',
  },
  {
    name: 'Yium Market',
    lat: 5.9400, lng: 10.2000,
    tomatoes: '800 FCFA/kg',
    tomatoes2: null,
    type: 'cheap',
    price: '5 CFA/kg',
  },
  {
    name: 'Abep Market',
    lat: 5.9800, lng: 10.2200,
    tomatoes: '2200 FCFA/kg',
    tomatoes2: null,
    type: 'average',
    price: '4 100/kg',
  },
  {
    name: 'Suten Market',
    lat: 5.9200, lng: 10.1300,
    tomatoes: '900 FCFA/kg',
    tomatoes2: null,
    type: 'cheap',
    price: '12 500/kg',
  },
  {
    name: 'Youp Market',
    lat: 6.0000, lng: 10.1800,
    tomatoes: '2800 FCFA/kg',
    tomatoes2: null,
    type: 'average',
    price: '5 500/kg',
  },
  {
    name: 'Sup Market',
    lat: 5.9100, lng: 10.1100,
    tomatoes: '1100 FCFA/kg',
    tomatoes2: null,
    type: 'cheap',
    price: '2 100/kg',
  },
];

const filterList = [
  { label: 'All Markets', price: '810/kg', key: 'all' },
  { label: 'Bamenda Central Market', price: '900/kg', key: 'Bamenda Central Market' },
  { label: 'Wum Market', price: '900/kg', key: 'Wum Market' },
  { label: 'Wum Market', price: '10 FCFA/kg', key: 'Wum Market2' },
  { label: 'Wum Market', price: '12 905/kg', key: 'Wum Market3' },
  { label: 'Yium Market', price: '5 CFA/kg', key: 'Yium Market' },
  { label: 'Abep Market', price: '4 100/kg', key: 'Abep Market' },
  { label: 'Suten Market', price: '12 500/kg', key: 'Suten Market' },
  { label: 'Youp Market', price: '5 500/kg', key: 'Youp Market' },
  { label: 'Sup Market', price: '2 100/kg', key: 'Sup Market' },
];

function ZoomControl() {
  const map = useMap();
  return (
    <div style={{
      position: 'absolute', top: 12, left: 12, zIndex: 1000,
      display: 'flex', flexDirection: 'column', gap: 4
    }}>
      {['+', '−', '−'].map((b, i) => (
        <button key={i} onClick={() => i === 0 ? map.zoomIn() : map.zoomOut()}
          style={{
            width: 32, height: 32, borderRadius: 6,
            border: '1px solid #ccc', background: 'white',
            cursor: 'pointer', fontWeight: 700, fontSize: 16,
            boxShadow: '0 1px 4px rgba(0,0,0,0.15)'
          }}>{b}</button>
      ))}
    </div>
  );
}

export default function MarketMap() {
  const [checkedAll, setCheckedAll] = useState(true);
  const [checkedMarkets, setCheckedMarkets] = useState(['Bamenda Central Market']);

  const toggleMarket = (name) => {
    setCheckedMarkets(prev =>
      prev.includes(name) ? prev.filter(x => x !== name) : [...prev, name]
    );
  };

  const visibleMarkets = checkedAll
    ? allMarkets
    : allMarkets.filter(m => checkedMarkets.includes(m.name));

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 290px', gap: 20, height: 'calc(100vh - 120px)' }}>
      {/* Map */}
      <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.1)', position: 'relative' }}>
        <MapContainer
          center={[5.9631, 10.1591]}
          zoom={12}
          style={{ width: '100%', height: '100%' }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ZoomControl />
          {visibleMarkets.map((market, i) => (
            <Marker
              key={i}
              position={[market.lat, market.lng]}
              icon={market.type === 'cheap' ? greenIcon : orangeIcon}
            >
              <Popup>
                <div style={{ minWidth: 180, fontFamily: 'Segoe UI, sans-serif' }}>
                  <div style={{ fontWeight: 700, marginBottom: 6, fontSize: 14 }}>{market.name}</div>
                  <div style={{ fontSize: 13, color: '#444' }}>🍅 Tomatoes: <strong>{market.tomatoes}</strong></div>
                  {market.tomatoes2 && (
                    <div style={{ fontSize: 13, color: '#444' }}>🍅 Tomatoes: <strong>{market.tomatoes2}</strong></div>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Legend */}
        <div style={{
          position: 'absolute', bottom: 16, left: 16, zIndex: 1000,
          background: 'white', borderRadius: 10, padding: '10px 16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          display: 'flex', gap: 20
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
            <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#27ae60' }} />
            Cheap (≤ 1500 FCFA/kg)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
            <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#f39c12' }} />
            Average (1500–3000 FCFA/kg)
          </div>
        </div>
      </div>

      {/* Filter Panel */}
      <div style={{
        background: 'white', borderRadius: 16, padding: 20,
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        overflowY: 'auto'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700 }}>Filters</h3>
          <span style={{ fontSize: 20, cursor: 'pointer', color: '#888' }}>⋮</span>
        </div>

        {/* All Markets */}
        <label style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '10px 0', borderBottom: '1px solid #f0f0f0', cursor: 'pointer', fontSize: 14
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" checked={checkedAll} onChange={() => setCheckedAll(!checkedAll)}
              style={{ accentColor: '#27ae60', width: 16, height: 16 }} />
            <strong>All Markets</strong>
          </span>
          <span style={{ fontWeight: 600, color: '#333' }}>810/kg</span>
        </label>

        {/* Individual Markets */}
        {filterList.slice(1).map((m, i) => (
          <label key={i} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '10px 0', borderBottom: '1px solid #f5f5f5', cursor: 'pointer', fontSize: 13
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input
                type="checkbox"
                checked={checkedMarkets.includes(m.label)}
                onChange={() => toggleMarket(m.label)}
                style={{ accentColor: '#27ae60', width: 15, height: 15 }}
              />
              {m.label}
            </span>
            <span style={{ color: '#555', fontWeight: 500 }}>{m.price}</span>
          </label>
        ))}
      </div>
    </div>
  );
}