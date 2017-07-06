myApp.controller("weatherController", weatherController);
weatherController.$ineject = ["weatherService"];

function weatherController(weatherService) {
    this.weather = {
        zipCode: undefined
    };
    this.getWeatherReport = function() {
        weatherService.getWeatherReport(this.weather.zipCode)
            .then(function(successResponse) {
                console.log("SuccessResponse", successResponse);
            }, function(errorResponse) {
                console.error("Error Response", errorResponse);
            });
    };
}