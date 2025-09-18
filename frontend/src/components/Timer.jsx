// import React, { useState, useEffect } from "react";

// const Timer=()=> {
//   const [timeLeft, setTimeLeft] = useState(5);
//   const [timeOver , setTimeOver]= useState(false)

//   useEffect(() => {
//     if(timeLeft==0){
//         setTimeOver(true)
//     }   
//     if (timeLeft <= 0) return; 

//     const timer = setInterval(() => {
//       setTimeLeft((prev) => prev - 1);
//     }, 1000);
    
//     return () => clearInterval(timer);
//   }, [timeLeft]);


//   const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
//   const seconds = String(timeLeft % 60).padStart(2, "0");

//   return (
//     <div className="flex flex-col items-center p-[2rem] space-y-4">
//   {/* Timer */}
//   <div className="flex space-x-2 items-center">
//     <div className="text-3xl font-medium">Time Left:</div>
//     <div className="bg-purple-600 text-white rounded-lg px-4 py-2 text-xl font-bold">
//       {minutes}:{seconds}
//     </div>
//   </div>

//   {/* Time Over message */}
//   {timeOver && (
//     <div className="w-full max-w-sm py-1">
//       <div className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 p-[0.1rem] rounded-md">
//         <div className="bg-white rounded-lg p-2 text-center">
//           <h2 className="text-red-700 font-bold text-lg">Time Over</h2>
          
//         </div>
        
//       </div>
//       <div className="mt-3 text-2xl">
//         <h2>Total Students:</h2>
//       </div>
//       <div className="mt-3 text-2xl">
//        <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-[0.1rem] rounded-md">
//         <div className="bg-white rounded-lg p-2 text-center">
//           <button className="text-green-600 font-bold text-lg">Download attendance list</button>
          
//         </div>
        
//       </div>
//       </div>
//     </div>
//   )}
// </div>

//   );
// }

// export default Timer


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(5);
  const [timeOver, setTimeOver] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeOver(true);
    }
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-300 via-purple-500 to-purple-700">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6 p-8 bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl"
      >
        {/* Timer */}
        {!timeOver && (
          <>
            <h1 className="text-3xl font-bold text-white drop-shadow-lg">
              Attendance Session Active
            </h1>
            <div className="flex space-x-3 items-center">
              <div className="text-2xl font-medium text-white">Time Left:</div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="bg-purple-600 text-white rounded-lg px-6 py-3 text-2xl font-bold shadow-md"
              >
                {minutes}:{seconds}
              </motion.div>
            </div>
          </>
        )}

        {/* Time Over Section */}
        {timeOver && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full text-center"
          >
            <div className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 p-[0.15rem] rounded-md mb-6">
              <div className="bg-white rounded-lg p-4">
                <h2 className="text-red-700 font-bold text-2xl">Time Over</h2>
              </div>
            </div>

            <div className="text-2xl text-white mb-4 font-semibold">
              Total Students: <span className="text-yellow-300">42</span>
              {/* You can make this dynamic later */}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
            >
              Download Attendance List
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Timer;
