// ООП и классы в JavaScript


class Car {
    #vin;
    constructor(brand, model, year, price, speed, vin) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
        this.speed = speed
        this.#vin = vin;
    }
    showInfo() {
        console.log(`Марка: ${this.brand}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Год: ${this.year}`);
        console.log(`Стоимость: ${this.price}`);
        console.log(`Макс.скорость: ${this.speed}`);
    }
    getVin() {
        console.log(`VIN: ${this.#vin}`)
    }
}

const myCar1 = new Car("BMW", "X7 series", 2023, "35000$", 220, "12345");
const myCar2 = new Car("Volkswagen", "Tiguan", 2023, "8000$", 180, "12345");
myCar1.showInfo();
console.log("---------------");
myCar2.showInfo();
console.log("---------------");
myCar1.speed = 240;
myCar1.price = "37000$";
myCar1.showInfo();
// console.log(myCar1.#vin);
myCar1.getVin();

// задание - добавить 1 скрытое свойство, 2 новых свойства, 1 метод
// и сделать математическое выражение в новом методе

