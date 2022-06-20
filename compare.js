console.log ("Working")

let x = "this is Ashutosh";
let y = "I love doing cosing but not sure why This is Ashutosh"

compare = ()=> {
    if(y.toLowerCase().includes(x.toLowerCase())) {
        console.log("true")
    }
    else {
        console.log("not working");
    }
}

compare();