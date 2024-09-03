import React from 'react'
import "./characters.css"
import Maint from "../assets/main2.jpg"

import images from "../data.json"


const Characters = () => {
  return (
    <div className='char' style={{backgroundImage: `url(${Maint})`,width:"100%"}}>
      <div className="row my-3" style={{width:"100%"}}>
              <h1 className='t align-text-center'>The Rebels of Star Wars</h1>
                {images && images.map((item) => 
                  <div className="col-5 hover-zoom" style={{width:"320px", color: "white" }}>
                    <div className="card-body" key={item.id}>
                      <img class="card-img-top" src={item.img} alt="Card image cap"/>
                      <h5 className="card-title">{item.name}</h5>
                      


                    </div>
                  </div>
              )} 
              
            </div>
    </div>
  )
}

export default Characters