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
        // Search for a single movie
        $http.get("http://www.omdbapi.com/?t=" + movieTitle + "&apikey=24dbfc1d&")
            .then(function(result){
            $scope.details = result.data
            console.log(result.data)
        })
        // Search for related titles
        $http.get("http://www.omdbapi.com/?s=" + movieTitle + "&apikey=24dbfc1d&")
        .then(function(result) {
            $scope.related = result.data.Search
            console.log($scope.related);
            
        })
    }

    // $scope.myFunction();
});