import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaUser, FaClipboardList, FaCheckCircle, FaFilePdf, FaChartBar, FaMedal, FaSearch, FaUniversity } from 'react-icons/fa';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', icon: <FaTachometerAlt />, path: '/' },
    { name: 'Profile', icon: <FaUser />, path: '/profile' },
    { name: 'Activity Tracker', icon: <FaClipboardList />, path: '/tracker' },
    { name: 'Faculty Validation', icon: <FaCheckCircle />, path: '/validation' },
    { name: 'Portfolio', icon: <FaFilePdf />, path: '/portfolio' },
    { name: 'Analytics', icon: <FaChartBar />, path: '/analytics' },
    { name: 'Leaderboard', icon: <FaMedal />, path: '/leaderboard' },
    { name: 'Events', icon: <FaUniversity />, path: '/events' },
    { name: 'Audit Mode', icon: <FaSearch />, path: '/audit' },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col p-4">
      <div className="text-2xl font-bold mb-8 text-center text-blue-400">Smart Hub</div>
      <nav>
        <ul className="space-y-2">
          {navItems.map(item => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg transition-colors duration-200 
                  ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-700 text-gray-300'}`
                }
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;