import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import StudentDashboard from "./components/StudentDashboard";
import TeacherDashboard from "./components/TeacherDashboard";
import Teacher from "./components/Teacher";
import Student from "./components/Student";
import Timer from "./components/Timer";
import TeacherSignin from "./components/TeacherSignin";
import TeacherPastLectures from "./components/TeacherPastLectures";
import StudentPastLectures from "./components/StudentPastLectures";
import TeacherSignup from "./components/TeacherSignup";
import StudentSignin from "./components/StudentSignin";
import StudentSignup from "./components/StudentSignup";

function App() {
  return (
    <div className="h-screen bg-gradient-to-t from-blue-300 to-blue-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard  user={{ role: "teacher" }} />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/past-lecture" element={<TeacherPastLectures />} />
          <Route path="/student/past-lecture" element={<StudentPastLectures />} />
          <Route path="/time" element={<Timer />} />
          <Route path="/teacher/login" element={<TeacherSignin />} />
          <Route path="/teacher/signup" element={<TeacherSignup />} />
          <Route path="/student/login" element={<StudentSignin />} />
          <Route path="/student/signup" element={<StudentSignup />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
