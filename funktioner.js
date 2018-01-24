console.log("---Nr 1---");
function tal(x, y) {
    return x * y;
}

console.log(tal(4, 8))

console.log("---Nr 2---");

function safeMultiply(x, y) {
    if (isNaN(x) || isNaN(y)) {
        return 0;
    } else {
        return x * y;
    }
}
console.log(safeMultiply(8, 9))

console.log("---Nr 3---");

function again(x, y) {
    if ((isNaN(x) || isNaN(y)) && (x == undefined || y == undefined)) {
        return 0;
    } else {
        return x * y;
    }
}
console.log(again(34, 5))

console.log("---Note---");

function iKroner(pris, format) {
    if (isNaN(pris)) {
        console.log("no")
    } else {
        console.log(pris + "kr.")
    }
} iKroner("234")








