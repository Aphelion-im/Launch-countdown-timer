import './styles.scss';

"use strict";

window.addEventListener("load", () => {

    const countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

    const x = setInterval(function () {

        const now = new Date().getTime();
        const distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        days = updateTimeElements(days);
        hours = updateTimeElements(hours);
        minutes = updateTimeElements(minutes);
        seconds = updateTimeElements(seconds);

        document.querySelector(".days").textContent = days;
        document.querySelector(".hours").textContent = hours;
        document.querySelector(".minutes").textContent = minutes;
        document.querySelector(".seconds").textContent = seconds;

        function updateTimeElements(t) {
            if (t < 10) {
                return "0" + t;
            } else {
                return t;
            }
        }

        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".countdown-window h1").textContent = "Happy New Year!";
            document.querySelector(".output").style.display = "none";
        }
    }, 1000);


}); // End load event listener
