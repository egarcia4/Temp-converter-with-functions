/*
var celcius = "c" ;
var farenheight = "f" ;


var name = prompt("What is your name?");

alert(`Hello ${name}`);

var corf = prompt("If you would like to convert celcius to farenheight, type f ; If you would like to convert farenheight to celcius, type c ");

if (corf == celcius) {
    alert("You have chosen to convert farenheight to celcius");
    var fvalue = prompt("What is the value of farenheight you want to convert?");

    if (isNaN(fvalue) == true) {
        alert(`You did not type a number. This program will end. Goodbye ${name}`)
    }

    else if ( isNaN(fvalue) == false) {
        var convert1 = ((`${fvalue}`) - 32) * 5 / 9
    alert(`${name}, the tempurature from ${fvalue}° farenheight is ${convert1}° celcius`);
    }



} else if  (corf == farenheight) {
    alert("You have chosen to convert celcius to farenheight");
    var cvalue = prompt("What is the value of celcius you want to convert?");

    if ( isNaN(cvalue) == true) {
        alert(`You did not type a number. This program will end. Goodbye ${name}`)
    }

    else if ( isNaN(cvalue) == false) {
    var convert2 = (`${cvalue}`) * 9 / 5 + 32
    alert(`${name}, the tempurature from ${cvalue}° celcius is ${convert2}° farenheight`);
    }

    

} else if (corf != farenheight || celcius) {
    alert(`You did not type in the correct letter. The program will end now. Goodbye ${name}`);

}

*/

/*
var celcius = "c" ;
var farenheight = "f" ;
var leave = "exit" ;

var name = prompt("What is your name?");

alert(`Hello ${name}`);

do {

    var corf = prompt("If you would like to convert celcius to farenheight, type f ; If you would like to convert farenheight to celcius, type c ; to leave, type exit ");

} while    ( (corf != celcius) && (corf != farenheight) && (corf != leave) )  ;

if (corf == celcius) {
    alert("You have chosen to convert farenheight to celcius");

do {

    var fvalue = prompt("What is the value of farenheight you want to convert?");

} while  ( isNaN(fvalue) != false ) ;

    var convert1 = ((`${fvalue}`) - 32) * 5 / 9
    alert(`${name}, the tempurature from ${fvalue}° farenheight is ${convert1}° celcius`);


} else if  (corf == farenheight) {
    alert("You have chosen to convert celcius to farenheight");

do {
    var cvalue = prompt("What is the value of celcius you want to convert?");

} while ( isNaN(cvalue) != false ) ;
    var convert2 = (`${cvalue}`) * 9 / 5 + 32
    alert(`${name}, the tempurature from ${cvalue}° cel cius is ${convert2}° farenheight`);
}

*/

for (var i=0; i<=100; i=i+1)

console.log(i);