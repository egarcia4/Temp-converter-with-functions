function askName() {
    var name = prompt("Enter your name");
    return name
}



function greeting(a) {
    alert(`Welcome, ${a}! I hope you are well.`);
}



var n = askName()



function intro() {
    alert("Let's play a game. This game is to see who gets closer to the number 20 without going over 20. \n\n You will draw numbers 1-10, and the computer will stop drawing at 16. \n\n Pay attention to your number, if you need more numbers, press y.")
}



var i = intro()



function humanTurn() {
    var hum =0;
    do {
        var ran2 = Math.floor(Math.random() * 10) +1

        console.log(ran2);

        hum = hum + ran2

        console.log(hum);

        var humnum = prompt(`Your current number is ${hum}. \n Would you like another number? (y or n)  \n If you go over 20, you will lose`); 

        if (hum >= 21){
            humnum = "n";
        }

    } while (humnum != "n") 


    if (hum > 20) {
        alert ("You went over 20. I win")
        
        
    } else {

    alert (`Your final number is ${hum}`);
    }
}



var h = humanTurn()

console.log(h)



function computerTurn(){
    var comp = 0;

    do {

        var ran = Math.floor(Math.random() * 10) +1

        console.log(ran);

        comp = comp + ran

        console.log(comp)
    

    } while (comp <= 16) {

        alert(`My number is ${comp}`)

    }

    if (comp > 20) {

        alert ("I went over 20. You win.")
        

    } else {

        alert ("Lets tally up")
    }
}



var c = computerTurn()



function compareNumbers(name, hum, comp ) {
    if (comp > 20) {
        
        alert(`My number was ${comp}. Since I went over 20, you win. `);
        h++


    }else if (hum > 20){

        alert(`Your number was ${hum}. Since you went over 20, I win. `);
        c++
    

    }else if (20 >= hum > comp) {

        alert(`The score was Human: ${hum} to Computer: ${comp}. You win. `);
        h++

    } else if (hum < comp <= 20) {

        alert(`The score was Human: ${hum} to Computer: ${comp}. I win. `);
        c++

    } else if (hum == comp) {

        alert(`The score was Human: ${hum} to Computer: ${comp}. We tied. Both get points. `);
        c++
        h++

    }
}

var cN = compareNumbers()



