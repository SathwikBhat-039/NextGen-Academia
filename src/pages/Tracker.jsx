import { useState, useEffect } from 'react';

const Tracker = () => {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({ title: '', type: '', date: '', file: null });

  useEffect(() => {
    const storedActivities = JSON.parse(localStorage.getItem('activities')) || [];
    setActivities(storedActivities);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewActivity({ ...newActivity, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewActivity({ ...newActivity, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newActivity.title && newActivity.type && newActivity.file) {
      const newActivitiesList = [...activities, { ...newActivity, fileName: newActivity.file.name, id: Date.now(), status: 'Pending' }];
      setActivities(newActivitiesList);
      localStorage.setItem('activities', JSON.stringify(newActivitiesList));
      setNewActivity({ title: '', type: '', date: '', file: null });
      e.target.reset();
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Activity Tracker</h1>
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Upload New Achievement</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={newActivity.title}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Type</label>
            <input
              type="text"
              name="type"
              value={newActivity.type}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={newActivity.date}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Upload File (PDF/Image)</label>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="mt-1 block w-full"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit for Validation
          </button>
        </form>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Your Submissions</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">File</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {activities.map((activity) => (
              <tr key={activity.id}>
                <td className="px-6 py-4 whitespace-nowrap">{activity.title}</td>
                <td className="px-6 py-4 whitespace-now-wrap">{activity.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{activity.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{activity.fileName}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${activity.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : ''}`}>
                    {activity.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tracker;