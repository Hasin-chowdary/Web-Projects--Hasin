const monthel= document.getElementById("month-name")

const dayel= document.getElementById("day-name")

const daynum= document.getElementById("day-number")

const yearel= document.getElementById("year-number")

const date= new Date();
const month1 = date.getMonth();
monthel.innerText=date.toLocaleString("en",{
    month:"long"
}) 

dayel.innerText= date.toLocaleString("en",{
    weekday:"long"
})
daynum.innerText=date.getDate();
yearel.innerText=date.getFullYear();

