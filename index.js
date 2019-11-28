const request = require('request');
let apiKey = 'be123b70c1a27cdaeaf23d2229bbcf9a';
let city = 'mumbai';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url,(err,response,body)=>{
    if(err){
        console.log('error',err)
    }else{
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees in
               ${weather.name}!`;
        console.log(message);
        //console.log('body',body);
    }
})