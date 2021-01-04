const req = require("postman-request")
const geocode = (address,callback) =>{
    const mapUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/'+decodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibmlwdW43NSIsImEiOiJja2o2dXluMmU0ajBtMnluNDk2bmFmMzJqIn0.BzUnsZerSqdL6w_ap1T_ng'
    req({url:mapUrl,json:true},(error,response)=>{
        if(error){
            callback("Weather service not availabale",undefined)
        }
        else if(response.body.features.length === 0){
            callback("Try another search!",undefined)
        }
        else{
            const long = response.body.features[0].center[0];
            const lat = response.body.features[1].center[1]
            callback(undefined,{long,lat})
        }
    })}
module.exports = geocode