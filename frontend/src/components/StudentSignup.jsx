// import { useNavigate } from "react-router-dom";
// import StudentSignin from "./StudentSignin";

// const StudentSignup = () => {
    
//     const navigate= useNavigate()

//     function navToSignin(){
//         navigate('/student-login')
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

// export default StudentSignup;


import { useNavigate } from "react-router-dom";

const StudentSignup = () => {
  const navigate = useNavigate();

  function navToSignin() {
    navigate("/student/login");
  }

  return (
    <div className="flex min-h-screen justify-center items-center bg-gradient-to-br from-purple-200 via-purple-400 to-purple-700">
      {/* Signup Card */}
      <div className="flex flex-col gap-6 w-full max-w-md p-8 bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl">
        {/* Heading */}
        <h1 className="text-center text-3xl font-bold text-white drop-shadow-md">
          Student Sign Up
        </h1>

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold text-white">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold text-white">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold text-white">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold text-white">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Confirm Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md w-full py-2 shadow-md transition transform hover:scale-105 focus:ring-2 focus:ring-green-400">
          Confirm
        </button>

        {/* Redirect to Login (inside the card) */}
        <div className="text-center text-white text-lg">
          Already have an account?{" "}
          <span
            className="underline cursor-pointer font-semibold hover:text-yellow-300"
            onClick={navToSignin}
          >
            Log in
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentSignup;

