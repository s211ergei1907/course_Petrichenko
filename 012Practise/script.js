
const nubmerOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");


const personalMovieDB = {
    count: nubmerOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


const lastFilm = prompt("Один из последних просмотренных фильмов?");
const gradeLastFilm = +prompt(`Оцените фильм ${lastFilm}?`);
const lastFilm2 = prompt("Один из последних просмотренных фильмов?");
const gradeLastFilm2 = +prompt(`Оцените фильм ${lastFilm2}?`);
//Мой вариант
// personalMovieDB.movies = {
//     [lastFilm]: gradeLastFilm,
//     [lastFilm2]: gradeLastFilm2
// };
//Вариант в видео [ключ] = значение
personalMovieDB.movies[lastFilm] = gradeLastFilm;
personalMovieDB.movies[lastFilm2] = gradeLastFilm2;
console.log(personalMovieDB);
console.log(personalMovieDB.movies);

