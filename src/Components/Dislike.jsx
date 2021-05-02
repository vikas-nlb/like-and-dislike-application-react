import React from 'react'
import Dislike_box from './Dislike_box'

function Dislike(props){
    if(props.dislikes.length === 0){
        return(
            <div className="dislike-container" >
                <h2>Dislike</h2>
                <h2>No dislikes yet</h2>
            </div>
        ) 
    }
 return(
     <div className="dislike-container" >
         <h2>Dislike</h2>
         {props.dislikes
         .map((dislike,index) =>  <Dislike_box key={index} dislike={dislike} /> )}
     </div>
 )   
}
export default Dislike;