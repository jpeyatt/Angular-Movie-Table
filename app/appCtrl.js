(function () {
    'use strict';

    angular
        .module('AngularTable')
        .controller('AngularTableCtrl', ['$scope','$q', '$timeout', 'Movies', AngularTableCtrl]);


    function AngularTableCtrl($scope, $q, $timeout, Movies){

        $scope.loading = true;

        function MoviesAsync(data){
            return $q(function(resolve, reject){
                $timeout(function(){
                    resolve(data);
                }, 1000)
            });
        };

        MoviesAsync(Movies.getMovies())
            .then(function(data){
                $scope.movies = data;
                $scope.loading = false;
            });

        // Default sort column is release date & reversed
        $scope.sortColumn = 'releaseDate';
        $scope.reverse = true;
        $scope.sort = function (column) {
            $scope.sortColumn = column;
            $scope.reverse = !$scope.reverse;
        };

    };

})();