import React from 'react'
import Option_box from './Option_box'

function Options(props){
    return(
        <div className="options-container" >
            <h2>Options</h2>
          {props.options
          .map((option,index) => <Option_box key={index} option ={option} dislikeButton = {props.onDislike}
          likeButton={props.onLike} />)}
        </div>
    )
}
export default Options;