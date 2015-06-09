(function () {
    'use strict';

    angular
        .module('AngularTable')
        .controller('AngularTableCtrl', ['$scope', 'Movies', AngularTableCtrl]);


    function AngularTableCtrl($scope, Movies){

        $scope.movies = Movies.getMovies();

        $scope.sort = function (column) {
            $scope.sortColumn = column;
            $scope.reverse = !$scope.reverse;
        }

    };

})();