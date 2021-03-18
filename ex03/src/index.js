// Only change code below this line 

var {vegetable: cerrot, fruit: orange, drink: water} = myFood;

function myFunction(myObj) {

    var vegetableValue = myObj["vegetable"];

    var fruitValue = myObj["fruit"];

    var drinkValue = myObj["drink"];

    

    return {vegetableValue, fruitValue, drinkValue};

};

// Only change code above this line

console.log(myFunction(myObj));

module.exports = myFunction(myFood);