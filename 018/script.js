/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
 
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


// Код возьмите из предыдущего домашнего задания


let nubmerOfFilms;

function start() {
    nubmerOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

    while (nubmerOfFilms == '' || nubmerOfFilms == null || isNaN(nubmerOfFilms)) {
        nubmerOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
}
const personalMovieDB = {
    count: nubmerOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотренно слишком мало фильмов");
    } else if (10 < personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    }
}

function rememberMyFilms() {
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
    }
}





//1


//2
function showMyDB(privat) {
    if (personalMovieDB.privat) {
        console.log("true");
    }
    else {
        console.log(personalMovieDB);
        console.log('false');

    }
}
// showMyDB(personalMovieDB.privat);


//3
function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const likeGenres = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i] = likeGenres;
    }

}

// writeYourGenres();
console.log(personalMovieDB);