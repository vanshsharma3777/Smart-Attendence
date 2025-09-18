
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
// const normal_url = "http://localhost:7000/location";

// const Student = () => {
//     const [location, setLocation] = useState(null)
//     const [error, setError] = useState(null)
//     const [result, setResult] = useState(null)

//     const [timeLeft, setTimeLeft] = useState(15);
//     const [timeOver, setTimeOver] = useState(false)

//     useEffect(() => {
//         if (timeLeft == 0) {
//             setTimeOver(true)
//         }
//         if (timeLeft <= 0) return;

//         const timer = setInterval(() => {
//             setTimeLeft((prev) => prev - 1);
//         }, 1000);

//         return () => clearInterval(timer);
//     }, [timeLeft]);


//     const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
//     const seconds = String(timeLeft % 60).padStart(2, "0");

//     const getLocation = () => {
//         if (!navigator.geolocation) {
//             setError('Geolocation not supported by browser')
//             return
//         }


//         navigator.geolocation.getCurrentPosition(
//             async (position) => {
//                 const userLocation = {
//                     latitude: position.coords.latitude,
//                     longitude: position.coords.longitude
//                 }

//                 setLocation(userLocation)
//                 console.log(location.latitude)
//                 console.log(location.longitude)
//                 setError(null)
//                 try {
//                     const res = await axios.post(`http://localhost:7000/location`, {
//                         lat: userLocation.latitude,
//                         lon: userLocation.longitude
//                     })
//                     console.log(userLocation.latitude)
//                     console.log(userLocation.longitude)
//                     console.log(res.data)
//                     setResult(res.data)
//                 } catch (err) {
//                     console.log('Error :', err.message)
//                     setError(setError("Error connecting to backend"))

//                 }
//             },
//             (err) => {
//                 setError(err.message)
//             },
//             { enableHighAccuracy: true }

//         )
//     }
//     return (
//         <div className="h-screen  flex   justify-center text-cetner">
//             <div className=" ">
//                 <div className="flex justify-center text-3xl flex-1 pt-7 font-medium">
//                     Mark your attendance
//                 </div>
//                 <div className="p-5 text-md">
//                     <div className="flex flex-col gap-1    ">
//                         <div className="text-center text-2xl">Class Id:</div>
//                         <input type="text" placeholder="Enter class Id" className="border border-gray-300 rounded-md p-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                     </div>
//                     <button onClick={getLocation} className="bg-green-500 border-gray-300 rounded-md  mt-4   p-1 w-full focus:outline-none focus:ring-2 focus:ring-green-400">
//                         Submit
//                     </button>

//                     <div className="text-center text-xl  ">
//                         {location && result && (
//                             <div className="flex flex-col  py-4 gap-1">
//                                 <div>
//                                     Latitude:{location.latitude}
//                                 </div>
//                                 <div>
//                                     Longitude:{location.longitude}
//                                 </div>

//                                 <div>
//                                     Distance:{result.distance.toFixed(3)} km
//                                 </div>
//                                 <div>
//                                     In Range:{result.isInRange ? "Yes" : "No"}
//                                 </div>
//                                 {result.isInRange && (
//                                     <div className="bg-orange-100 border-gray-300 rounded-md p-[0.1rem] w-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 ">
//                                         <div className="bg-white rounded-lg p-1">
//                                             <h2 className="text-purple-700 font-bold text-lg">
//                                                 Attendence Marked..!!
//                                             </h2>
//                                         </div>
//                                     </div>
//                                 )}
//                                 {!result.isInRange && (
//                                     <div className="bg-orange-100 border-gray-300 rounded-md p-[0.1rem] w-full bg-gradient-to-r from-red-400 via-red-500 to-red-600 ">
//                                         <div className="bg-white rounded-lg p-1">
//                                             <h2 className="text-red-700 font-bold text-lg">
//                                                 Attendence Not Marked..!!
//                                             </h2>
//                                         </div>
//                                     </div>
//                                 )}
//                                 <div className="flex flex-col items-center p-[2rem] space-y-4">
//                                     {/* Timer */}
//                                     <div className="flex space-x-2 items-center">
//                                         <div className="text-2xl font-medium">Time Left:</div>
//                                         <div className="bg-purple-600 text-white rounded-lg px-4 py-2 text-xl font-bold">
//                                             {minutes}:{seconds}
//                                         </div>
//                                     </div>

//                                     {/* Time Over message */}
//                                     {timeOver && (
//                                         <div className="w-full max-w-sm py-1">
//                                             <div className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 p-[0.1rem] rounded-md">
//                                                 <div className="bg-white rounded-lg p-2 text-center">
//                                                     <h2 className="text-red-700 font-bold text-lg">Time Over</h2>

//                                                 </div>

//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>


//                             </div>

//                         )}
//                         {error && (
//                             <div className="bg-red-200">
//                                 {error}
//                             </div>
//                         )}
//                     </div>


//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Student


import axios from "axios";
import React, { useState, useEffect } from "react";

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:7000";

const Student = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const [timeLeft, setTimeLeft] = useState(15);
  const [timeOver, setTimeOver] = useState(false);

  // Countdown timer
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

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported by browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const userLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        setLocation(userLocation);
        setError(null);

        try {
          const res = await axios.post(`${VITE_BACKEND_URL}/location`, {
            lat: userLocation.latitude,
            lon: userLocation.longitude,
          });

          setResult(res.data);
        } catch (err) {
          console.error("Error:", err.message);
          setError("Error connecting to backend");
        }
      },
      (err) => {
        setError(err.message);
      },
      { enableHighAccuracy: true }
    );
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-400 to-blue-700">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-6 w-[90%] max-w-lg">
        <h1 className="flex justify-center text-3xl font-bold text-white drop-shadow-md mb-6">
          Mark your Attendance
        </h1>

        <div className="space-y-4">
          {/* Class Id Input */}
          <div className="flex flex-col gap-2">
            <label className="text-center text-xl font-semibold text-white">
              Class Id:
            </label>
            <input
              type="text"
              placeholder="Enter class Id"
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={getLocation}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md w-full py-2 shadow-md transition transform hover:scale-105 focus:ring-2 focus:ring-green-400"
          >
            Submit
          </button>

          {/* Result Section */}
          <div className="text-center text-lg font-medium mt-4">
            {location && result && (
              <div className="flex flex-col gap-2 py-4">
                <div>Latitude: {location.latitude}</div>
                <div>Longitude: {location.longitude}</div>
                <div>Distance: {result.distance.toFixed(3)} km</div>
                <div>
                  In Range:{" "}
                  <span
                    className={`font-bold ${
                      result.isInRange ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {result.isInRange ? "Yes" : "No"}
                  </span>
                </div>

                {/* Attendance Status */}
                {result.isInRange ? (
                  <div className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 rounded-lg p-1">
                    <div className="bg-white rounded-lg p-2">
                      <h2 className="text-purple-700 font-bold text-lg">
                        Attendance Marked ✅
                      </h2>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 rounded-lg p-1">
                    <div className="bg-white rounded-lg p-2">
                      <h2 className="text-red-700 font-bold text-lg">
                        Attendance Not Marked ❌
                      </h2>
                    </div>
                  </div>
                )}

                {/* Timer */}
                <div className="flex flex-col items-center space-y-3 mt-6">
                  <div className="flex space-x-2 items-center">
                    <div className="text-2xl font-medium text-white drop-shadow-sm">
                      Time Left:
                    </div>
                    <div className="bg-purple-600 text-white rounded-lg px-4 py-2 text-xl font-bold shadow-md">
                      {minutes}:{seconds}
                    </div>
                  </div>

                  {/* Time Over Message */}
                  {timeOver && (
                    <div className="w-full max-w-sm">
                      <div className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 p-[0.1rem] rounded-md">
                        <div className="bg-white rounded-lg p-2 text-center">
                          <h2 className="text-red-700 font-bold text-lg">
                            ⏰ Time Over
                          </h2>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Error Section */}
            {error && (
              <div className="mt-4 bg-red-100 text-red-700 font-semibold p-2 rounded-md">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;

