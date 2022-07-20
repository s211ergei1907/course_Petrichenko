
const nubmerOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
const personalMovieDB = {
    count: nubmerOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};



if (personalMovieDB.count < 10) {
    alert("Просмотренно слишком мало фильмов");
} else if (10 < personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
}


//
for (let i = 0; i < nubmerOfFilms; i++) {

    const lastFilm = prompt("Один из последних просмотренных фильмов?");
    const gradeLastFilm = +prompt(`Оцените фильм ${lastFilm}?`);

    if (lastFilm !== null && gradeLastFilm !== null && lastFilm !== '' && gradeLastFilm !== '' && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = gradeLastFilm;
        console.log('done');
    } else {
        console.log('error');
        // Один цикл назад
        i--;
    }


    // if(){

    // }else{

    // }

}

//Мой вариант
// personalMovieDB.movies = {
//     [lastFilm]: gradeLastFilm,
//     [lastFilm2]: gradeLastFilm2
// };
//Вариант в видео [ключ] = значение



console.log(personalMovieDB);
console.log(personalMovieDB.movies);

