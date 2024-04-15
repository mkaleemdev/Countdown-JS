let countdown = document.querySelector("#countdown")
let sec = document.querySelector("#sec")
let Mint = document.querySelector("#Mint")
let Hour = document.querySelector("#Hour")
let Day = document.querySelector("#Day")

// ======== Set the date we're counting down to
const countDownDate = new Date("Jan 01, 2025 00:00:00").getTime();

// ====== Update the countdown every 1 second
const countdownTimer = setInterval(function () {
    // Get the current date and time
    const now = new Date().getTime();

    // ====== Calculate the distance between now and the countdown date
    const distance = countDownDate - now;

    // ======= Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // ======= Display the result in the element with id="countdown"
    Day.innerHTML = days + "d";
    Hour.innerHTML = hours + "h";
    Mint.innerHTML = minutes + "m";
    sec.innerHTML = seconds + "s";


    // ======= If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(countdownTimer);
        countdown.innerHTML = "EXPIRED";
    }
}, 1000);
