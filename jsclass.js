console.log("This is js class")

class TnM {
    constructor(name, designation, starttime, endTime) {
        this.name = name;
        this.designation = designation;
        this.startTime = starttime;
        this.endTime = endTime;
    }

    salary = (level) => {
        if (this.designation == "developer") {
            return 2000 * level;
        }
        else {
            return 1000;
        }
    }

    static bonus() {
        return 1000
    }
}

let emp = new TnM("Ashutosh", "developer", "Jan", "Feb")
// console.log(emp);

class programmer extends TnM {
    constructor(name, designation, starttime, endTime, notice, leave) {
        super(name, designation, starttime, endTime);
        this.notice = notice;
        this.leave = leave;
    }

    totalLeaves(salary){
        return this.salary;
    }
    
}
let emp1 = new programmer("Ashutosh", "developer", "Jan", "Feb",30,12)
console.log(emp1)