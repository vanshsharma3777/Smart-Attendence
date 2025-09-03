import React ,  {useState} from "react"
import axios from "axios";
const Location = () => {
    const [location , setLocation] = useState(null)
    const [error , setError] = useState(null)
    const [result , setResult] = useState(null)

    const getLocation = ()=>{
        if(!navigator.geolocation){
            setError('Geolocation not supported by browser')
            return
        }
      
    
    navigator.geolocation.getCurrentPosition(
        async (position)=>{
            const userLocation  ={
                latitude : position.coords.latitude,
                longitude : position.coords.longitude
            }

            setLocation(userLocation)
            setError(null)
            try{
                const res = await axios.post("http://localhost:7000/location", {
                    lat:userLocation.latitude,
                    lon:userLocation.longitude
                })
                console.log(userLocation.latitude)
                console.log(userLocation.longitude)
                console.log( res.data)
                setResult(res.data)
            }catch(err){
                console.log('Error :' , err.message)
                setError( setError("Error connecting to backend"))

            }
        },
        (err)=>{
            setError(err.message)
        }, 
        {enableHighAccuracy : true}
      
    )
}
    return (
        <div className="h-screen  flex   justify-center text-cetner">
            <div className=" ">
                <div className="flex justify-center text-3xl flex-1 pt-7 font-medium">
                Check Location..!!
            </div>
            <div className="p-5 text-md">
                <div className="flex flex-col gap-1    ">
                    Name:
                    <input type="text" placeholder="Enter your name" className="rounded-md text-sm " />
                </div>
                <div className="py-3 flex flex-col gap-1">
                    University Roll No:
                    <input type="text" placeholder="Enter University Roll No " className="rounded-md text-sm " />
                </div> 
                <button onClick={getLocation} className="w-full bg-green-500 border border-transparent rounded-md">
                    Submit
                </button>
                
                { location && result && (
                    <div className="flex flex-col  py-3 gap-1">
                        <div>
                            Latitude:{location.latitude}
                        </div>
                        <div>
                            Longitude:{location.longitude}
                        </div>
                        
                        <div>
                            Distance:{result.distance.toFixed(3)} km
                        </div>
                        <div>
                            In Range:{result.isInRange?"Yes" : "No"}
                        </div>
                    </div>  
                    
                )}
                {error && (
                    <div className="bg-red-200">
                        {error}
                    </div>
                )}

            </div>
            </div>

        </div>
    )
}

export default Location 