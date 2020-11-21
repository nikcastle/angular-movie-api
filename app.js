var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
              
    $scope.apiCall = function(movieTitle) {
        // Search for a single movie
        $http.get("http://www.omdbapi.com/?t=" + movieTitle + "&plot=full&apikey=24dbfc1d&")
            .then(function(result){
            $scope.details = result.data
            // console.log(result.data)
        })

        // Search for related titles
        $http.get("http://www.omdbapi.com/?s=" + movieTitle + "&apikey=24dbfc1d&")
        .then(function(result) {
            $scope.related = result.data.Search
            // console.log($scope.related);
            
        })
    };

    $scope.newSearch = function(movie) {
        $http.get("http://www.omdbapi.com/?t=" + movie + "&plot=full&apikey=24dbfc1d&")
            .then(function(result){
            $scope.details = result.data
            // console.log(result.data)
        })
    };

    $scope.advanced = function(data) {
        $http.get("http://www.omdbapi.com/?t=" + data.title + "&type=" + data.type +"&plot=full&apikey=24dbfc1d&")
            .then(function(result){
            $scope.details = result.data
            // console.log(result.data)
        })
    }
});