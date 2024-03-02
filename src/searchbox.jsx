import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useState } from 'react';

export default function searchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,seterror] = useState(false);

    let handleChange = (event)=>{
        setCity(event.target.value)
    }
    const Url = "https://api.openweathermap.org/data/2.5/weather"
    const api = "6c94b6b2846a75fd3c7ce0d1d4fe77e3"
    const fetchData = async () => {
        try{
            let response = await fetch(`${Url}?q=${city}&appid=${api}&units=metric`)
            let responseJSON = await response.json()
            const weatherInfo = {
                temp : responseJSON.main.temp,
                min_temp : responseJSON.main.temp_min,
                max_temp : responseJSON.main.temp_max,
                humidity : responseJSON.main.humidity,
                feels_like : responseJSON.main.feels_like,
                description : responseJSON.weather[0].description,
                cityName : responseJSON.name
            }
            return weatherInfo;
        }catch(err){
            throw err
        }
    }

    const handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            setCity("")
            let info = await fetchData()
            updateInfo(info)
            seterror(false)
        }catch(err){
            seterror(true)
        }  
    }    
    return (
        <div>
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" value={city} label="City Name" variant="outlined" onChange={handleChange} required />
                <br/><br />
                <Button variant="contained" endIcon={<SendIcon />} type="submit">
                Search
                </Button>
                {error && <Alert style={{marginTop:'2rem'}}severity="error">No such location in our API</Alert>}
            </form>
        </div>
    )
}