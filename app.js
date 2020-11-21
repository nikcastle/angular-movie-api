var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.names = [{
        firstName: "testing1",
        lastName: "tester1"
    }, {
        firstName: "testing2",
        lastName: "tester2"
    }, {
        firstName: "testing3",
        lastName: "tester3"
    }]

    $scope.myFunction = function () {
        $scope.firstName = "test";
        $scope.lastName = "testing"
    }

    $scope.apiCall = function() {
        $http("URL").then(function(result){
            $scope.names = result.data
        })
    }

    $scope.myFunction();
});