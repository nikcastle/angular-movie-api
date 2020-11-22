var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {

    $(".advanced-card").hide();
    
              
    $scope.apiCall = function(movieTitle) {
        // Search for a single movie
        $(".homepage").hide();
        
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

    // Run search again when related title is clicked
    $scope.newSearch = function(movie) {
        $http.get("http://www.omdbapi.com/?t=" + movie + "&plot=full&apikey=24dbfc1d&")
            .then(function(result){
            $scope.details = result.data
            // console.log(result.data)
        })
    };

    // Advanced search using more parameters
    $scope.advanced = function(user) {
        var url;
        var title = user.title.split(" ").join("+")
        
        if(user.year) {
            url = "http://www.omdbapi.com/?t=" + title + "&type=" + user.select + "&y=" + user.year +"&plot=full&apikey=24dbfc1d&"
        } else {
            url = "http://www.omdbapi.com/?t=" + title + "&type=" + user.select + "&plot=full&apikey=24dbfc1d&"
        }

        console.log(user)

        console.log(url);

        $http.get(url)
            .then(function(result){
            $scope.details = result.data
            console.log(result.data)
        })  

    }

    $scope.showAdvanced = function () {
        $(".advanced-card").show();
    }
  
});