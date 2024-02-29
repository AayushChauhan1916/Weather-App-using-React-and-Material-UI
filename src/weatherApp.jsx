import InfoBox from "./infoBox";
import SearchBox from "./searchbox";
import { useState } from "react";

export default function weatherApp(){
    let [weatherInfo,setweatherInfo] = useState({
        cityName: "Chandigarh",
        description : "overcast clouds",
        feels_like: 23.45,
        humidity: 9,
        max_temp: 24.69,
        min_temp: 24.69,
        temp: 24.69
    })
    function updateInfo(info){
        setweatherInfo(info)
    }
    return (
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}