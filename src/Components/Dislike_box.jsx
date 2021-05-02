import React from 'react'

function Dislike_box(props){
    return(
        <div className="dislike-box-container">
            <img src={props.dislike.imgLink} alt={props.dislike.description}/>
            <h5>{props.dislike.name}</h5>
        </div>
    )
}

export default Dislike_box;