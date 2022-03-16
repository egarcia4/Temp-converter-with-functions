

    var store = ["apple", "apples", "banana", "bananas", "blueberry", "blueberries", "tangerine", "tangerines", "orange", "oranges"];

    alert("Welcome to Las Frutitas. We try to have fruits.");

do {
    var storeItems = prompt("Enter a fruit name to see if we have it in stock");

    for (var i=0; i < store.length; i++) {

        if (storeItems == store[i]) {
            var correctItems = (`${storeItems}`)
            alert(`Yes, we do carry ${correctItems} at Las Frutitas`);
            break;
        }
    
    }

    if (storeItems != store[i]) {
        alert(`Sorry, we do not carry ${storeItems} at Las Frutitas`);
    }

    var word = prompt("Would you like to keep shopping (yes or no)?");

} while (word != "no")

alert("Thank you for shopping. Bye bye!!!");
