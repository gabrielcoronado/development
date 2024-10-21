class Course {
    #price;
    get price() {
        console.log("THIS IS THE PRICE", this)

        return '$' + this.#price;
    }
    set price(value) {
        if (value > 1) this.#price = value;
    }

    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.#price = price;
    }

    calculateValue() {
        console.log(`You get ${this.length} Months worth of knowledge for \$${this.#price}.`);
    }
    outputSummary() {
        console.log(`You are looking to enroll in ${this.title} that has a duration of ${this.length} Months for just \$${this.price}. Isn't that incredible ?!`);
    }
}

const course1 = new Course('Course #1', 6, 10500);
const course2 = new Course('Course #2', 4, 10000);

console.log(course1);
course1.calculateValue();
// course1.outputSummary();
//
// console.log(course2);
// course2.calculateValue();
// course2.outputSummary();

class PracticalCourse extends Course {
    constructor(title, length, price, exerciseCount) {
        super(title, length, price);
        this.numOfExercises = exerciseCount;
    }
}

class TheoreticalCourse extends Course {
    constructor(title, length, price) {
        super(title, length, price);
    }
    publish() {
        console.log(`Just prints something to the console.`)
    }
}

const course3 = new PracticalCourse('Course #3', 8, 15000, 5)
const course4 = new TheoreticalCourse('Course #4',  10, 20000);

// console.log(course3)

// console.log(`This course has ${course3.numOfExercises} amount of exercises included!`);
// course3.calculateValue();
// course3.outputSummary();
//
// course4.publish();
// course4.calculateValue();
// course4.outputSummary();