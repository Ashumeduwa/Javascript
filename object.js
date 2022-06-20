// This is a simpla Object
const cars =  {
    name : "Maruti",
    type : "SUV",
    Model : 2014,
    Gear : 'automatic',
    Price : function(oldPrice) {
        return(2000*oldPrice);
    } 
}

// console.log(cars.Price(200));


// Object oriented with constructor , this is very important for constructor else it will not treat is as object
function cars1 (name,speed) {
    this.name = name;
    this.type = "SUV";
    this.Model = 2014;
    this.Gear = "automatic";
    this.maxSpeed = speed;
    this.Price = function(oldPrice) {
        return(2000*oldPrice);
    } 
}

vehicle = new cars1("Mahindra",200);
console.log(vehicle);

