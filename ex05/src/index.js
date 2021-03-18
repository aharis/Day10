// Create school object here

var school = {

    "name" : "Arena",

    "location" : "Sarajevo",

    "established" : 2020
};

// End of school object

// Only change code below this line 

function myFunction(name) {

    school.name = "Paragon";

    return school;
}

console.log(myFunction());

// Only change code above this line

module.exports = {school, myFunction};