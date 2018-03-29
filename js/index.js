$(document).ready(function() {

	

	var api = "https://api.openweathermap.org/data/2.5/weather?q=caracas&APPID=cecab3666714a2c3adb3b520d34f2beb";

	$.getJSON(api, function(data){
		// alert(data.coord.lat);
	});

});