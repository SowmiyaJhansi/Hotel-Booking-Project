const view = document.getElementById("view");
var map;
 function initMap() {
 map = new google.maps.Map(document.getElementById("map"), {
 center: { lat: -34.397, lng: 150.644 },
 zoom: 8
 });
 }

 const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=eiffel%20tower&lang=en_US&units=km");
xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "1ae6c967d8mshf4cf9c73d5c452ap18eacdjsn25e17e8c457f");

xhr.send(data);