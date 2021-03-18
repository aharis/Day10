// Only change code below this line 
var myClothes = {

    hat : "Fedora",

    shirt : "Nike",

    shoese : "Converse"
};

function myFunction(myObj) {

    var hatValue = myObj.hat;

    var shirtValue = myObj.shirt;

    var shoeseValue = myObj.shoese;

    return {hatValue, shirtValue, shoeseValue};
};

// Only change code above this line

console.log(myFunction(myClothes));

module.exports = myFunction(myClothes);