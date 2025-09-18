import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TeacherDashboard = () => {
  const [tab, setTab] = useState("create");
  const [activeClass, setActiveClass] = useState(null);
  const [attendanceCount, setAttendanceCount] = useState(0);
  const [showCreateForm, setShowCreateForm] = useState(true);
  const [classType, setClassType] = useState("lecture");
  const [lectureTime, setLectureTime] = useState("9-10 AM");
  const [labStart, setLabStart] = useState("");
  const [labEnd, setLabEnd] = useState("");
  const [labStartAMPM, setLabStartAMPM] = useState("AM");
  const [labEndAMPM, setLabEndAMPM] = useState("AM");
  const [previousClasses, setPreviousClasses] = useState([]);

  // Teacher info
  const teacher = {
    name: "Mr. Shailesh Vishwakarma",
    email: "shailesh@gmail.com",
  };

 const navigate = useNavigate()
  function getPastLectures(){
    navigate('/teacher/past-lecture')
  }


  const startClass = (clsName, clsTime) => {
    setActiveClass({ name: clsName, time: clsTime });
    setAttendanceCount(0);
  };

  const endClass = () => {
    // Mock total students
    setAttendanceCount(34);
  };

  const downloadAttendance = () => {
    alert(`Downloading attendance PDF for ${activeClass.name} (${attendanceCount} students)`);
  };

  const handleCreateClass = (e) => {
    e.preventDefault();
    let timing =
      classType === "lecture"
        ? lectureTime
        : `${labStart} ${labStartAMPM} - ${labEnd} ${labEndAMPM}`;
    startClass(`New ${classType} class`, timing);
    setShowCreateForm(false);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Teacher Info */}
      <div className="mb-6 p-4 bg-white rounded shadow">
        <h1 className="text-2xl font-bold">{teacher.name}</h1>
        <p className="text-gray-600">Email: {teacher.email}</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${tab === "create" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          onClick={() =>{ setTab("create") 
            
        }
          }
        >
          Create Classes
        </button>
        <button
  className={`px-4 py-2 rounded ${tab === "past" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
  onClick={getPastLectures}
>
  Previous Classes
</button>
      </div>

      {/* Create Class */}
      {showCreateForm && tab === "create" && (
        <div className="bg-white p-6 rounded shadow max-w-md mx-auto">
          <h2 className="text-xl font-bold mb-4">Create Class</h2>
          <form onSubmit={handleCreateClass} className="flex flex-col gap-4">
            <label className="flex flex-col">
              Class Type:
              <select
                value={classType}
                onChange={(e) => setClassType(e.target.value)}
                className="border rounded p-2 mt-1"
              >
                <option value="lecture">Lecture</option>
                <option value="lab">Lab</option>
              </select>
            </label>

            {classType === "lecture" && (
              <label className="flex flex-col">
                Lecture Time:
                <select
                  value={lectureTime}
                  onChange={(e) => setLectureTime(e.target.value)}
                  className="border rounded p-2 mt-1"
                >
                  {[
                    "9-10 AM",
                    "10-11 AM",
                    "11-12 AM",
                    "12-1 PM",
                    "1-2 PM",
                    "2-3 PM",
                    "3-4 PM",
                    "4-5 PM",
                  ].map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </label>
            )}

            {classType === "lab" && (
              <div className="flex flex-col gap-2">
                <label>
                  Start Time:
                  <input
                    type="number"
                    min="1"
                    max="12"
                    value={labStart}
                    onChange={(e) => setLabStart(e.target.value)}
                    className="border rounded p-2 mt-1 w-full"
                    required
                  />
                  <select
                    value={labStartAMPM}
                    onChange={(e) => setLabStartAMPM(e.target.value)}
                    className="border rounded p-2 mt-1 ml-2"
                  >
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </label>
                <label>
                  End Time:
                  <input
                    type="number"
                    min="1"
                    max="12"
                    value={labEnd}
                    onChange={(e) => setLabEnd(e.target.value)}
                    className="border rounded p-2 mt-1 w-full"
                    required
                  />
                  <select
                    value={labEndAMPM}
                    onChange={(e) => setLabEndAMPM(e.target.value)}
                    className="border rounded p-2 mt-1 ml-2"
                  >
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </label>
              </div>
            )}

            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Start Class
            </button>
          </form>
        </div>
      )}

      {/* Active Class Display */}
      {activeClass && (
        <div className="mt-6 p-6 bg-white rounded shadow text-center max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-2">Active Class</h2>
          <p className="text-lg font-bold">{activeClass.name}</p>
          <p>Time: {activeClass.time}</p>
          {attendanceCount > 0 && <p>Total Students: {attendanceCount}</p>}
          <div className="flex gap-4 justify-center mt-4">
            {attendanceCount === 0 && (
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={endClass}
              >
                End Class
              </button>
            )}
            {attendanceCount > 0 && (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={downloadAttendance}
              >
                Download Attendance
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
