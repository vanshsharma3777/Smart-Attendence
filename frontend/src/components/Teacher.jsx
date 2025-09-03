import { useNavigate } from "react-router-dom";

const Teacher = () => {
    const navigate= useNavigate()
    function onclickHandler(){
        navigate('/time')
    }
    const slots = [];
    for (let i = 9; i < 17; i++) {
        slots.push(`${i} to ${i + 1}`);
    }
    const handleChange = (e) => {
        console.log("Selected time slot:", e.target.value);
    };
    return (
        <div className="h-screen  flex   justify-center text-cetner">
            <div className="">
                <div className=" flex  justify-center text-3xl flex-1 pt-7 font-medium">
                    Hello Anurag Sir
                </div>
                <div className="text-xl text-center pt-2">
                    <div>
                        Create new attendance session
                    </div>  
                    <div className=" mt-[2rem]">
                        <div className="flex flex-col gap-1    ">
                            <div className="text-center text-2xl">Subject Code:</div>
                    <input type="text" placeholder="Enter your name" className="border border-gray-300 rounded-md p-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <label className="text-2xl pt-3" >Date:</label>
                            <input type="date" placeholder="Enter your name" className="border border-gray-300 rounded-md p-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="py-6 flex flex-col  gap-1">
                            <div className="text-2xl">
                                Select a Time Slot:
                            </div>
                            <select
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md p-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">-- Choose a time slot --</option>
                                {slots.map((slot, index) => (
                                    <option key={index} value={slot}>
                                        {slot}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <button onClick={onclickHandler} className=" bg-green-500 border-gray-300 rounded-md p-1 w-full focus:outline-none focus:ring-2 focus:ring-green-400">
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Teacher