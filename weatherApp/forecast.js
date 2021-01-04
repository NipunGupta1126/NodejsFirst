const req = require('postman-request')

const forecast = (latitude,longitude,callback) =>{
    const foreUrl ='http://api.weatherstack.com/current?access_key=99e7f49270c22e620262063f2b7f32de&query='+latitude+','+longitude

    req({url:foreUrl,json:true},(error,response)=>{
        if(error){

            callback('Weather service not available',undefined)
        }
        else if(response.body.error){
            callback("Try another location",undefined)
        }
        else{

            callback(undefined,{
                temp: response.body.current.temperature,
                rain: response.body.current.precip
            })
        }
    })
}


module.exports = forecast