import React from 'react'

function Like_box(props){
    return(
        <div className="like-box-container">
            <img src={props.like.imgLink} alt={props.like.description}/>
            <h5>{props.like.name}</h5>
        </div>
    )
}

export default Like_box;