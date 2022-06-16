// AS A traveler
// I WANT to see the weather outlook for multiple cities
// SO THAT I can plan a trip accordingly

// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=774222c77f8b3fa1592aeb44a0bae645


//this is for built in geocoding by city name
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}



// function callback(){
//     fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}').then(function (results){
//         return results.json()
//     }).then(function(data){
//         console.log(callback)
//     })
    
// }

var storeLocal = localStorage.getItem('cityName').value;
if (storeLocal) {
    4('#edit').val(storeLocal);

}





function grabWeather(){
    let apiKey = "774222c77f8b3fa1592aeb44a0bae645"
    var cityName = document.getElementById("cityName").value.trim()
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`

   
    fetch(url)
    .then (response => response.json())
    .then (function (data){
        // Get current information out of data         
        
        
        
        // Loop through data.list 5 times, 
        for (let i=0; i < data.list.length; i+=8) {
            let temp =data.list[i].main.temp
            let wind =data.list[i].wind.speed
            let humidity =data.list[i].main.humidity


            

            //day 1
            var temperatureEl = document.getElementById("temperature-0")
            temperatureEl.textContent = ((data.list[0].main.temp - 273.15)*1.8)+32

            var windEl = document.getElementById("wind-speed-0")
            windEl.textContent = data.list[0].wind.speed

            var humidityEl = document.getElementById("humidity-0")
            humidityEl.textContent = data.list[0].main.humidity

             //let UV Index

             //day 2
              
             var temperatureEl = document.getElementById("temperature-1")
             temperatureEl.textContent = ((data.list[1].main.temp - 273.15)*1.8)+32
 
             var windEl = document.getElementById("wind-speed-1")
             windEl.textContent = data.list[1].wind.speed
 
             var humidityEl = document.getElementById("humidity-1")
             humidityEl.textContent = data.list[1].main.humidity
           
            //day 3

             var temperatureEl = document.getElementById("temperature-2")
            temperatureEl.textContent = ((data.list[2].main.temp - 273.15)*1.8)+32

            var windEl = document.getElementById("wind-speed-2")
            windEl.textContent = data.list[2].wind.speed

            var humidityEl = document.getElementById("humidity-2")
            humidityEl.textContent = data.list[2].main.humidity

            //day 4

            var temperatureEl = document.getElementById("temperature-3")
            temperatureEl.textContent = ((data.list[3].main.temp - 273.15)*1.8)+32

            var windEl = document.getElementById("wind-speed-3")
            windEl.textContent = data.list[3].wind.speed

            var humidityEl = document.getElementById("humidity-3")
            humidityEl.textContent = data.list[3].main.humidity

            //day 5

            var temperatureEl = document.getElementById("temperature-4")
            temperatureEl.textContent = ((data.list[4].main.temp - 273.15)*1.8)+32

            var windEl = document.getElementById("wind-speed-4")
            windEl.textContent = data.list[4].wind.speed

            var humidityEl = document.getElementById("humidity-4")
            humidityEl.textContent = data.list[4].main.humidity
            // Pu.. temp, wind, whatever, from data.list[i]...
            // temp = data.list[i].main.temp;
            // wind = data.list
            // Use that info to populate html stuff
        }
    
        
        
    });

}




// function callback() {
//     fetch('https://swapi.dev/api/people/').then(function (res) {
//         return res.json()
//     }).then(function (data) {
//         // console.log(data)
//         for (let i = 0; i < data.results.length; i++) {
//             // console.log(data.results[i])


//             var name = data.results[i].name

//             fetch('https://swapi.dev/api/people/?search=' + name).then(function (res) {
//                 return res.json()
//             }).then(function (data) {
//                 console.log(data.results)
//             })

//            

//             // for (let i = 0; i < data.results[i].films.length; i++) {
//             //     console.log(data.results[i].films[i])

//             // }

//         }
//     })
// }

// {
//     results: [
//         {
//             films: [
//                 {
//                     starships: [

//                     ]
//                 }
//             ]
//         }
//     ]
// }


// document.getElementById('search').addEventListener('click', callback)

// var qArr = [
//     {
//         q: '1+1',
//         a: [2, 5, 3, 6],
//         ca: 2
//     }
// ]

// function checkAnswer() {
//     if (qArr[0].ca === qArr[0].a[0]) {
//         console.log('correct')
//     } else {
//         console.log('wrong')
//     }
// }