// import { useNavigate } from "react-router-dom";
// const StudentSignin = () => {

//     const navigate= useNavigate()

//     function navToSignup(){
//         navigate('/student-login')
//     }
//     return (
//         <div className="  flex min-h-screen justify-center flex-col items-center ">
//             <div className="flex flex-col gap-6 w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
//                 <div>
//                     <div className="text-center text-2xl mb-2">Gmail:</div>
//                     <input
//                         type="email"
//                         placeholder="Enter your email"
//                         className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>

//                 <div>
//                     <div className="text-center text-2xl mb-2">Password:</div>
//                     <input
//                         type="password"
//                         placeholder="Enter your password"
//                         className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>

//                 <div>
//                     <button className=" bg-green-500 border-gray-300 rounded-md p-1 w-full focus:outline-none focus:ring-2 focus:ring-green-400">
//                         Confirm
//                     </button>
//                 </div>
//             </div>
//             <div className="pt-2">
//                 Don't have an account? <span className="underline cursor-pointer " onClick={navToSignup}>Sign-up</span>
//             </div>
            
//         </div>
//     );
// };

// export default StudentSignin;


import { useNavigate } from "react-router-dom";

const StudentSignin = () => {
  const navigate = useNavigate();

  function navToSignup() {
    navigate("/student/signup");
  }

  return (
    <div className="flex min-h-screen justify-center items-center bg-gradient-to-br from-purple-200 via-purple-400 to-purple-700">
  <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl shadow-lg p-8 w-[350px]">
    <h2 className="text-2xl font-bold text-center text-white mb-6">Student Login</h2>
    
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <input
      type="password"
      placeholder="Enter your password"
      className="w-full px-4 py-2 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    
    <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition duration-200">
      Confirm
    </button>

    <p className="text-center text-white text-lg">
      Don’t have an account?{" "}
      <a onClick={navToSignup} className="underline cursor-pointer font-semibold hover:text-yellow-300">
        Sign up
      </a>
    </p>
  </div>
</div>
  )
};

export default StudentSignin;
