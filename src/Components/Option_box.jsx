import React from 'react';

function Option_box(props){
    return(
        <div className="option-box-container">
                <button className="dislike-button" onClick={()=>{
                    props.dislikeButton(props.option)
                }}>Dislike</button>
            <div className="info-div">
                <img src={props.option.imgLink} alt={props.option.description}/>
                <h6>{props.option.name}</h6>
                <p>{props.option.description}</p>
            </div>
                <button className="like-button" onClick={()=>
                props.likeButton(props.option)}>Like</button>
        </div>
    )
}
export default Option_box;