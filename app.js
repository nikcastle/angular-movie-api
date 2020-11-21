var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    
    $scope.movieSearch = function(movieTitle){
        $scope.movieTitle = "search"
        
    }
     
    // $scope.firstName = "John";
    // $scope.lastName = "Doe";
    // $scope.names = [{
        //     firstName: "testing1",
        //     lastName: "tester1"
        // }, {
            //     firstName: "testing2",
            //     lastName: "tester2"
            // }, {
                //     firstName: "testing3",
                //     lastName: "tester3"
                // }]
                
                // $scope.myFunction = function () {
                    //     $scope.firstName = "test";
                    //     $scope.lastName = "testing"
                    // }
                    
    $scope.apiCall = function(movieTitle) {

        $http.get("http://www.omdbapi.com/?t=" + movieTitle + "&apikey=24dbfc1d&")
            .then(function(result){
            $scope.names = result.data
            console.log(result.data)
            console.log(movieTitle); 
        })
        $http.get("http://www.omdbapi.com/?s=" + movieTitle + "&apikey=24dbfc1d&")
        .then(function(result) {
            console.log(result);
            
        })
    }

    // $scope.myFunction();
});