// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// const Home = () => {
//     const navigate = useNavigate()
//     function getTeacher() {
//         navigate('/teacher')
//     }
//     function getStudent() {
//         navigate('/student')
//     }

//     return (
//         <div className="h-screen  flex   justify-center text-cetner">
//             <div>
//                 <div className=" flex justify-center text-3xl flex-1 pt-7 font-medium">
//                     Welcome
//                 </div>
//                 <div className="text-xl pt-2">
//                     <div>
//                         To provide a personalized experience, please identify yourself:
//                     </div>
//                     <div className=" flex justify-around mt-[2rem]">
//                         <button onClick={getTeacher} className=" bg-green-500 border p-2 border-transparent rounded-md">
//                             Teacher
//                         </button>
//                         <button onClick={getStudent} className=" bg-green-500 border p-2 border-transparent rounded-md">
//                             Student
//                         </button>
//                     </div>
//                 </div>
//             </div>


//         </div>
//     )
// }

// export default Home

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  function onClickStudent(){
        navigate('/student')
  }
  function onClickTeacher(){
        navigate('/teacher')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-400 to-blue-700">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center p-8 bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl w-[90%] max-w-md"
      >
        <h1 className="text-4xl font-bold text-white drop-shadow-md">Welcome</h1>
        <p className="text-lg text-gray-100 mt-3">
          To provide a personalized experience, please identify yourself:
        </p>

        <div className="flex justify-around mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/teacher")}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-xl shadow-lg"
          >
            Teacher
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/student")}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-xl shadow-lg"
          >
            Student
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
