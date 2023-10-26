const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

let prevSecond = 0;

function setDate(){
    const now = new Date();
    const second = now.getSeconds();
    const secondDegrees = ((second/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
   
    if (second < prevSecond) {
        // If second hand has completed a full rotation (from 59 to 0 seconds)
        // Adjust the minute and hour hands accordingly
        const minDegrees = ((now.getMinutes() / 60) * 360) + 90;
        minHand.style.transform = `rotate(${minDegrees}deg`;

        const hourDegrees = ((now.getHours() / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hourDegrees}deg`;
        count++;
    }
    
    prevSecond = second; // Update the previous second value
}

setInterval(setDate, 1000);