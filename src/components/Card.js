import React from 'react'


function Card({title, imageSource, descripcionCard}) {
  return (
    
    <div className="card">
      <img src={imageSource} alt=""/>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{descripcionCard}</p>
        </div>
    </div>
  )
}

export default Card
