let dt;
let hours;
let minutes;
let seconds;
let day;
let month;
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
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
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

const getMonthName = nb => {
    switch(nb) {
        case 0:
            return 'january';
        case 1:
            return 'febuary';
        case 2:
            return 'march';
        case 3:
            return 'april';
        case 4:
            return 'may';
        case 5:
            return 'june';
        case 6:
            return 'july';
        case 7:
            return 'august';
        case 8:
            return 'september';
        case 9:
            return 'october';
        case 10:
            return 'november';
        case 11:
            return 'december';
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
    month = getMonthName(dt.getMonth());
    document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds}`;
    document.getElementById('day').innerHTML = `${day} ${dt.getDate()} ${month} ${dt.getFullYear()}`;
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
