$(document).ready(function() {
    var lat;
    var long;
 var clicked=false;
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;
    var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=d73073a688418f7ae0d308dfb2d71917";
    $.getJSON(api, function(show) {
        var temperature = show.main.temp;
        temperature -= 273.15;
        temperature=temperature.toFixed(2);
        var ft = temperature * (9 / 5) + 32;
        ft=ft.toFixed(2);
        var city = show.name;
        var humid = show.main.humidity;
        var wind = show.wind.speed;
        var desc=show.weather[0].description
        $("#sCity").html(city + "," + show.sys.country);
        $("#sDesc").html(desc);
$("#sTemp").html(temperature+" "+"<button style='color: black;background-color: transparent;border: transparent'>ºC</button>");
        $("#sTemp").click(function () {
            if(clicked===false) {
                $("#sTemp").html(ft+" "+"<button style='color: blue;background-color: transparent;border: transparent'>ºF</button>");
            clicked=true;
            }
            else{
                $("#sTemp").html(temperature+" "+"<button style='color: black;background-color: transparent;border: transparent'>ºC</button>");
                clicked=false;
            }
            });
        $("#sWind").html("Wind Speed " + " " + wind + "km\h");
        $("#sHumidity").html("Humidity" + " " + humid);

    });

    });
}

});