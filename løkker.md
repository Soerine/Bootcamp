# Løkker

## For
for løkke. 
Løkke igennem en kode et vist antal gange. 

let i=1;

for(i; i<26; i++){

    console.log(i)
}

## While
while løkke. Løkke igennem en kode hvis specifikke betingelser er opfyldt.

let limit=26;

let p=0;

while(p<limit){
   
 p++;

    console.log("number " + (limit - p));
}

## Do + While

Do/while løkke. Løkke igennem en kode hvis specifikke betingelser er opfyldt.

let limit=26;

let q=0;

do{

    q++;

    console.log("nummer " + (limit - q));
}while (q < limit);

## ForEach
ForEach løkke. Denne metode stiller en funktion til rådighed en gang for hvert element i et array - i orden. 

let names = ["Bo", "Alice", "Karsten", "Pia", "Lis", "Bob", "Andy", "Jack"];

names.forEach(name => {
    
    console.log(name);
});