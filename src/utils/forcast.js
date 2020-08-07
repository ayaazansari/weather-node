const request =  require('request')

const forcast = ({longitude:long,latitude:lat},callback)=> {
    // const long = data.longitude
    // const lat = data.latitude
    const url = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+long+"&units=metric&exclude=minutely&appid=2db8a078efbbd891b8ae26674e3623f5"
    request({ url : url , json: true} , (err,{body})=>{
        if(err){
            callback("unable to connect to the weather services")
        }else if(body.message){
            callback("unable to get locations of the given data",lat +" "+long)
        }else{
            const data = {
                timezone : body.timezone,
                temp : body.current.temp,
                weatherDesc : body.daily[0].weather[0].description
            }
            callback(undefined,data)
        }
    })
}
module.exports = forcast