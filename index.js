let timeDisplay = document.getElementById('time-display');
// let hour =  document.getElementById('four');


function displayTime(){
    let rightNow = moment().format('hh:mm:ss a');
    timeDisplay.textContent = rightNow;
}

// let thirdHour = moment().format('h');
// console.log(thirdHour);
// console.log(hour.innerText);

// if(hour.innerText === thirdHour){
//     console.log(true);
//     console.log("Hello")
// }

setInterval(displayTime, 1000);