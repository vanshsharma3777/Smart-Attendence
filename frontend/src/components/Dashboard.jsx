import { useNavigate } from "react-router-dom";

const Dashboard = ({user}) => {
  const navigate = useNavigate();
  const role = user.role;
  const handleRoleSelection = () => {
    if (role === "student") navigate("/student/dashboard");
    if (role === "teacher") navigate("/teacher/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-200 to-purple-200">
      <h1 className="text-4xl font-bold mb-6">Welcome! Select Your Role</h1>
      <div className="flex gap-6">
        <button
          onClick={handleRoleSelection}
          className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600 transition"
        >
          Student
        </button>
        <button
          onClick={handleRoleSelection}
          className="bg-green-500 text-white px-6 py-3 rounded shadow hover:bg-green-600 transition"
        >
          Teacher
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
