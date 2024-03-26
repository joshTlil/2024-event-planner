let timeDisplay = document.getElementById('time-display');


function displayTime(){
    let rightNow = moment().format('hh:mm:ss a');
    timeDisplay.textContent = rightNow;
}

setInterval(displayTime, 1000);