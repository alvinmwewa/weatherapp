// JS for Local Weather App
$( document ).ready(function() {

  var lat; var lon; var desc; var hum; var weatherid;
  var temp = []; var wind = [];

  // Request IP address from user to get location & store coordinates
  $.getJSON("https://ipapi.co/json", function(data) {
    lat = data.latitude;
    lon = data.longitude;


    $.getJSON("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +"&APPID=44762e241a2c3fc4f616e416abc08f0e",
     function(weatherData) {

    $("#city").html(weatherData.name);
    temp[0] = (weatherData.main.temp - 273.15).toFixed(0) + "&#176";
    temp[1] = (((weatherData.main.temp - 273.15)*1.8) + 32).toFixed(0) + "&#176";

    

    // weather info temp
    $("#temp").html(temp[1]);
    $("#desc").html(desc);
    $("#hum").html(hum);
    $("#wind").html(wind[1]);
    });

    // Function to switch between F/C
    $(".fc").click (function() {
      if ($(".fc").text() === "F") {
        $(".fc").text("C");
        $("#temp").html(temp[0]);
        $("#wind").html(wind[0]);
      }
      else {
        $(".fc").text('F');
        $("#temp").html(temp[1]);
        $("#wind").html(wind[1]);
      }
    });

    
    var weatherIcons = {
      sunny: ["wi-day-sunny", "#FFE14A"],
      cloudy: ["wi-cloudy", "#C1C1C1"],
      rainy: ["wi-rain", "#33436D"],
      storm: ["wi-storm-showers", "#33436D"],
      snow: ["wi-snow", "#FFFFFF"]
    };


  });
});