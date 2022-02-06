import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Address } from './pages/Address';

import { Home } from './pages/home';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/address" element={<Address />} />
      </Routes>
    </Router>
  );
}
