myApp.service("weatherService", weatherService);
weatherService.$inject = ["$http"];


function weatherService($http) {
    this.getWeatherReport = function(zipCode) {
        return $http.get("http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us");
    };
}