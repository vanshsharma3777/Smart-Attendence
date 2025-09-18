// import { useNavigate } from "react-router-dom";

// const TeacherSignup = () => {
    
//     const navigate= useNavigate()

//     function navToSignin(){
//         navigate('/teacher-login')
//     }
//   return (
//     <div className="  flex min-h-screen justify-center flex-col  items-center ">
//       <div className="flex flex-col gap-6 w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        
//         <div>
//           <div className="text-center text-2xl mb-2">Name:</div>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <div className="text-center text-2xl mb-2">Gmail:</div>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <div className="text-center text-2xl mb-2">Password:</div>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <div className="text-center text-2xl mb-2">Confirm Password:</div>
//           <input
//             type="password"
//             placeholder="Confirm your password"
//             className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//                             <button  className=" bg-green-500 border-gray-300 rounded-md p-1 w-full focus:outline-none focus:ring-2 focus:ring-green-400">
//                                 Confirm
//                             </button>
//                         </div>

//       </div>
//       <div className="pt-2">
//                  Have an account? <span className="underline cursor-pointer " onClick={navToSignin}>Log-in</span>
//             </div>
//     </div>
//   );
// };

// export default TeacherSignup;

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const TeacherSignup = () => {
  const navigate = useNavigate();

  function navToSignin() {
    navigate("/teacher/login");
  }

  return (
    <div className="flex min-h-screen justify-center items-center bg-gradient-to-br from-purple-300 via-purple-500 to-purple-700">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-6 w-full max-w-md p-8 bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl"
      >
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-white drop-shadow-md">
          Teacher Sign-up
        </h1>
        <p className="text-center text-white/80">
          Create your teacher account
        </p>

        {/* Name */}
        <div>
          <label className="text-lg font-semibold text-white">Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="mt-2 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-lg font-semibold text-white">Gmail:</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-2 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-lg font-semibold text-white">Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="mt-2 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-lg font-semibold text-white">
            Confirm Password:
          </label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="mt-2 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Confirm Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md w-full py-2 shadow-md transition focus:ring-2 focus:ring-green-400"
        >
          Confirm
        </motion.button>

        {/* Redirect to Login (inside card) */}
        <div className="text-center text-white text-lg">
          Already have an account?{" "}
          <span
            className="underline cursor-pointer hover:text-yellow-300"
            onClick={navToSignin}
          >
            Log-in
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default TeacherSignup;
