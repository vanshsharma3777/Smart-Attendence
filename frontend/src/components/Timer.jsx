import React, { useState, useEffect } from "react";

const Timer=()=> {
  const [timeLeft, setTimeLeft] = useState(5);
  const [timeOver , setTimeOver]= useState(false)

  useEffect(() => {
    if(timeLeft==0){
        setTimeOver(true)
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
    <div className="flex flex-col items-center p-[2rem] space-y-4">
  {/* Timer */}
  <div className="flex space-x-2 items-center">
    <div className="text-3xl font-medium">Time Left:</div>
    <div className="bg-purple-600 text-white rounded-lg px-4 py-2 text-xl font-bold">
      {minutes}:{seconds}
    </div>
  </div>

  {/* Time Over message */}
  {timeOver && (
    <div className="w-full max-w-sm py-1">
      <div className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 p-[0.1rem] rounded-md">
        <div className="bg-white rounded-lg p-2 text-center">
          <h2 className="text-red-700 font-bold text-lg">Time Over</h2>
          
        </div>
        
      </div>
      <div className="mt-3 text-2xl">
        <h2>Total Students:</h2>
      </div>
      <div className="mt-3 text-2xl">
       <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-[0.1rem] rounded-md">
        <div className="bg-white rounded-lg p-2 text-center">
          <button className="text-green-600 font-bold text-lg">Download attendance list</button>
          
        </div>
        
      </div>
      </div>
    </div>
  )}
</div>

  );
}

export default Timer
