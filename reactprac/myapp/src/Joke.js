import React from "react";

function Joke(props){
    return(
        <div>
        <h3 style={{display:!props.question?"none":"block"}}>Question:{props.question}</h3>
        <h3>Ans:{props.punchline}</h3><hr/>
        </div>
        
    )
}

export default Joke ;