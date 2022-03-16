var name = prompt("What is your name?");

alert(`Hello ${name}`);

var temp = prompt(`${name}, enter a tempurature in celcius.`);

var convert = (`${temp}`) * 9 / 5 + 32

alert(`${name}, the tempurature from ${temp}° celcius is ${convert}° farenheight`)