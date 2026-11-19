import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', achievements: 4 },
  { name: 'Feb', achievements: 2 },
  { name: 'Mar', achievements: 6 },
  { name: 'Apr', achievements: 8 },
];

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-600">Certifications</h2>
          <p className="text-4xl font-bold text-blue-500 mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-600">Internships</h2>
          <p className="text-4xl font-bold text-green-500 mt-2">2</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-600">Volunteer Hours</h2>
          <p className="text-4xl font-bold text-purple-500 mt-2">80</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow h-96">
        <h2 className="text-lg font-semibold mb-4 text-gray-600">Achievements Progress</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="achievements" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;