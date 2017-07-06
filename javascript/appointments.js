myApp.controller("appointmentController", appointmentController);
appointmentController.$inject = ["$timeout"]

function appointmentController($timeout) {
    this.isValidAppointment = false;
    this.appointment = {
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        date: undefined
    };
    this.scheduleAppointment = function() {
        var isValid = true;
        var newThis = this;
        $timeout(function() {
            if (newThis.appointment.firstName === "" || newThis.appointment.firstName === undefined) {
                angular.element("#firstName").addClass("error");
                isValid = false;
            } else {
                angular.element("#firstName").removeClass("error");
            }
            if (newThis.appointment.email === "" || newThis.appointment.email === undefined) {
                angular.element("#email").addClass("error");
                isValid = false;
            } else {
                angular.element("#email").removeClass("error");
            }
            if (newThis.appointment.date === "" || newThis.appointment.date === undefined || newThis.appointment.date === null) {
                angular.element("#date").addClass("error");
                isValid = false;
            } else {
                angular.element("#date").removeClass("error");
            }

            if (isValid) {
                newThis.isValidAppointment = true;
            } else {
                newThis.isValidAppointment = false;
            }

        }, 3000);
    };
}