//!Передача данных по ссылке или по значению

//Изменяя что-то внутри copy мы модифицируем наш начальный объект, так делать нельзя, потому что obj тоже меняется
const obj = {
    a: 5,
    b: 1
};
// Передача значения по ссылке(передает ссылку)
// const copy1 = obj;
// copy1.a = 10;
// console.log(copy1, obj);


//Как создавать реальную копию не по ссылке?
//!Клонирование объекта\
//Повверхостная копия объекта
// function copy(mainObj) {
//     let objCopy = {};

//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }

};

// const copyNumber = copy(numbers);
// console.log(copyNumber);

//!Соединение двух объектов КОПИРОВАНИЕ ЧЕРЕЗ МЕТОД(ПОВЕРХОСТНАЯ КОПИЯ)
// Мы хотим соединить объект add с объектом Numbers
//Object.assign()
//1 аргумент объект в который мы хотим поместить
//2 аргумент объект из которого берем
// const add = {
//     d: 17,
//     e: 20
// };

//Точно также можно передать первым аргументом пустой объект и тогда это уже будет полнцоценная копия

// const goodCopy = Object.assign({}, add);
// goodCopy.d = 20;

// console.log(add, goodCopy);

// //!Копия массива
// const oldArray = ['a', 'b', 'c',];
// const newArray = oldArray.slice();
// newArray.push('Заебали комары, заебали мошки, а какой-то хуй хлопает в ладошки');
// console.log(oldArray, newArray);


//!Оператор разворота spread ...
// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);

}
const num = [2, 5, 7]
log(...num);

//Копия с помощью spread оператора 
const array = ['a', 'b'];
const newAarray = [...array];

const q = {
    one: 1,
    two: 2
}
const newObj = { ...q }
