const items = [
// 日  月  火  水  木  金  土
    [14, 93, 89, 51, 85, 59, 33],
    [69, 27, 40, 76, 25, 21, 55],
    [55, 60, 3, 28, 49, 5, 91],
    [19, 56, 92, 66, 53, 80, 13],
]

// forEachを使用した記述
const sums = items.map((item) => {
    let sum = 0;
    item.forEach(score => {
            sum = sum + score;
        }
    )
    return sum;
})
console.log(sums) //=> [424, 313, 291, 379]

// 色々な記述方法-----------------------------------------------------------------------------------

// forを使用した記述
const sums1 = items.map((item) => {
    let sum = 0;
    for (let i = 0; i < item.length; i++) {
        sum += item[i];
    }
    return sum;
})
console.log(sums1)

// reduceを使用した記述 1
const sums2 = items.map((item) => {
    return item.reduce((x, y) => x + y);
})
console.log(sums2)

// reduceを使用した記述 2
const reducer = (x, y) => {
    return x + y;
}

const sums3 = items.map((item) => {
    return item.reduce(reducer);
})
console.log(sums3)
