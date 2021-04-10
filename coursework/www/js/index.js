document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    // document.getElementById('deviceready').classList.add('ready');
    getAppVersionNumber();
    getConfigAppName();

}

function getAppVersionNumber() {
    cordova.getAppVersion.getVersionNumber(function (version) {
        $('#appVersion').text(version);
    });
}
function getConfigAppName() {
    cordova.getAppVersion.getAppDescription(function (name) {
        console.log(name)
        $('#appDescription').text(name);
    });
}