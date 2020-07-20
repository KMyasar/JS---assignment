const student = {
    name : "Helsinki",
    age : 40,
    series : "Money heist",
    project :{
        common : "heist",
        main_work : "drilling"
    }
}

const {name, age, series,project, project:{common,main_work}} = student;
let user = prompt("What you want from in this page");
switch (user.toUpperCase(user)){
    case "NAME":
        console.log(name);
        break;
    case "AGE":
        console.log(age);
        break;
    case "SERIES":
        console.log(series);
        break;
    case "PROJECT":
        console.log(project);    
        break;
    case "COMMON":
        console.log(common);
        break;
    case "MAIN_WORK":
        console.log(main_work);
        break;
    default:
        console.log("your option was wrong");
        break;
}