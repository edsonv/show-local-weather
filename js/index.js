var fTemp, cTemp;
var tempSwap = false;

function getCoords() {
	$.getJSON("http://freegeoip.net/json/", getDataByCoords);
}

function getDataByCoords(coords) {
	var lat = coords.latitude;
	var lon = coords.longitude;
	var api = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=cecab3666714a2c3adb3b520d34f2beb";

	$.getJSON(api, setData);
}

function getDataByAddress() {
	var address = $("#address").val();
	var api = "https://api.openweathermap.org/data/2.5/weather?q=" + address + "&APPID=cecab3666714a2c3adb3b520d34f2beb";

	$.getJSON(api, setData);
}

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

	var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";

	fTemp = (temp * 9/5)-459.67;
	cTemp = temp - 273.15;

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

	$("#temp").on("click", function(){
		if (tempSwap === false) {
			$("#temp").html(fTemp.toFixed(1) + "°F");
			tempSwap = true;
		} else {
			$("#temp").html(cTemp + "°C");
			tempSwap = false;
		}
	});
	
	


	

	
});