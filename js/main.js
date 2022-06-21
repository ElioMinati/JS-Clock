let dt = new Date();
let hours;
let minutes;
let seconds;
let counter = 0;

const formatUnit = unit => {
    if (unit < 10) {
        return "0" + unit;
    }
    return unit;
}

const updateTime = () => {
    counter++;
    dt = new Date();
    hours = formatUnit(dt.getHours());
    minutes = formatUnit(dt.getMinutes());
    seconds = formatUnit(dt.getSeconds());
    if (counter % 2 === 0) {
        document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds}`;
    } else {
        document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds}`;
    }
}

setInterval(updateTime, 1000);
