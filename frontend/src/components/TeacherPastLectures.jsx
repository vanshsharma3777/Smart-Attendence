import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TeacherPastLectures = () => {
  const [pastLectures, setPastLectures] = useState([]);

  // Mock fetching function (replace with API call)
  const fetchPastLectures = () => {
    const data = [
      { id: 1, name: "Data Structures and Algorithms", time: "Yesterday 10 AM - 11 AM", attendance: 20 },
      { id: 2, name: "Complex Analysis", time: "Yesterday 2 PM - 3 PM", attendance: 18 },
      { id: 3, name: "Artificial Intelligence", time: "2 days ago 11 AM - 12 PM", attendance: 25 },
    ];
    setPastLectures(data);
  };

  useEffect(() => {
    fetchPastLectures();
  }, []);

  const downloadAttendance = (cls) => {
    alert(`Downloading attendance for ${cls.name} (${cls.attendance} students)`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Past Lectures</h1>

      {pastLectures.length === 0 && <p className="text-gray-600">No past lectures found.</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pastLectures.map((cls) => (
          <motion.div
            key={cls.id}
            className="bg-white shadow rounded p-4 hover:shadow-lg transition"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="font-bold text-lg">{cls.name}</h3>
            <p className="text-gray-700">Time: {cls.time}</p>
            <p className="text-gray-700">Total Students: {cls.attendance}</p>
            <button
              className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              onClick={() => downloadAttendance(cls)}
            >
              Download Attendance
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeacherPastLectures;
