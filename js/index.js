var fTemp, cTemp;
var tempSwap = false;

// To get location coords
function getCoords() {
	// Call to an IP service geolocation
	// Pass the response to getDataByCoords function
	$.getJSON("https://freegeoip.net/json/", getDataByCoords);
}

// Once the coords are received, this function is called,
// sets the lat and lon variables, and make a call to
// openweathermap API
function getDataByCoords(coords) {
	var lat = coords.latitude;
	var lon = coords.longitude;
	var api = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=cecab3666714a2c3adb3b520d34f2beb";
	// Call to apenweathermap API
	// The response is passed to setData function
	$.getJSON(api, setData);
}

function getDataByAddress() {
	var address = $("#address").val();
	var api = "https://api.openweathermap.org/data/2.5/weather?q=" + address + "&APPID=cecab3666714a2c3adb3b520d34f2beb";

	$.getJSON(api, setData);
}

// This function asign variables and extract
// on them relevant data and sets the html fields
// with the data stored
function setData(data) {
	var icon = data.weather[0].icon;
	var description = data.weather[0].description;
	var temp = data.main.temp;
	// var temp_min = data.main.temp_min;
	// var temp_max = data.main.temp_max;
	var pressure = data.main.pressure;
	var humidity = data.main.humidity;
	var windSpeed = data.wind.speed;
	var windDeg = data.wind.deg;
	var country = data.sys.country;
	var city = data.name;
	var iconUrl = "https://openweathermap.org/img/w/" + icon + ".png";

	fTemp = ((temp * 9/5)-459.67).toFixed(1);
	cTemp = (temp - 273.15).toFixed(1);

	// Get the html ID and prints the wanted data
	$("#temp").html(cTemp + "°C");
	$("#weatherDetail").html(description);
	$("#location").html(city + ", " + country);
	$(".humidity").html(humidity + "%");
	$(".wind").html(windSpeed + "m/s, " + windDeg + "deg");
	$(".pressure").html(pressure + "hPa");
	// $(".max-min-temp").html(temp_max + "/" + temp_min);
	$("#weatherIcon").attr("src", iconUrl);
}

$(document).ready(function() {

	$("#locate").on("click", getCoords);
	$(".addForm").on("submit", function(e) {
		e.preventDefault();
		getDataByAddress();
	});

	// Watch for a click on this ID and change the 
	// units on it
	$("#temp").on("click", function(){
		if (tempSwap === false) {
			$("#temp").html(fTemp + "°F");
			tempSwap = true;
		} else {
			$("#temp").html(cTemp + "°C");
			tempSwap = false;
		}
	});
});