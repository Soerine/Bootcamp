# Funktioner
En funktion er en blok af kode, som er samlet under et navn, funktioner udføres når de bliver kaldt. 

## Argumenter og parametre
Parametre skrives i paranteserne, lige efter funktionsnavnet:

```javascript 
function test(parameter){

} 
```

Argumenter er data, som funktionen kan behandle:

```javascript 
function iKroner(pris){
   console.log(pris + ' kr.');
} 
```

## Return
Return statementet stopper udførelsen af funktionen og retunerer en værdi fra denne funktion.

```Javascript
function safeMultiply(x, y) {
   if (!isNaN(x) || !isNaN(y)) {
      return 0; //Hvis denne condition er opfyldt skal "0" retuneres
   } else {
      return x * y; //Hvis den ovenstående condition IKKE er opfyldt, retuneres "x * y" 
   }
}
```



