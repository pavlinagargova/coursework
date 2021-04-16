document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    // document.getElementById('deviceready').classList.add('ready');
    getAppVersionNumber();
    getConfigAppName();

    plugin.google.maps.environment.setEnv({
        'API_KEY_FOR_BROWSER_RELEASE': '(AIzaSyBfJeaqUDGz2KYScXsbKUUyOnhUAYu7WHo)',
        'API_KEY_FOR_BROWSER_DEBUG': ''  // optional
    });

    var div = document.getElementById("map_canvas");

    // Create a Google Maps native view under the map_canvas div.
    var map = plugin.google.maps.Map.getMap(div);

    // If you click the button, do something...
    var button = document.getElementById("addPlace");
    button.addEventListener("click", function() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        //
        // // Move to the position with animation
        // map.animateCamera({
        //     target: {lat: 37.422359, lng: -122.084344},
        //     zoom: 17,
        //     tilt: 60,
        //     bearing: 140,
        //     duration: 5000
        // });
        //
        // // Add a maker
        // var marker = map.addMarker({
        //     position: {lat: 37.422359, lng: -122.084344},
        //     title: "Welecome to \n" +
        //         "Cordova GoogleMaps plugin for iOS and Android",
        //     snippet: "This plugin is awesome!",
        //     animation: plugin.google.maps.Animation.BOUNCE
        // });
        //
        // // Show the info window
        // marker.showInfoWindow();

    });

}

function onSuccess(position) {
    var div = document.getElementById("map_canvas");
    console.log(1)

    var map = plugin.google.maps.Map.getMap(div);
    var lat = position.coords.latitude;
    var lang = position.coords.longitude;
    // Move to the position with animation
    map.animateCamera({
        target: {lat: lat, lng: lang},
        zoom: 17,
        tilt: 60,
        bearing: 140,
        duration: 5000
    });

    // Add a maker
    var marker = map.addMarker({
        position: {lat: lat, lng: lang},
        title: "Welecome to \n" +
            "Cordova GoogleMaps plugin for iOS and Android",
        snippet: "This plugin is awesome!",
        animation: plugin.google.maps.Animation.BOUNCE
    });

    // Show the info window
    marker.showInfoWindow();
}
function onError(error) {
    alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}

function getAppVersionNumber() {
    cordova.getAppVersion.getVersionNumber(function (version) {
        $('#appVersion').text(version);
    });
}
function getConfigAppName() {
    cordova.getAppVersion.getAppDescription(function (name) {
        $('#appDescription').text(name);
    });
}