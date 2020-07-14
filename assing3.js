var year = new Date();
var file = year.getMonth()+"/"+year.getDay()+"/"+year.getFullYear()
var file2 = year.getDay()+"/"+year.getMonth()+"/"+year.getFullYear()
document.write(file)
document.getElementById("yearmod").innerHTML= file2 