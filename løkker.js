let i=1;

for(i; i<26; i++){
    console.log(i)
}

let limit=26;
let p=0;
let q=0;
let text= "";

while(p<limit){
    p++;
    console.log("number " + (limit - p));
}
do{
    q++;
    console.log("nummer " + (limit - q));
}while (q < limit);

let y=2017;
for(y; y>1916; y--){
    console.log(y)
}

let days= Array("mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag", "søndag");
for(let t=0; t <days.length; t++){
    console.log(days[t]);
}

let names = ["Bo", "Alice", "Karsten", "Pia", "Lis", "Bob", "Andy", "Jack"];

names.forEach(name => {
    console.log(name);
});

let artists = ["50cent", "Ritalin", "Tove Lo", "Danzig"];
artists.forEach(function(artist, index, arr){
    console.log(artist + " har placering " + index);
});

let tal=[6, 10, 25, 3434, 234, 563, 2324, 569, 534, 23455]
tal.forEach(function(ta, index, arr){
   if(ta > tal[index+1]){
       console.log(ta + " er større end " + tal[index+1]);
   }else{
       console.log(ta + " er mindre end " + tal[index+1]);
     }
});


    
