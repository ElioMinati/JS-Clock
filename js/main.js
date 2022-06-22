let dt;
let hours;
let minutes;
let seconds;
let counter = 0;
let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const formatUnit = unit => {
    if (unit < 10) {
        return "0" + unit;
    }
    return unit;
}

const updateTime = () => {
    counter++;
    dt = new Date(new Date(new Date()).toLocaleString('en-US', {timeZone: timezone,}));
    console.log(timezone);
    console.log(dt);
    hours = formatUnit(dt.getHours());
    minutes = formatUnit(dt.getMinutes());
    seconds = formatUnit(dt.getSeconds());
    if (counter % 2 === 0) {
        document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds}`;
    } else {
        document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds}`;
    }
}

const setupTimezones = () => {
    let select = document.querySelector('select');
    const timezones = Intl.supportedValuesOf('timeZone');
    if (!timezones) {
        const error = "Your browser doesn't support timezones.";
        error.disabled = true;
        select.options.add(new Option(error))
        return;
    }
    let count = 0;
    timezones.forEach((tz) => {
        select.options.add(new Option(tz));
        if (tz === timezone) {
            select.selectedIndex = count;
        }
        count++;
    })
    updateTime();
}

const changeTimezone = () => {
    timezone = document.getElementById('timezones').value;
    updateTime();
}

window.onload = setupTimezones;

setInterval(updateTime, 1000);
