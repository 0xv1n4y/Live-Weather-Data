import { useState,useEffect } from 'react';
import axios from 'axios';
import Header from './pages/Navbar';
import Body from './pages/Body';



function App() {
  const [location,setLocation]=useState("")
  const [weatherData,setWeatherData]=useState(false)

  const API_KEY = "0306f3e1767baa02731f4d5bb9b8cff4";
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  //Fetch The weather Data in OpenweathermapAPI

  const fetchWeatherData=async()=>{
    try{

      const response=await axios.get(API_URL,{params:{q:location,appid:API_KEY,units:"metric"}})
      console.log(response.data)
      setWeatherData(response.data)


    }catch(err){
      console.error("Error to Fetching Weather data",err)
    }
  
  }

  useEffect(()=>{
    if(location){
      fetchWeatherData()
    }
  },[location])


 const handlecheck=(e)=>{
  setLocation(e.target.value)
 }
 // To Reload the window
 const reload=()=>{
  window.location.reload()
 }
  return (

      <div >

          <Header reload={reload} location={location} handlecheck={handlecheck}/>
          
          <Body weatherData={weatherData}/>
        
      </div>
  );
}

export default App;
