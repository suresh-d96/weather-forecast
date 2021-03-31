export const formatTime = (unixTimestamp) => {
    let date = new Date(unixTimestamp * 1000);
    return date.getHours() + ':' + ("0" + date.getMinutes()).substr(-2) + ':' + ("0" + date.getSeconds()).substr(-2);
}

export const getDateFromUnix = (unixTimestamp) => {
    return new Date(unixTimestamp * 1000);
}

// converting wind_speed from m/s to km/hr
export const convertWindSpeed = (windSpeed) => {    
    let wind_speed = windSpeed * 3.6;
    return wind_speed.toFixed(2);
}