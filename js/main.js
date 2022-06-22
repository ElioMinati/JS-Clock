let dt;
let hours;
let minutes;
let seconds;
let day;
let counter = 0;
let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const formatUnit = unit => {
    if (unit < 10) {
        return "0" + unit;
    }
    return unit;
}

const getDayName = nb => {
    switch(nb) {
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3:
            return 'Wednesday';
            break;
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 7:
            return 'Sunday';
        default:
            break;
    }
    return '';
}

const updateTime = () => {
    counter++;
    dt = new Date(new Date(new Date()).toLocaleString('en-US', {timeZone: timezone,}));
    hours = formatUnit(dt.getHours());
    minutes = formatUnit(dt.getMinutes());
    seconds = formatUnit(dt.getSeconds());
    day = getDayName(dt.getDay());
    document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds}`;
    document.getElementById('day').innerHTML = `${day}`;
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
