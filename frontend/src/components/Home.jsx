import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate()
    function getTeacher() {
        navigate('/teacher')
    }
    function getStudent() {
        navigate('/student')
    }

    return (
        <div className="h-screen  flex   justify-center text-cetner">
            <div>
                <div className=" flex justify-center text-3xl flex-1 pt-7 font-medium">
                    Welcome
                </div>
                <div className="text-xl pt-2">
                    <div>
                        To provide a personalized experience, please identify yourself:
                    </div>
                    <div className=" flex justify-around mt-[2rem]">
                        <button onClick={getTeacher} className=" bg-green-500 border p-2 border-transparent rounded-md">
                            Teacher
                        </button>
                        <button onClick={getStudent} className=" bg-green-500 border p-2 border-transparent rounded-md">
                            Student
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home