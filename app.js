let weather = {
    "apiKey": "036f9426872cb76640ee9cec38d08af9",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        ).then((res) => res.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector('.temp').innerText = temp + "°C"
        document.querySelector('.icon').src = "http://openweathermap.org/img/w/" + icon + ".png";
        document.querySelector('.description').innerText = description;
        document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
        document.querySelector('.wind').innerText = "Wind Speed: " + speed + " km/h";
    },
    search: function() {
       this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector('.search button').addEventListener('click',(e) => {
    weather.search();
});

document.querySelector('.search-bar').addEventListener('keyup', (e) => {
    if(e.key == 'Enter') {
        weather.search();
    }
});

weather.fetchWeather("Providence")