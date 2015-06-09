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
            genre: 'Drama',
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
        },
        {
            title: 'Inception',
            rated: 'PG-13',
            releaseDate: new Date(2010, 6, 16),
            genre: 'Action',
            director: 'Christopher Nolan',
            rating: 8.8
        },
        {
            title: 'Goodfellas',
            rated: 'R',
            releaseDate: new Date(1990, 8, 21),
            genre: 'Crime',
            director: 'Martin Scorsese',
            rating: 8.7
        },
        {
            title: 'The Matrix',
            rated: 'R',
            releaseDate: new Date(1999, 2, 31),
            genre: 'Sci-Fi',
            director: 'The Wachowski Brothers',
            rating: 8.7
        },
        {
            title: 'Se7en',
            rated: 'R',
            releaseDate: new Date(1995, 8, 22),
            genre: 'Drama',
            director: 'David Fincher',
            rating: 8.7
        },
        {
            title: 'Interstellar',
            rated: 'PG-13',
            releaseDate: new Date(2014, 11, 7),
            genre: 'Sci-Fi',
            director: 'Christopher Nolan',
            rating: 8.7
        },
        {
            title: 'American History X',
            rated: 'R',
            releaseDate: new Date(1998, 10, 20),
            genre: 'Crime',
            director: 'Tony Kaye',
            rating: 8.6
        },
        {
            title: 'The Green Mile',
            rated: 'R',
            releaseDate: new Date(1999, 11, 10),
            genre: 'Drama',
            director: 'Frank Darabont',
            rating: 8.5
        },
        {
            title: 'The Pianist',
            rated: 'R',
            releaseDate: new Date(2002, 2, 28),
            genre: 'Drama',
            director: 'Roman Polanski',
            rating: 8.5
        },
        {
            title: 'Gladiator',
            rated: 'R',
            releaseDate: new Date(2000, 4, 5),
            genre: 'Action',
            director: 'Ridley Scott',
            rating: 8.5
        },
        {
            title: 'Mad Max: Fury Road',
            rated: 'R',
            releaseDate: new Date(2015, 4, 15),
            genre: 'Action',
            director: 'George Miller',
            rating: 8.6
        }
    ];


})();