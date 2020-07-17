let user = prompt("Enter your mark for alloting the grade");
let grade = function(){
    if (user>=90) {
        console.log("Marks are "+user+" and grade is A")
    }
    else if (user>=80) {
        console.log("Marks are "+user+" and grade is B")
    }
    else if (user>=70) {
        console.log("Marks are "+user+" and grade is C+")
    }
    else if (user>=60) {
        console.log("Marks are "+user+" and grade is C")
    }
    else if (user>=50) {
        console.log("Marks are "+user+" and grade is D+")
    }
    else if (user>=40) {
        console.log("Marks are "+user+" and grade is D")
    }
    else {
        console.log("Marks are "+user+" and grade is F")
    }

}

grade(user);