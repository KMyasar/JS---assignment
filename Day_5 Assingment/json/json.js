fetch("https://jsonplaceholder.typicode.com/todos")
.then(response=>response.json())
.then(data=>console.log(data))

let obj = {
    userId:254,
    title:"Some Title",
    body:"lorem ipsum",
}

fetch("https://jsonplaceholder.typicode.com/todos",{
    method:'post',
    body: JSON.stringify(obj)
}).then(response=>response.json())
.then(data=>console.log(data))

async function fetchi(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    console.log(data);
}

fetchi();
