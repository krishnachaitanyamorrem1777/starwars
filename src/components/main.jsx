import React, {useState,useEffect} from 'react'
import Temp from "../assets/template.jpg"
import Astro from "../assets/astronomy.jpg"
import './main.css'
import axios from 'axios'





const Main = () => {

  const [planet,setplanet]=useState([]);

  useEffect(()=>{
    axios.get("https://swapi.dev/api/planets?pageSize=1")
    .then((response) =>
      setplanet(response.data.results)
    );
  },[]);


  
      
  

  

  return (
    <>

      <div className="main" style={{ backgroundImage: `url(${Temp})`, width: "100%", height: "100%" }}>
        
        

            <div className="row my-3" style={{width:"100%"}}>
              <h1 className='t align-text-center'>The Planets of Star Wars</h1>
                {planet.map((val) => {
                  return(
                    <div className="col-5 hover-zoom" style={{color:"white"}}>
                      <div className="card-body">
                        <h5 className="card-title">{val.name}</h5>
                        <h6>Terrain : {val.terrain}</h6>
                        <h6>Climate : {val.climate}</h6>
                        <h6>Rotation : {val.rotation_period} Hrs</h6>
                        
                        
                      </div>
                    </div>
                  )
                })}
            </div>
       


      </div>

    </>
  )
}

export default Main
