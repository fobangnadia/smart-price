import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import PriceSubmission from './pages/PriceSubmission';
import PriceHistory from './pages/PriceHistory';
import MarketMap from './pages/MarketMap';
import ProductDetail from './pages/ProductDetail';
import PriceTrends from './pages/PriceTrends';
import Analytics from './pages/Analytics';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>

        {/* Landing page - NO sidebar */}
        <Route path="/" element={<Landing />} />

        {/* All other pages - WITH sidebar */}
        <Route path="/*" element={
          <div className="app-layout">
            <Sidebar />
            <div className="main-content">
              <Navbar />
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/submit" element={<PriceSubmission />} />
                <Route path="/history" element={<PriceHistory />} />
                <Route path="/map" element={<MarketMap />} />
                <Route path="/product" element={<ProductDetail />} />
                <Route path="/trends" element={<PriceTrends />} />
                <Route path="/analytics" element={<Analytics />} />
              </Routes>
            </div>
          </div>
        } />

      </Routes>
    </Router>
  );
}

export default App;