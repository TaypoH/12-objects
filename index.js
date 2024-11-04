// 1.
/*
const user = {
    name: 'Andrey',
    surname: 'Shalkov',
    email: 'merkantiln@gmail.com',
    password: 'qwerty1234',
    tel: '+380995101851',
    adress: {
        city: 'Zaporizhzhya',
        street: 'Haharina',
        building: 53,
        apartment: 21
    }
}
*/


// 2.
/*
function greetingUser(user) {
    alert(`Доброго дня, ${user.name} ${user.surname}`)
}

const user = {
    name: 'Андрій',
    surname: 'Шалков',
}

greetingUser(user);
*/


// 3.
/*
const book = {
    title: 'The Witcher',
    author: 'Andrzej Sapkowski',
    year: 2016,
    price: 475
}

function getKey(object) {
    for (let key in object) {
    console.log(`${key} ---> ${object[key]}`);
    }
}

getKey(book);
*/


// 4.
/*
const car = {
    color: 'black',
    model: 'M5 F90',
    brand: 'BMW',
    engine: 4.4,
    passengers: 5,
    speed: 0,
    maxSpeed: 305,
    accelerate: function(accelerate) {
        car.speed = car.speed + accelerate;
        if(car.speed >= car.maxSpeed) {
            car.speed = car.maxSpeed;
        }
        return car.speed;
    },
    deccelerate: function(deaccelerate) {
        car.speed = car.speed - deaccelerate;
        if(car.speed < 0) {
            car.speed = 0
        }
        return car.speed;
    },
    stop: function() {
        car.speed = 0;
        return car.speed;
    }
}
*/


// 5.
function Car(color, model, brand, engine, passengers, speed, maxSpeed) {
    this.color = color;
    this.model = model;
    this.brand = brand;
    this.engine = engine;
    this.passengers = passengers;
    this.speed = speed;
    this.maxSpeed = maxSpeed;
    
    this.accelerate = function(accelerate) {
        this.speed = this.speed + accelerate;
        if(this.speed >= this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        return this.speed;
    }
    this.deccelerate = function(deaccelerate) {
        this.speed = this.speed - deaccelerate;
        if(this.speed < 0) {
            this.speed = 0
        }
        return this.speed;
    }
    this.stop = function() {
        this.speed = 0;
        return this.speed;
    }
}

const bmw = new Car('Gray', 'M5 F90', 'BMW', 4.4, 5, 0, 305)
console.log(bmw.accelerate(200)); 
console.log(bmw.deccelerate(50));
console.log(bmw.stop());

const golf = new Car('White', 'Golf VII', 'Volkswagen', 2, 5, 0, 240)
console.log(golf.accelerate(180)); 
console.log(golf.deccelerate(50));
console.log(golf.stop());