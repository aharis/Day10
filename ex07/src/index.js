
function myFunction(lion) {

    var lion = {

        "name" : "Simba",

        "legs" : 4,

        "teils" : 1,

        "roar" : "Roar-roar"
    }
    

        delete lion.roar;
        
        return lion;
    };



console.log(myFunction());

module.export = myFunction;
