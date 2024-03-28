let timeDisplay = document.getElementById('time-display');
// let four =  document.getElementById('four');
// let ten = document.getElementById('ten');
let eleven = document.getElementById('11');
let text9 = document.getElementById('text-nine');
let text10 = document.getElementById('text-ten');
let text11 = document.getElementById('text-eleven');


function displayTime(){
    let rightNow = moment().format('hh:mm:ss a');
    timeDisplay.textContent = rightNow;
}

let hour = moment().format('h');
// console.log(thirdHour);
// console.log(hour.innerText);

if(eleven > hour){
    console.log(true);
    console.log("Hello")
    text11.classList.add("future");
}



setInterval(displayTime, 1000);