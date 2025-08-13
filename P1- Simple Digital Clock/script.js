let clock = document.querySelector("#clock");
let am_pm = document.querySelector("#am_pm");

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 becomes 12
    const formattedHours = String(hours).padStart(2, '0');

    clock.textContent = `${formattedHours}:${minutes}:${seconds}`;
    am_pm.textContent = `${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();