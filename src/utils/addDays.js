const addDays = (dateString, days) => {
    let date = new Date(dateString);
    date.setDate(date.getDate() + days);
    return date;
}

export default addDays;