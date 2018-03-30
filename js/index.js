
$(document).ready(function() {

	$.getJSON("http://freegeoip.net/json/", function(coords){
		var lat = coords.latitude;
		var lon = coords.longitude;
		var api = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=cecab3666714a2c3adb3b520d34f2beb";

		$.getJSON(api, function(data){

			var fTemp, cTemp, kTemp;
			var icon = data.weather[0].icon;
			var description = data.weather[0].description;
			var temp = data.main.temp;
			var temp_min = data.main.temp_min;
			var temp_max = data.main.temp_max;
			var pressure = data.main.pressure;
			var humidity = data.main.humidity;
			var windSpeed = data.wind.speed;
			var windDeg = data.wind.deg;
			var country = data.sys.country;
			var city = data.sys.name;

			fTemp = (temp * 9/5)-459.67;
			cTemp = temp - 273.15;

			console.log(description);
		});
	});
	


	
});