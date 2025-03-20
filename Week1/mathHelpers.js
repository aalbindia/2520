function squareRoot(value) {
    return Math.sqrt(value);

}

/*const squareRoot = n => Math.sqrt(n); */

function square (value ) {
    return value * value;

}
//const square = n => value * value

function distance (x_2, x_1, y_2, y_1) {
    const x = x_2 - x_1
    const y = y_2 - y_1
    return squareRoot(square(x) + square(y));

}
/*
const distance = (x1,y1, x2, y2) => {
    squareRoot(square(x2 - x1) + square(y2 - y1));
}
*/

module.exports = { square, squareRoot, distance };