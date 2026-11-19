import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

// Import all page components
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Tracker from './pages/Tracker';
import FacultyValidation from './pages/FacultyValidation';
import Events from './pages/Events';
import Portfolio from './pages/Portfolio';
import Analytics from './pages/Analytics';
import Leaderboard from './pages/Leaderboard';
import Audit from './pages/Audit';

function App() {
  return (
    <Router>
      <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar />
          <main className="p-6 flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/tracker" element={<Tracker />} />
              <Route path="/validation" element={<FacultyValidation />} />
              <Route path="/events" element={<Events />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/audit" element={<Audit />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;