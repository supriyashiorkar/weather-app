import axios from "axios";
import { useEffect, useState } from "react";

function Weather2() {
    const cityArray=["nagpur","pune","Mumbai","hyderabad","nasik","delhi"]
     const [citydata, setcityData] = useState([])
      useEffect(() => {
       let citydata=[];
        cityArray.map((cityname)=>{
         console.log("call API")
          axios.get("https://api.weatherapi.com/v1/current.json?key=4d481c5c275c489598c165306221111&q="+cityname+"&aqi=no").then((response) => {
            citydata.push(response.data)
            setcityData([...citydata])
           })
      
        
          }) 
        
      }, [])
return (
    <div className="App">
       <h1 style={{color:"red"}}>Grid Box</h1>
       <div className="grid"> 
 {
    citydata.map((val,i)=>{
        return <div>
<div className='box4'>
        {val.current.temp_c}<sup>0</sup>c <br/>
        {val.location.name} 
        </div>
        </div>
    })
 }


</div>
</div>
  )
}
export default Weather2;