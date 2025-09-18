import { useState } from "react";
import { motion } from "framer-motion";

const StudentDashboard = () => {
  const [tab, setTab] = useState("upcoming");

  // Student info
  const student = {
    name: "Deepak Sharma",
    rollNumber: "U123456",
  };

  // Mock data
  const activeClass = {
    name: "AI/ML",
    teacher: "Dr. Rajesh Kumar",
    time: "Today 11 AM - 12 PM",
  };

  const pastClasses = [
    { id: 1, name: "Math", teacher: "Mr. Sharma", time: "Yesterday 10 AM - 11 AM" },
    { id: 2, name: "Physics", teacher: "Ms. Verma", time: "Yesterday 2 PM - 3 PM" },
  ];

  const upcomingClasses = [
    { id: 3, name: "English", teacher: "Ms. Roy", time: "Tomorrow 9 AM - 10 AM" },
    { id: 4, name: "History", teacher: "Mr. Das", time: "Tomorrow 11 AM - 12 PM" },
  ];

  const renderClassCard = (cls) => (
    <motion.div
      key={cls.id}
      className="bg-white shadow rounded p-4 m-2 hover:shadow-lg transition"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="font-bold text-lg">{cls.name}</h3>
      <p>Teacher: {cls.teacher}</p>
      <p>Time: {cls.time}</p>
      <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">Join</button>
    </motion.div>
  );

  const getTabData = () => (tab === "past" ? pastClasses : upcomingClasses);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Student Info */}
      <div className="mb-6 p-4 bg-white rounded shadow">
        <h1 className="text-2xl font-bold">Welcome, {student.name}</h1>
        <p className="text-gray-600">Roll Number: {student.rollNumber}</p>
      </div>

      {/* Active Class */}
      <div className="mb-6 p-6 bg-white rounded shadow text-center">
        <h2 className="text-xl font-semibold mb-2">Current Active Class</h2>
        <p className="text-lg font-bold">{activeClass.name}</p>
        <p>Teacher: {activeClass.teacher}</p>
        <p>Time: {activeClass.time}</p>
        <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded">Join Now</button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${tab === "past" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          onClick={() => setTab("past")}
        >
          Past Classes
        </button>
        <button
          className={`px-4 py-2 rounded ${tab === "upcoming" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          onClick={() => setTab("upcoming")}
        >
          Upcoming Classes
        </button>
      </div>

      {/* Class Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {getTabData().map(renderClassCard)}
      </div>
    </div>
  );
};

export default StudentDashboard;
