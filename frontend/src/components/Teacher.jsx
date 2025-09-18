// import { useNavigate } from "react-router-dom";

// const Teacher = () => {
//     const navigate= useNavigate()
//     function onclickHandler(){
//         navigate('/time')
//     }
//     const slots = [];
//     for (let i = 9; i < 17; i++) {
//         slots.push(`${i} to ${i + 1}`);
//     }
//     const handleChange = (e) => {
//         console.log("Selected time slot:", e.target.value);
//     };
//     return (
//         <div className="h-screen  flex   justify-center text-cetner">
//             <div className="">
//                 <div className=" flex  justify-center text-3xl flex-1 pt-7 font-medium">
//                     Hello Anurag Sir
//                 </div>
//                 <div className="text-xl text-center pt-2">
//                     <div>
//                         Create new attendance session
//                     </div>  
//                     <div className=" mt-[2rem]">
//                         <div className="flex flex-col gap-1    ">
//                             <div className="text-center text-2xl">Subject Code:</div>
//                     <input type="text" placeholder="Enter your name" className="border border-gray-300 rounded-md p-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                           </div>
//                         <div className="py-6 flex flex-col  gap-1">
//                             <div className="text-2xl">
//                                 Select a Time Slot:
//                             </div>
//                             <select
//                                 onChange={handleChange}
//                                 className="border border-gray-300 rounded-md p-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             >
//                                 <option value="">-- Choose a time slot --</option>
//                                 {slots.map((slot, index) => (
//                                     <option key={index} value={slot}>
//                                         {slot}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div>
//                             <button onClick={onclickHandler} className=" bg-green-500 border-gray-300 rounded-md p-1 w-full focus:outline-none focus:ring-2 focus:ring-green-400">
//                                 Confirm
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </div>
//     )
// }
// export default Teacher


import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Teacher = () => {
  const navigate = useNavigate();

  function onclickHandler() {
    navigate("/time");
  }

  const slots = [];
  for (let i = 9; i < 17; i++) {
    slots.push(`${i}:00 - ${i + 1}:00`);
  }

  const handleChange = (e) => {
    console.log("Selected time slot:", e.target.value);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-200 via-blue-400 to-blue-700">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg p-8 bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl"
      >
        {/* Greeting */}
        <h1 className="text-3xl font-bold text-center text-white drop-shadow-md">
          Hello Anurag Sir 👋
        </h1>
        <p className="text-center text-lg text-white/90 mt-2">
          Create a new attendance session
        </p>

        {/* Form */}
        <div className="mt-8 flex flex-col gap-6">
          {/* Subject Code */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold text-white">Subject Code</label>
            <input
              type="text"
              placeholder="Enter subject code"
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Time Slot */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold text-white">Select a Time Slot</label>
            <select
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Choose a time slot --</option>
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          {/* Confirm Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onclickHandler}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md w-full py-2 shadow-md transition focus:ring-2 focus:ring-green-400"
          >
            Confirm
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Teacher;
