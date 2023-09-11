import React, { useEffect, useState } from 'react'
import { AiOutlineSearch} from "react-icons/ai";
const Ap = () => {
    const [city,setcity] = useState(null)
    const [search,setSearch] = useState("pune")
    
    const change = (e)=>
    {
        setcity(e.target.value)
    }
   const submit = ()=>
   {
   }
    useEffect(()=>
    {
        const fetchApi = async()=>
        {
           const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=33830f263ea8817719aef4311b7197df`)
           const responsedata = await response.json();
           console.log(responsedata);
           setcity(responsedata)
        }
        fetchApi()
        
    },[search])
    
    return (
        <>
            <div className='wetherConteiner'>
                <div className='innerContainer'>
                    <div className='innterInput'>
                        <input type="text" onChange={(e)=>
                        {
                            setSearch(e.target.value)
                        }} /><button type="submit" onClick={submit}><AiOutlineSearch/></button>
                    </div>
                    <div className='wetheroutuput'>
                    {
                       
                        (!city)?(<p>data not found</p>):(
                            
                          <div>
                          <p className='temp'>Temp :{city.main?.temp - 273}°C</p>
                          <p className='speed'>Wind speed :{city.wind?.speed}</p>
                          <p className='country'>Country :{city.sys?.country}</p>
                          <p className='city'>City :{city.name}</p> 
                          <br/>
                           </div>
                        )
                    }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Ap