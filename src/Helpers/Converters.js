export const dateConverter = (unixTimestamp) => {
    const a = new Date(unixTimestamp * 1000);
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const month = months[a.getMonth()];
    const days = ['Sunday','Monday','Tueday','Wednesday','Thursday','Friday','Saturday'];
    const day = days[a.getDay()];
    const date = a.getDate();
    const todaysDate = day + ' ' + date + ' ' + month;
    return todaysDate;
}

export const dateShortHandConverter = (unixTimestamp) =>{
    const a = new Date(unixTimestamp * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const month = months[a.getMonth()];
    const days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
    const day = days[a.getDay()];
    const date = a.getDate();
    const dayOfWeek = day + ' ' + date + ' ' + month;
    return dayOfWeek;
}

export const dayOfWeek = (unixTimestamp) =>{
    const a = new Date(unixTimestamp * 1000);
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const day = days[a.getDay()];
    return day;
}

export const dayOfWeekShortHand = (unixTimestamp) =>{
    const a = new Date(unixTimestamp * 1000);
    const days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
    const day = days[a.getDay()];
    return day;
}

export const timeConverter = (unixTimestamp) => {
    const a = new Date((unixTimestamp - 3600) * 1000);
    const hour = (a.getHours() < 10 ? '0' : '') + a.getHours();
    const minutes = (a.getMinutes() < 10 ? '0' : '') + a.getMinutes();
    return hour + ':' + minutes;
}

export const timeConverterHour = (unixTimestamp) => {
    const a = new Date((unixTimestamp - 3600) * 1000);
    const hour = (a.getHours() < 10 ? '0' : '') + a.getHours();
    return hour;
}

