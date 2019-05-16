import React from 'react';


function MyApp(){
    const date = new Date(2019,6,31,20);;
    const hours = date.getHours();
    let timeofday;
    const styles = {backgroundColor:"black"}

    if(hours < 12){
        timeofday = "Morning";
        styles.color = "white";
    }else if(hours>=12 && hours<=17){
            timeofday  = "Afternoon";
            styles.color = "blue"
    }else if(hours>17 && hours<=19){
        timeofday = "Evening";
        styles.color = "crimson";
    }else{
        timeofday = "Night";
        styles.color = "grey";
    }
     
    return(
        <div>
            <h1 style={styles}>Hello !!   Good {timeofday} !!</h1>
        </div>

    );
}

export default MyApp;
