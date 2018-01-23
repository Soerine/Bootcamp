let result = tal(9, 3);//Her får x og y en værdi
function tal(x, y) {
    console.log(x * y);
}

tal(3, 9);
function tal(x, y) {
    if (!isNaN(x) || !isNaN(y)) {
        return 0;
    } else {
        return x * y;
    }
} console.log(tal('tal', 9));






