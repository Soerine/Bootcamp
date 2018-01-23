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

function sammensaetTekst(forste, anden) {
    return forste + " " + anden;
}

var resultat = sammensaetTekst("Mickey", "Mouse");

console.log(resultat); // Forventede resultat: "Mickey Mouse"

console.log(resultat); // Forventede resultat: "Mickey Mouse"

console.log("----BMI----")
let weight = 70;
let height = 182;
function bmi(weight, height) {
    let result = weight / (height / 100 * height / 100);
    console.log(result);
    if (result < 18.5) {
        console.log("undervægtig");
    } if (result >= 18.5 && result < 24.9) {
        console.log("normalvægtig");
    } if (result > 25 && result < 29.9) {
        console.log("overvægtig");
    } if (result > 30 && result < 39.9) {
        console.log("fedme");
    } if (result > 39.9) {
        console.log("svær fedme");
    }
}
bmi(weight, height);

console.log("---Valuta format---");
function valuta(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") //regular expression

}
console.log(valuta(2355));

console.log("---Mellemrum---");

let str = " ollo "
function fjernMellemrumFoerOgEfter() {

    str = str.replace(/\s/g, '');
}
fjernMellemrumFoerOgEfter()
console.log(str);

console.log("---Lig eller Ulig---");

console.log("---Even or Odd---");

function EvenOrOdd(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(EvenOrOdd(8));

console.log("---Roulette Array---");

let color = ["green", "red", "pink"];//array med tilfældige farver.
function roulette(n, arr) {//opretter en funktion, som har to parametre, den første symboliserer tallet og den anden kalder arrayet.
    return arr[n % arr.length];//her bruges return funkionen til at kalde arr, n kombineret med modulus skaber en cirkel. Således at tallende i arrayet starter forfra, når arrayet slutter.
}
console.log(roulette(7, color));//kald funktionen, skriv nummer, som refererer til en farve i arrayet. 
console.log("---Vinkel 360---");
function vinkel(tal) {
    return tal % 360;
} console.log(vinkel(725));


console.log("---Afstand 2D---");
