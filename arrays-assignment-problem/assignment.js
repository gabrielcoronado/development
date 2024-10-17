const arr = [1,2,3,4,5,6,7,8,9];

const greaterThanFive = arr.filter(x => x > 5);
console.log(greaterThanFive);

const mapArr = greaterThanFive.map(x => ({num: x}));
console.log(mapArr);

const reduceArr = mapArr.reduce((a, b) => a * b.num, 1);
console.log(reduceArr);

const finalResult = arr.filter(x => x > 5).map(x => ({num: x})).reduce((a, b) => a * b.num, 1)  ;
console.log(finalResult);

const findMax = (...arr) => {
    let Max = arr[0];
    let Min = arr[0];

    for (const num of arr) {
        if(num > Max) {
            Max = num;
        }
        if(num < Min) {
            Min = num;
        }
    }
    return [Min, Min];
}

console.log(findMax(...arr));

