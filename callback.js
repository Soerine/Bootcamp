console.log("---1---");

function mere(torsk) {
    console.log('<p>' + torsk + '</p>');
}
function data(torsk) {
    mere(torsk)
}
data("noget");

console.log("---2---");

function more(element) {
    console.log("fuck you" + element);
}

function op(element) {
    more(element)
}
op(" bitch");

console.log("---3---");

let data = [1, 2, 3, 4, 5, 6];
data.forEach(function (element) {
    console.log(element);
});


