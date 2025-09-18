import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const StudentPastLectures = () => {
  const [pastClasses, setPastClasses] = useState([]);

  // Mock fetching function (replace with API)
  const fetchPastClasses = () => {
    const data = [
      { id: 1, name: "Math", teacher: "Mr. Sharma", time: "Yesterday 10 AM - 11 AM" },
      { id: 2, name: "Physics", teacher: "Ms. Verma", time: "Yesterday 2 PM - 3 PM" },
      { id: 3, name: "AI/ML", teacher: "Dr. Rajesh Kumar", time: "2 days ago 11 AM - 12 PM" },
    ];
    setPastClasses(data);
  };

  useEffect(() => {
    fetchPastClasses();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Past Classes</h1>

      {pastClasses.length === 0 && <p className="text-gray-600">No past classes found.</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pastClasses.map((cls) => (
          <motion.div
            key={cls.id}
            className="bg-white shadow rounded p-4 hover:shadow-lg transition"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="font-bold text-lg">{cls.name}</h3>
            <p className="text-gray-700">Teacher: {cls.teacher}</p>
            <p className="text-gray-700">Time: {cls.time}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StudentPastLectures;
