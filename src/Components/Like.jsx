import React from 'react'
import Like_box from './Like_box'

function Like(props) {
    if(props.likes.length == 0){
        return(
            <div className="like-container">
            <h2>Like</h2>
            <h2>No likes yet</h2>
        </div>  
        )
    }
    return (
        <div className="like-container">
            <h2>Like</h2>
            {props.likes
            .map((like,index) => <Like_box key={index} like={like} />)}

        </div>
    )
}
export default Like;