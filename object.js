// ОБЪЕКТЫ В JAVASCRIPT

// const car = {
//     brand: "BMW",
//     model: "7 series",
//     color: "black",
//     year: 2015,
//     price: 35000,
//     valid: true,
// }

// console.log(car.brand)
// console.log(car.color)

// let priceCar = "price";
// console.log(car[priceCar])

// поменять значение свойства объекта
// car.color = "red";
// console.log(car.color)

// добавление нового свойства в объект
// car.id = 777
// console.log(car)


// новый объект, объект внутри объекта
const user = {
    name: "Viktor",
    age: 28,
    skills: ["HTML", "CSS", "REACT", "JS", "TS"],
    address: {
        city: "Sochi",
        street: "Gorkogo"
    },
    sayHello: function() {
        console.log("Привет, " + this.name)
    }
}

console.log(user);
console.log(user.name);
console.log(user.skills[0]);
console.log(user.skills[4]);
console.log(user.address.city);

// console.log(user.sayHello);
user.sayHello();

// for ... in ... 
// перебор свойств объекта
for (const key in user) {
    console.log(key, user[key]);
}

// СОЗДАТЬ ОБЪЕКТ - ТЕМАТИКА ПО ЛИЧНОМУ УСМОТРЕНИЮ
// СДЕЛАТЬ 5 СВОЙСТВ + 2 МЕТОДА
// ДОЛЖЕН БЫТЬ МАССИВ В ЗНАЧЕНИИ СВОЙСТВА И ОБЪЕКТ В ОБЪЕКТЕ

// СОЗДАТЬ ОБЪЕКТ СПОРТСМЕНА
// который хранит имя атлета и количество тренировок
// Добавить метод, выводящий сообщение
// об активности спортсмена

