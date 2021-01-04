const geocode = require('./geocode.js')
const forecast = require('./forecast.js')

    geocode("Hisar,Haryana",(error,response)=>{
        if(error){}
        else{
            forecast(response.lat,response.long,(error,response)=>{
                console.log(error);
                console.log(response);
            })
        }
    })
    
    // forecast(29.167,75.717,(error,response)=>{
    //     console.log(error);
    //     console.log(response);
    // })