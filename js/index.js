$(document).ready(function() {

	if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $("#location").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  });
}

	var api = "https://api.openweathermap.org/data/2.5/weather?q=caracas&APPID=cecab3666714a2c3adb3b520d34f2beb";

	$.getJSON(api, function(data){
		// alert(data.coord.lat);
	});

});