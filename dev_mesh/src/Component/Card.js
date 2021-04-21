import React from 'react'
import "./Card.css"


function Card({name,about,job}) {
    
        
    return (
        <div className="Card">
        <div className="upper-container">
        <div className="image-container">
            <img src="data:image/jpeg;base64,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" alt="" height="100px" width="100px"/>
        </div>
        </div>
        <div className="lower-container">
        <h3> { name } </h3>
        <h4> { job } </h4>
        <p> { about } </p>
        <button>Visit Profile</button>

        </div>
            
        </div>
    )
}

export default Card
