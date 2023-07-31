import React, { useEffect, useState } from "react";

const Func=()=>{

    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("Delhi");
    const [temp,setTemp]=useState({})

    useEffect(()=>{
        const fetchApi = async ()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b6c7868d03bb76a5212c3309db109816&units=metric`;
            const response =await fetch(url);
            const jsonResponse=await response.json();
            // console.log(response);
            setCity(jsonResponse.name);
            setTemp(jsonResponse.main);
        }

        fetchApi();
    },[search]);

    return(
        <>
        <div className="input">
            <input 
            type="search" 
            className="inputField"
            value={search}
            onChange={(event)=>{setSearch(event.target.value)}}
            />
        </div>

{/* ternary operator */}
        {!city?(
        <p className="error">No data Found</p>)
        :(
          <div>
        <div className="info">
        <h2 className="location">
        <i className="fa-solid fa-street-view pad"></i>
        {city}
        </h2>
        <h1 className="temp">
                {temp.temp}°C
        </h1>
        <h3 className="min-max">
            Min : {temp.temp_min}°C | Max : {temp.temp_max}°C
        </h3>
    </div>
            {/* <div className="info-wave">
    <div className="wave -one"></div>
    <div className="wave -two"></div>
    <div className="wave -three"></div></div> */}
    </div>  
        )
    }


        </>
    )
};

export default Func;