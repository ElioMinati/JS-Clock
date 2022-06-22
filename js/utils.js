window.formatUnit = unit => {
    if (unit < 10) {
        return "0" + unit;
    }
    return unit;
}

window.getDayName = nb => {
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

window.getMonthName = nb => {
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
