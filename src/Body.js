import React from 'react';


function Body(props){
    return(
    <p className="App-intro">
        <img src={props.img} className="Pretty-image" alt="pretty" />
    </p>
    )
}

export default Body;