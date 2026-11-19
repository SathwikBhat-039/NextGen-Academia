import { FaUserCircle } from 'react-icons/fa';

const Topbar = () => {
  return (
    <header className="flex justify-between items-center bg-white p-4 shadow-md sticky top-0 z-10">
      <h1 className="text-xl font-bold text-gray-800">Smart Student Hub</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">John Doe</span>
        <FaUserCircle className="text-2xl text-gray-500" />
      </div>
    </header>
  );
};

export default Topbar;