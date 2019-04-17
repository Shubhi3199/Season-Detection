import './SeasonDisplay.css'
import React from 'react';


const getSeason=(lat,month)=>{
    if (month>2 && month<9){
        if(lat>0){
            return "summers";
        } else return "winters";
    }

    else {
        if(lat>0) return "winters";
        else return "summers";
    }

};

const SeasonDisplay=(props)=>{

    const season=getSeason(props.lat,new Date().getMonth());
    console.log(season);
    console.log(props.lat);
    /*const iconName=season==="summers"?"sun":"snowflake";*/
    var iconName;
    
   if(season==="summers"){
    iconName="sun";
    return (
        <div>
            
            <div className="season-display-s">
            <div className="icon-left">
            <i className={` massive ${iconName} icon`} /></div>
                <h1 className="text-color">It's time to hit the Beach!!</h1>
                <div className="icon-right">   
            <i className={`massive ${iconName} icon`} /></div>
            </div> 
        </div>
    );  
   }else iconName="snowflake"; 
       return(
        <div>
             
            <div className="season-display-w">
            <div className="icon-left">
            <i className={` massive ${iconName} icon`} /></div>
                <h1 className="text-color"><em>Burr,it's Chilly!!</em></h1>
                <div className="icon-right">
            <i className={` massive ${iconName} icon`} /></div>
            </div>  
        </div>

   );
};

export default  SeasonDisplay;