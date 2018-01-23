// Formular
var navn = "";
var alder = "";
var adresse = "";
var fejlbeskeder = "";

if (navn == "") {
    fejlbeskeder += "Du skal udfylde navn feltet\n";

}

if (alder == "") {
    fejlbeskeder += "Du skal udfylde alder feltet\n";
}

if (adresse == "") {
    fejlbeskeder += "Du skal udfylde adresse feltet\n";
}
console.log(fejlbeskeder);

//Fibonacci sekvens

let fbs = function (n) {
    if (n === 1) {
        return [0, 1];
    } else {
        var s = fbs(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};

console.log(fbs(17));

// Palidromer

let isPalindrome = function (str) {
    let strLen = str.length;
    if (strLen === 0 || strLen === 1) {
        return true;
    }

    if (str[0] === str[strLen - 1]) {
        return isPalindrome(str.slice(1, strLen - 1)); //recurtion
    }

    return false;
};

console.log(isPalindrome('eye'));

//Plum Bus

let tre = 3;
let fem = 5;

for (let i = 0; i < 137; i++) {
    let result = "";
    if (i % tre == 0) {
        result = "Plum";
    } if (i % fem == 0) {
        result = "Bus";
    } if (i % (fem * tre) == 0) {
        result = "PlumBus";
    } if (result == "") {
        console.log(i);
    } else {
        console.log(result);
    }
}

for (let i = 1; i <= 137; i++) {
    var output = "";

    if (i % 3 == 0) { output += "Fizz"; }
    if (i % 5 == 0) { output += "Buzz"; }

    if (output == "") { output = i }
    console.log(output);
}

//Fix Koden

var brugernavn = "";
var password = "";
var email = "";

var fejlbeskeder = []

if (brugernavn == "") {
    fejlbeskeder.push("Du skal udfylde brugernavn feltet\n")
}

if (password == "") {
    fejlbeskeder.push("Du skal udfylde password feltet\n")
}

if (email == "") {
    fejlbeskeder.push("Du skal udfylde email feltet\n")

}
console.log(fejlbeskeder);
//Fix koden

function sammensaetTekst(resultat) {
}

var resultat = ("Mickey Mouse");

console.log(resultat); // Forventede resultat: "Mickey Mouse"

//BMI
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Write your age: ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();
});


