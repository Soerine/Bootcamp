let bool1=true;
if(bool1){
    console.log("hej verden")
}

var tal=4;
console.log(tal);
if(tal > 5){
    console.log("højere end fem")
}else{
    console.log("lavere end fem")
}

let result = tal > 5 ? "højere end fem" : "lavere end fem";
console.log(result);

let drik="lemon";
if(drik == "lemon"){
    console.log("Det the shit");
}else if(drik == "cola"){
    console.log("Ad");
}else if(drik == "satan"){
    console.log("Det slet ikke en drik");
}

switch (drik){
    case "cola":
    console.log("AD");
    break;
    case "satan":
    console.log("Det slet ikke en drik");
    break;
    default:
    console.log("what");
    break;
}