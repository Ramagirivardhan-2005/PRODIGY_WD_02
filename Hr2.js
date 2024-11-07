
let timer;
let isRunning = false;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let lapCount = 1;
function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").textContent = "Start";
    } else {
        timer = setInterval(updateTime, 10); 
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}
function updateTime() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    document.getElementById("minutes").textContent = formatTime(minutes);
    document.getElementById("seconds").textContent = formatTime(seconds);
    document.getElementById("milliseconds").textContent = formatTime(milliseconds);
}
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
function reset() {
    clearInterval(timer);
    isRunning = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.getElementById("milliseconds").textContent = "00";
    document.getElementById("startStop").textContent = "Start";
    document.getElementById("Laptimes").innerHTML = ""; 
    lapCount = 1; 
}


function Process() {
    if (isRunning) {
        const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
        const lapElement = document.createElement("li");
        lapElement.textContent = `Lap ${lapCount}: ${lapTime}`;
        document.getElementById("Laptimes").appendChild(lapElement);
        lapCount++;
    }
}
