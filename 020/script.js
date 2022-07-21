//Объекты и деструктуризация объектов

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bc: 'red'
    },
    //Мы создали метод, который будет работать внутри options
    makeTest: () => console.log('test'),

};
//Вызов метода
options.makeTest();

//Перебор объекта
// for (let key in options) {
//     console.log(`Ключи:  ${key}  Значение: ${options[key]}`);
// }



// Счётчик - скольво свойств внутр

let counter = 0;

//Перебор объекта с учетом вложенности(чтобы не выдавало object как в примере выше)

// for (let key in options) {
//     if (typeof (options[key] === 'object')) {
//         for (let i in options[key]) {
//             console.log(`Ключи:  ${i}  Значение: ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Ключи:  ${key}  Значение: ${options[key]}`);

//     }
//     counter++;
// }
// console.log(counter);

//Методы объекта 
// Метод Object.keys() создает массив ключей объекта.
// Создайте объект и отобразите его массив ключей.
console.log(Object.keys(options));
//Добавим length, чтобы получить кол-во элементов в этом массиве
console.log(Object.keys(options).length - 1);

//Деструктурищация объектов
//Вытаскиваем свойства в качестве отдельной переменной
const { border, bc } = options.colors;
console.log(bc);
