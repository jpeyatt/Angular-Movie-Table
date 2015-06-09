(function () {
    'use strict';

    angular
        .module('AngularTable')
        .service('Movies', [Movies]);


    function Movies(){

       this.getMovies = function () {
         return movies;
       };

    };


    var movies = [
        {
            title: 'The Shawshank Redemption',
            rated: 'R',
            releaseDate: new Date(1994, 9, 4),
            genre: 'Drama',
            director: 'Frank Darabont',
            rating: 9.3
        },
        {
            title: 'The Godfather',
            rated: 'R',
            releaseDate: new Date(1972, 2, 24),
            genre: 'Crime',
            director: 'Francis Ford Coppola',
            rating: 9.2
        },
        {
            title: 'The Dark Knight',
            rated: 'PG-13',
            releaseDate: new Date(2008, 6, 18),
            genre: 'Action',
            director: 'Christopher Nolan',
            rating: 9.0
        },
        {
            title: 'Pulp Fiction',
            rated: 'R',
            releaseDate: new Date(1994, 9, 14),
            genre: 'Crime',
            director: 'Quentin Tarantino',
            rating: 8.9
        },
        {
            title: 'Schindler\'s List',
            rated: 'R',
            releaseDate: new Date(1993, 1, 4),
            genre: 'Biography',
            director: 'Steven Spielberg',
            rating: 8.9
        },
        {
            title: 'The Good, the Bad and the Ugly',
            rated: 'Not Rated',
            releaseDate: new Date(1966, 11, 23),
            genre: 'Western',
            director: 'Sergio Leone',
            rating: 8.9
        },
        {
            title: 'Fight Club',
            rated: 'R',
            releaseDate: new Date(1999, 9, 15),
            genre: 'Drama',
            director: 'David Fincher',
            rating: 8.9
        },
        {
            title: 'Forrest Gump',
            rated: 'PG-13',
            releaseDate: new Date(1994, 7, 6),
            genre: 'Drama',
            director: 'Robert Zemeckis',
            rating: 8.8
        }
    ];


})();