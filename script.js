const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");


function updateClock() {

    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();


    /*
        HOUR HAND

        12 hours = 360°
        1 hour = 30°

        We also add the minutes so that
        the hour hand moves smoothly.
    */

    const hourDegree =
        (hours % 12) * 30 +
        minutes * 0.5;


    /*
        MINUTE HAND

        60 minutes = 360°
        1 minute = 6°

        Seconds are included for smooth movement.
    */

    const minuteDegree =
        minutes * 6 +
        seconds * 0.1;


    /*
        SECOND HAND

        60 seconds = 360°
        1 second = 6°

        Milliseconds make the movement smooth.
    */

    const secondDegree =
        seconds * 6 +
        milliseconds * 0.006;


    // Apply rotations

    hourHand.style.transform =
        `translateX(-50%) rotate(${hourDegree}deg)`;


    minuteHand.style.transform =
        `translateX(-50%) rotate(${minuteDegree}deg)`;


    secondHand.style.transform =
        `translateX(-50%) rotate(${secondDegree}deg)`;
}


// Run immediately
updateClock();


// Update every 50 milliseconds
setInterval(updateClock, 50);
