// Create school object here

var lion = {

    "name" : "Simba",

    "legs" : 4,

    "tails" : 1
}
// End of school object


// Only change code below this line 

function myFunction(a, b) {

    lion["roar"] = "roar-roar";

    return lion;
    }


// Only change code above this line

 console.log(myFunction());

 module.exports = myFunction;