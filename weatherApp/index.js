const fs = require('fs');
const http = require('http');
const requests = require('requests');

var homeFile = fs.readFileSync('./weather.html',"utf-8");
// console.log(homeFile);
const replaceVal = (tempVal,orgVal)=>{
   
   let degree = tempVal.replace('{%degree%}',orgVal.main.temp);
   degree = degree.replace('{%mindeg%}',orgVal.main.temp_min); 
   degree = degree.replace('{%maxdeg%}',orgVal.main.temp_max);
   degree = degree.replace('{%city%}',orgVal.name);
   degree = degree.replace('{%country%}',orgVal.sys.country);  
   degree = degree.replace('{%icon%}',orgVal.weather[0].main);  
   
   return degree;
};

var server = http.createServer((req,res)=>{
  
    if(req.url == "/")
    {
        requests('http://api.openweathermap.org/data/2.5/weather?q=Indore&appid=844522a9f71e49b2206829d167137684')
        .on('data', function (chunk) {
            
            const objData = JSON.parse(chunk);
            const arrData = [objData];
            // console.log(arrData);
            const realData = arrData.map((val) => replaceVal(homeFile,val)).join("");
            res.write(realData);
            // console.log(realData);
        })
        .on('end', function (err) {
        if (err) return console.log('connection closed due to errors', err);
        res.end();
        });
    }


});


server.listen(8000,"127.0.0.1",()=>{console.log("Listening")});