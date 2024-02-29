import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default  function infoBox({info}){
    const hot_url = "https://images.unsplash.com/12/sun-trees.jpg?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const cold_url = "https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=1816&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const rain_url = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return(
        <div style={{marginTop:'1.5rem'}}>
            <Card sx={{ maxWidth: 375 }}>
                <CardMedia
                    sx={{ height: 170 }}
                    image={info.humidity >=80 ? rain_url : (info.temp>15) ? hot_url : cold_url}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.cityName } {info.humidity >=80 ? <ThunderstormIcon/> : (info.temp>15) ? <WbSunnyIcon/> : <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <div>Temp : {info.temp}&deg;C</div>
                        <div>Min_Temp : {info.min_temp}&deg;C</div>
                        <div>Max_Temp : {info.max_temp}&deg;C</div>
                        <div>humidity : {info.humidity}</div>
                        <div>Description: The weather can be described as <b>{info.description}</b> and feels like as <i>{info.feels_like}&deg;C</i></div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}