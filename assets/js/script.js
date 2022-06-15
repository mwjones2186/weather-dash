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

           
            var temperatureEl = document.getElementById("temperature")
            temperatureEl.textcontent = data.list[i].main.temp
           
            document.getElementById("temperature").append(temperatureEl)
            console.log()
                //document.createElement('temperature')
            
                // var h1el2 = document.createElement('h1')
//             // h1el2.textContent =  data.results[i].birth_year

//             // document.querySelector('body').append(h1El, h1el2)



            //let UV Index
            // Pu.. temp, wind, whatever, from data.list[i]...
            // temp = data.list[i].main.temp;
            // wind = data.list
            // Use that info to populate html stuff
        }
    
        
        
    });

};

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