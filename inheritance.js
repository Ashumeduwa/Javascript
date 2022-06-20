// using prottype we can create executable object functions

function allcars (name,speed) {
    this.name = name;
    this.type = "SUV";
    this.Model = 2014;
    this.Gear = "automatic";
    this.maxSpeed = speed;
    this.Price = function(oldPrice) {
        return(2000*oldPrice);
    } 
}

allcars.prototype.getName = function (){
return this.name
}

// let mycar = new allcars("Suzuki",400);
// console.log(mycar.getName()) //This will print Suzuki ; getname is now a new protoype
// console.log(mycar.name); //This will print Suzuki

// So basically we can get name value by two function now, 1 is mycar.name and 2nd is mycar.getName()

function carData (name, speed, milage){
    allcars.call(this,name,speed);
    this.milage = milage;
}

carData.prototype = Object.create(allcars.prototype);

let myNewCar = new carData("Suzuki",400,12);
console.log (myNewCar); //it will return same


