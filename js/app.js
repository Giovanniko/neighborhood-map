"use strict"
var testArray =[
				{id: 1, name: "Children's Palace-Palacio de los niños", type: "Amusement", lat: 43.3542653, lng: -5.8511267, address: "Parque de Invierno, Pedro Masaveu, s/n, 33007 Oviedo, Asturias, Spain", tel: "+34 984 08 40 45"},
				{id: 2, name: "Archaeological Museum of Asturias", type: "Museum", lat: 43.3628378, lng: -5.8450027, address: "Calle San Vicente, 3, 33003 Oviedo, Asturias, Spain", tel: "+34 985 20 89 77"},
				{id: 3, name: "Restaurant Sidrería Tierra Astur Gascona", type: "Restaurant", lat: 43.3628378, lng: -5.8450027, address: "Calle Gascona, 1, 33001 Oviedo, Asturias, Spain", tel: "+34 985 20 25 02"},
				{id: 4, name: "Benedictine Monastery San Pelayo", type: "Place of Worship", lat: 43.3628378, lng: -5.8450027, address: "Calle San Vicente, 11, 33003 Oviedo, Asturias, Spain", tel: "+34 985 21 89 81"},
				{id: 5, name: "Parrilla restaurante Buenos Aires", type: "Restaurant", lat: 43.3820506, lng: -5.8555167, address: "Carretera del Naranco, s/n, 33012 Oviedo, Asturias, Asturias, Spain", tel: "+34 985 29 59 07"},
				{id: 6, name: "Catedral de Oviedo", type: "Place of Worship", lat: 43.362838, lng: -5.8432524, address: "Plaza Alfonso II el Casto, s/n, 33003 Oviedo, Asturias, Spain", tel: "+34 985 21 96 42"},
				{id: 7, name: "Los Prados Shopping Mall", type: "Shop", lat: 43.3721517, lng: -5.8331534, address: "Calle Joaquín Costa, s/n, 33011 Oviedo, Asturias, Spain", tel: "+34 985 11 23 17"},
				{id: 8, name: "University of Oviedo", type: "Education", lat: 43.3608852, lng: -5.8512674, address: "Calle San Francisco, 1, 33003 Oviedo, Asturias, Spain", tel: "+34 985 10 30 00"},
				{id: 9, name: "Church of San Miguel de Lillo", type: "Archaeological", lat: 43.3688247, lng: -5.8708653, address: "Lugar Lillo, 1, 33194 Oviedo, Asturias, Spain", tel: "+34 985 11 49 01"},
				{id: 10, name: "Museo Fernando Alonso", type: "Museum", lat: 43.4023094, lng: -5.8622585, address: "33690, Asturias, Spain", tel: "+34 984 18 08 08"},
				{id: 11, name: "Iglesia de Santa María del Naranco", type: "Archaeological", lat: 43.3806257, lng: -5.8666037, address: "Monte Naranco, s/n, 33012 Oviedo, Asturias, Spain", tel: "+34 638 26 01 63" },
				{id: 12, name: "Monte Naranco", type: "Park", lat: 43.3709191, lng: -5.8718809, address: "33194, Asturias, Spain", tel: "" },
				{id: 13, name: "Ciclos Fran", type: "Shop", lat: 43.3701542, lng: -5.8244384, address: "Calle Juan M Sánchez-Ocaña S, 33010 Oviedo, Asturias, Spain", tel: "+34 985 21 43 84" },
				{id: 14, name: "El Fartuquín", type: "Restaurant", lat: 43.3585869, lng: -5.8473483, address: "Calle Carpio, 19, 33009 Oviedo, Asturias, Spain", tel: "+34 985 22 99 71"},
				{id: 15, name: "Parque de Invierno", type: "Park", lat: 43.352919, lng: -5.85207, address: "Barrio Campiello, s/n, 33007 Oviedo, Asturias, Spain", tel: "+34 984 08 38 00"},
				{id: 16, name: "Alimerka Supermarket", type: "Supermarket", lat: 43.3690108, lng: -5.8236416, address: "Calle Tenderina Baja, 205, 33010 Oviedo, Asturias, Spain", tel: "+34 985 76 08 86"},
				{id: 17, name: "Club de Natación Ciudad de Oviedo", type: "Sport", lat: 43.3637023, lng: -5.8749445, address: "Calle José María Martínez Cachero, s/n, 33013 Oviedo, Asturias, Spain", tel: "+34 985 27 31 55"},
				{id: 18, name: "Biblioteca Municipal Villa Magdalena", type: "Library", lat: 43.3616328, lng: -5.8584902, address: "Av. de Galicia, 0, 33005 Oviedo, Asturias, Spain", tel: "+34 985 27 06 01"},
				{id: 19, name: "I.E.S Doctor Fleming", type: "Education", lat: 43.3574866, lng: -5.8553966, address: "Calle Dr. Fleming, 7, 33005 Oviedo, Asturias, Spain", tel: "+34 985 23 08 99"},
				{id: 20, name: "Pistas de Tenis y Padel del Parque del Oeste", type: "Sport", lat: 43.3618119, lng: -5.8746394, address: "Calle Antón Sanchez, s/n, 33013 Oviedo, Asturias, Spain", tel: "+34 985 27 37 21"}
			];
//Client ID
const KEY = "G45XPMYEL50EYHLGTAJFLPHC3JHQVIFE0FF4GVRLA0500JRQ";
//Client Secret
const SECRET = "JHLNNLWDLGATL4FCWEA3422WWGGSQIC4MXEOVKKGVGFBRZ4B";
const SEARCH = 'https://api.foursquare.com/v2/venues/search?client_id=';
const BASE_URL = SEARCH + KEY + '&client_secret=' + SECRET + '&v=20130815';
const OVIEDO_LAT_LNG = {lat: 43.36029, lng: -5.84476};//start position
//global variables
var panorama;
var streetViewService;
var streetViewInfoBox;
var map;
var infoBox;
var buttonHTML = '<button id="FsqButton">Nearby Places</button>';
var autoArray = [];
var locationsList = [];//
var panoMarkerArray =[];
var markerArray = [];
var foursquareMarkerArray = [];
var foursquareVenueObj = {};
var foursquareUrl;
var nearByPlaces;
//var self = this;

//ViewModel
// $(function() {
		
	var viewModel = {
		
		//console.log(Object.entries(testArray[0]));
		testArray: ko.observableArray(testArray),
		autoArray: ko.observableArray(),
		
		//autoArray: ko.observableArray(autoArray),
		toggleList: ko.observable(true),
		togglePano: ko.observable(true),
		toggleMap: ko.observable(true),
		
		toggle: function() {
			this.toggleList(!this.toggleList());//this line coding help received from "http://jsfiddle.net/FgVxY/4/"
		},
		
		streetViewToggle: function() {
			this.togglePano(!this.togglePano());
			panorama.setVisible(true);
		},
		
		mapToggle: function() {
			this.toggleMap(!this.toggleMap());
			panorama.setVisible(true);
		},
		/*NEW CODE TO ATTEMPT TO KICKSTART A LIST OF PLACES DIRECTLY TO THE SCREEN*/
		locationsList: ko.observableArray([]),//
		populate: function(testArray){
			testArray.forEach(function(locationItem) {
				console.log("location Item: " + locationItem);
				locationsList.push(locationItem);
			});
		},
	
		searchText: ko.observable(""),
		
		search: ko.computed(function(searchText) {
			autoArray = [];
			if(!searchText){
				console.log("no value typed yet");
				testArray.forEach(function(locationItem) {
					autoArray.push(locationItem);
				});
				console.log(Object.entries(autoArray));
				//viewModel.autoMarkers(autoArray); ERRORS AS UNDEFINED (autoMarkers makes the first set of full markers on page load)
				return testArray;//shows a full set of places on the list
			} else {
				/* When a search is typed the following error occurs:
				Uncaught Error: Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters. */
				console.log("searchText: " + searchText);
				for(var i in testArray) {
					if(testArray[i].name.toLowerCase().indexOf(searchText.toLowerCase()) >=0) {
						viewModel.autoArray.push(testArray[i]);
						return autoArray
					} 
				}//viewModel.autoMarkers(autoArray);
			}
			
		}),
		
		
		/*THIS ORIGINAL CODE WORKED WELL, BUT THE LIST DID NOT SHOW UNTIL SOMETHING WAS TYPED IN THE TEXT INPUT BOX, SO DID NOT MEET SPECS*/
		/* search: function(value) {
			viewModel.testArray.removeAll();//
			//console.log(Object.entries(viewModel.testArray[0]));
			var autoArray = [];
			for(var i in testArray) {
				if(testArray[i].name.toLowerCase().indexOf(value.toLowerCase()) >=0) {
					viewModel.testArray.push(testArray[i]);
					autoArray.push(testArray[i]);
				}
			}viewModel.autoMarkers(autoArray);
		}, */
		
					
		initMap: function() {
			//constructor creates new map centered in Oviedo, Asturias, Spain
			map = new google.maps.Map(document.getElementById("map"), {
				center: OVIEDO_LAT_LNG,
				zoom: 10,
				mapTypeControl: true
			});
			nearByPlaces = new google.maps.places.PlacesService(map);
			infoBox = new google.maps.InfoWindow();
			//user input
			var userInput = document.getElementById('searchText');
			//set bounds
			var defaultBounds = new google.maps.LatLngBounds(
				new google.maps.LatLng(43.41182795701008, -5.91095107481442),
				new google.maps.LatLng(43.33374678645799, -5.757867671758277)
			);
			
			//new instance of searchBox object REMOVED FOR NOW
			/* var searchBox = new google.maps.places.SearchBox(userInput, {
				bounds: defaultBounds
			}); */
			
			//new instance of Street View			
			streetViewService = new google.maps.StreetViewService();
			streetViewInfoBox = new google.maps.InfoWindow();
			panorama = new google.maps.StreetViewPanorama(document.getElementById('panorama'));
			//new instance of Traffic Layer
			var trafficLayer = new google.maps.TrafficLayer();
			trafficLayer.setMap(map);
			
			// On start up panoramic in center of Oviedo
			streetViewService.getPanorama({location: OVIEDO_LAT_LNG, radius: 50}, viewModel.googleStreetview);
			
			/*EVENT LISTENTERS*/
			//Show a panoramic of map area with user click
			map.addListener('click', function(event) {
				streetViewService.getPanorama({location: event.latLng, radius: 50}, viewModel.googleStreetview);
			});
			
			/*AUTOCOMPLETE REMOVED AS INTERFERED WITH FILTER, AS RECOMMENDED BY REVIEWER*/
			//attach autocomplete to text search box
			//searchBox.addListener('places_changed', function() {
					//viewModel.searchBoxPlaces(this);
			//});
			//Bias searches to map viewport area
			//map.addListener('bounds_changed', function() {
				//searchBox.setBounds(map.getBounds());
			//});
		},
		
		/* searchBoxPlaces: function (searchBox) {
			//find all the places from query selected on the search box drop down list
			var allPlaces = searchBox.getPlaces();
			var searchLength = allPlaces.length;
			if (searchLength >= 1) {
				for (var i = 0; i < searchLength; i++) {
					viewModel.searchPlacesArray(allPlaces[i]);
				}
			} else {
				window.alert('SORRY...NO RESULTS FOUND, PLEASE TRY AGAIN!');
			}
		}, */
		
		/* MARKERS */
		//favorites markers automatically shown on search event
		autoMarkers: function(autoArray) {
			viewModel.emptyMarkerArray();
			var arrayLen =  autoArray.length;
			for(var i = 0; i < arrayLen; i++) {
				//extract array item info
				var placeName = autoArray[i].name;
				var Lat = autoArray[i].lat;
				var Lng = autoArray[i].lng;
				var position = new google.maps.LatLng({lat: Lat, lng: Lng}); 
				//make maker options object for each location
				var markerOptions = {
					map: map,
					title: placeName,
					position: position,
					icon: 'img/favorites_24x24.png',
					animation: google.maps.Animation.DROP,
					clickable: true
				};
				//create new instance of marker and push to the markerArray
				var cityMarker = new google.maps.Marker(markerOptions);
				markerArray.push(cityMarker);
				viewModel.cityBounds(cityMarker, autoArray[i]);
			}
		},
		
		cityBounds: function(cityMarker, locale) {
			var bounds = new google.maps.LatLngBounds();
			markerArray.forEach(function(cityMarker) {
				bounds.extend(cityMarker.position);
			});
			map.fitBounds(bounds);
			viewModel.addEvent(locale, cityMarker);
		},
		
		//adds click events to the markers to show info window
		addEvent: function(locale, marker) {
			var markerPosition = new google.maps.LatLng({lat: locale.lat, lng: locale.lng});//last added	
			//adds click event to marker
			google.maps.event.addListener(marker, 'click', function(locale, marker) {
				return function() {
					viewModel.addInfoBox(locale, marker);
					map.setZoom(14);
					map.setCenter(marker.getPosition());
					//adds a pano when clicking on marker
					streetViewService.getPanorama({location: markerPosition, radius: 50}, viewModel.addPano);//LAST ADDED
				};
			}(locale,marker));
			//adds click event to list item
			var elemId = locale.id;
			var currentElement = document.getElementById(elemId);
			google.maps.event.addDomListener(currentElement, 'click', function(locale, marker) {
				return function() {
					viewModel.addInfoBox(locale, marker);
					map.setZoom(14);
					map.setCenter(marker.getPosition());
					streetViewService.getPanorama({location: markerPosition, radius: 50}, viewModel.addPano);
				};
			}(locale,marker));
		},
		
		addInfoBox: function(locale, marker){
			infoBox.open(map, marker);
			infoBox.setContent('<div class="infoArea"><strong>Local Favorite:</strong><br>' + locale.name + '<br>' + locale.type + '<br>' + locale.address +'<br>' +locale.tel+ '<br><hr>' + buttonHTML + '</div><hr>');
			var button = document.getElementById("FsqButton");
			google.maps.event.addDomListener(button, 'click', function(){
				return function() {
					viewModel.detailsPls(locale);
				};
			}(button));
			marker.setAnimation(google.maps.Animation.BOUNCE);
			setTimeout(function(){
				marker.setAnimation(null);
				}, 1000);
		},
		
		addPano: function(data, status) {
			if (status == 'OK') {
				var panoId = data.location.pano;
				panorama.setPano(panoId);
				panorama.setPov({
					heading: 90,
					pitch: 10
				});
				panorama.setVisible(true);
			} else {
				alert("SORRY...No StreetView data found here");
			}
		},
		
		googleStreetview: function(data, status) {
			if(status == 'OK') {
				var panoMarker = new google.maps.Marker({
					position: data.location.latLng,
					map: map,
					title: data.location.description
				});
				map.setCenter(panoMarker.getPosition());
				panoMarkerArray.push(panoMarker);
				panorama.setPano(data.location.pano);
				panorama.setPov({
					heading: 355,//heading when marker placed
					pitch: 10
				});
				panorama.setVisible(true);
				if (map.zoom < 14 && panoMarkerArray.length > 1) { //stops automatic zoom in on initial map call
					map.setZoom(14);
				}
				//changes or loads pano when clicking the marker
				panoMarker.addListener('click', function() {
					var markerPanoID = data.location.pano;//get id data back
					panorama.setPano(markerPanoID);//set to the id
					panorama.setPov({
						heading: 15,//updated heading when marker clicked
						pitch: 10
					});
					map.setCenter(panoMarker.getPosition());//added
					panorama.setVisible(true);
					if (map.zoom < 14 && panoMarkerArray.length === 1) {//allow to zoom in after first Oviedo marker is clicked
						map.setZoom(14);
					}
					var markerPos = panoMarker.getPosition();//originally in iffe
					var markerPosLat = markerPos.lat();
					var markerPosLng = markerPos.lng();
					var positionDetails = {lat: markerPosLat, lng: markerPosLng}; //this is good but has no reference to an id in more details
					(function(e) {
							var buttonHTML = '<button style="margin: 5px 0px;" id="FsqButton2">Nearby Places</button>';
							streetViewInfoBox.setContent('<div class="infoArea"><strong>You clicked here: </strong><br>' + data.location.shortDescription + '<hr>' + buttonHTML + '</div><hr><div><strong>Google Data:</strong><br><strong>Lat: </strong>' + markerPos.lat() + '<br><strong>Lng: </strong>' + markerPos.lng() + '</div>');
							streetViewInfoBox.open(map, panoMarker);
					})(panoMarker, data);
					//sends over position and finds nearby venues from foursquare
					var button = document.getElementById("FsqButton2");//could be more than one Fsqbutton open at a time from different infobox types
					google.maps.event.addDomListener(button, 'click', function(){
						return function() {
							viewModel.detailsPls(positionDetails);
						};
					}(button));
				});
			} else {
				alert('SORRY...No Streetview data for this location.');
			}
		},		

		/*GOOGLE SEARCH AUTOCOMPLETE MARKERS*/ 
		searchPlacesArray: function (locale)  {
			var markerPosition = locale.geometry.location;
			var icon = {
				url: locale.icon,
				size: new google.maps.Size(71, 71),
				origin: new google.maps.Point(0,0),
				anchor: new google.maps.Point(17, 34),
				scaledSize: new google.maps.Size(25,25)
			};
			var markerOptions = {
					map: map,
					title: locale.name,
					position: locale.geometry.location,
					icon: icon,
					clickable: true
				};
			//create new instance of marker and push to the marker array
			var marker = new google.maps.Marker(markerOptions);
			markerArray.push(marker);
			
			//create new instance of LatLngBounds and extend map to bounds of markers
			var bounds = new google.maps.LatLngBounds();
			//if more than one place found fit all places to the window, otherwise zoom down to take a closer look
			if (markerArray.length > 1){
				markerArray.forEach(function(marker) {
				bounds.extend(marker.position);
			});
			map.fitBounds(bounds);
			} else {
				map.setZoom(14);
			}
	
			//put 'click' listener on marker to open infoBox, check for available website first
			google.maps.event.addListener(marker, 'click', function(locale, marker) {
				return function() {
					var weblink;
					var rating;
					if (locale.website !== undefined) {
						weblink = '<a href="'+ locale.website +'">Website</a><br>';
					} else {
						weblink = '';
					}
					if (locale.rating !== undefined) {
						rating = locale.rating;
					} else {
						rating = 'No ratings yet';
					}
					infoBox.setContent('<div class="infoArea"><strong>' + locale.name + '</strong><br>' + locale.formatted_address + '<hr>' + buttonHTML + '<hr>' + weblink +'<strong>Rating: </strong>' + rating + '</div>');
					infoBox.open(map, marker);
					//var markerPosition = panoMarker.getPosition();
					var markerLat = markerPosition.lat();//could consolidate
					var markerLng = markerPosition.lng();
					var positionDetails = {lat: markerLat, lng: markerLng}; 
					var button = document.getElementById("FsqButton");
					google.maps.event.addDomListener(button, 'click', function(){
						return function() {
							viewModel.detailsPls(positionDetails);
						};
					}(button, positionDetails));
					map.setCenter(marker.getPosition());
					if (map.zoom < 14) { //stops automatic zoom-in on initial map call
						map.setZoom(14);
					}
					//puts a street view pic near the location
					streetViewService.getPanorama({location: markerPosition, radius: 50}, viewModel.addPano);//LAST ADDED
				};
			}(locale,marker));//pass in parameters to anonymous function
		},
		
		/* CLEAR MARKERS AND EMPTY ARRAYS */
		emptyMarkerArray: function() {
			markerArray.forEach(function(marker) {
				marker.setMap(null);
			});
			markerArray = [];
		},
		
		emptyFoursquareMarkerArray: function() {
			for (var i = 0; i <foursquareMarkerArray.length; i++ ) {
				foursquareMarkerArray[i].setMap(null);
			}
			foursquareMarkerArray = [];//new
			infoBox.setMap(null);
		},
		
		emptyStreetviewMarkerArray: function() {
			for (var i = 0; i < panoMarkerArray.length; i++ ) {
				panoMarkerArray[i].setMap(null);
				streetViewInfoBox.setMap(null);//is this necessary?
			}
			panoMarkerArray.length = 0;
		},
		
		//foursquare markers loaded on clicking foursquare button
		foursquareMarkers: function(foursquareArray) {
			var fourSqArrayLen = foursquareArray.length;
			for(var i = 0; i < fourSqArrayLen; i++) {
				var placeName = foursquareArray[i].name;
				var Lat = foursquareArray[i].lat;
				var Lng = foursquareArray[i].lng;
				var position = new google.maps.LatLng({lat: Lat, lng: Lng}); 
				//make maker options object for each location
				var markerOptions = {
					map: map,
					title: placeName,
					position: position,
					icon: 'img/foursquare_blue_icon24x24.png',
					animation: google.maps.Animation.DROP,
					clickable: true
				};
				//create new instance of marker and push to the markerArray
				var foursquareMarker = new google.maps.Marker(markerOptions);
				foursquareMarkerArray.push(foursquareMarker);
				if(map.zoom < 16) {
					map.setZoom(16);
				}
				map.setCenter(foursquareMarker.getPosition());
				viewModel.addNearbyEvent(foursquareArray[i], position, foursquareMarker);
			} 
		},
		
		addNearbyEvent: function(foursquareEvent, position, foursquareMarker){
			google.maps.event.addListener(foursquareMarker, 'click', function(foursquareEvent, position, foursquareMarker) {
				return function() {
					viewModel.addFsqUrl(foursquareEvent, foursquareMarker);
					streetViewService.getPanorama({location: position, radius: 50}, viewModel.addPano);
				};
			}(foursquareEvent, position, foursquareMarker));
		},
		
		addFsqUrl: function(foursquareEvent, foursquareMarker) {
			if (!foursquareEvent.url) {
				var foursquareId = foursquareEvent.id;
				var venueDetails = 'https://api.foursquare.com/v2/venues/' + foursquareId+ '?client_id=';
				var apiCall = venueDetails + key + '&client_secret=' + secret + '&v=20130815';
				$(function() {
					$.ajax({
						url: apiCall,
						dataType: 'jsonp',
						success: function(data) {
							if(data.meta.code == 200){
								foursquareUrl = data.response.venue.canonicalUrl;
								foursquareEvent = Object.assign({url: foursquareUrl}, foursquareEvent);
								viewModel.addFoursquareInfoBox(foursquareEvent, foursquareMarker);
							} else {
								var error = data.meta.errorType;
								alert("SORRY no Foursquare webpage found. Error code: " + error);
							}
						},
						error:function(error) {
							alert("Could not reach Foursquare service: " + error);
						}
					});
				});
			} 
			viewModel.addFoursquareInfoBox(foursquareEvent, foursquareMarker);
		},
		
		addFoursquareInfoBox: function (foursquareEvent, foursquareMarker){
			infoBox.setContent('<div class="infoArea"><strong>Foursquare Info:</strong><br>' + foursquareEvent.name + '<br>' + foursquareEvent.type + '<br>' +foursquareEvent.address + '<br>' + '<a id="fsqUrl" target="_blank" href="'+foursquareEvent.url+'">Foursquare Webpage</a>' + '<br><hr>'+ buttonHTML + '<hr></div>');
			infoBox.open(map, foursquareMarker);
			//looks for other foursquare venues near the current foursquare venue
			var button = document.getElementById("FsqButton");
			google.maps.event.addDomListener(button, 'click', function(){
				return function() {
					viewModel.detailsPls(foursquareEvent);//ADDED					
				};
			}(button));
			foursquareMarker.setAnimation(google.maps.Animation.BOUNCE);
			setTimeout(function(){
				foursquareMarker.setAnimation(null);
			}, 1000);
		},

		//foursquare api call
		detailsPls: function(locale) {
			 var urlOptions = '&ll=' + locale.lat + ',' + locale.lng + '&radius=' + 500 + '&limit=' + 2;
			 var apiCall = BASE_URL + urlOptions;
			$(function() {
				$.ajax({
					url: apiCall,
					dataType: 'jsonp',
					success: function(data) {
						if(data.meta.code == 200){
							var foursquareArray = [];
							var responseLength = data.response.venues.length;
							//gets response and goes through object picking out key details 
							for ( var i=0; i < responseLength; i++){
								var foursquareId = data.response.venues[i].id;
								var foursquareName = data.response.venues[i].name;
								var foursquareLat = data.response.venues[i].location.lat;
								var foursquareLng = data.response.venues[i].location.lng;
								var foursquareCat;
								if (data.response.venues[i].categories.length < 1){
									data.response.venues[i].categories.push('');
									foursquareCat = data.response.venues[i].categories[0];
								} else {
									foursquareCat = data.response.venues[i].categories[0].name;
								}
								var foursquareAddress;
								if (!data.response.venues[i].location.address) {
									foursquareAddress = data.response.venues[i].location.formattedAddress;
								} else {
									foursquareAddress = data.response.venues[i].location.address;
								}
								foursquareVenueObj = {
									"id": foursquareId,
									"name": foursquareName,
									"lat": foursquareLat,
									"lng": foursquareLng,
									"type": foursquareCat,
									"address": foursquareAddress
								};
								foursquareArray.push(foursquareVenueObj);
							}
							viewModel.foursquareMarkers(foursquareArray);
						} else {
							var error = data.meta.errorType;
							alert("SORRY no Foursquare data. Error code: " + error);
						}
					},
					error:function(error) {
						alert("Could not reach Foursquare service: " + error);
					}
				});
			});
		}
	};
	//subscribes to changes in the observable "searchText" and runs the function "search" on changes
	
	/*---------Original script from first commit---------------*/
	//(viewModel.initMap());
	//viewModel.searchText.subscribe(viewModel.search);
	//ko.applyBindings(viewModel);
	//window.addEventListener('load', viewModel.search());
	/*----------------*/
	
	viewModel.populate(testArray);//
	viewModel.searchText.subscribe(viewModel.search);
	//viewModel.search();
		
	var oops = function(){
		alert("OOPs! Connection to Google Maps Error!");
	}
	var letsGo = function(){
		//console.log("Google loaded");
		viewModel.initMap();
		ko.applyBindings(viewModel);
		//viewModel.search();//possible to place here but unecessary
	}
	
//TODO: add data automatically from outside file, add editable favorites list from map places, add recenter map button, add category filters, make search radius options, directions and possible geolocation.

// });
