exports.date_time_breakdown = (time) => {

    let add_leading_zero = (number) => {
        if (number <= 9) {
            number = '0' + number;
        }
        return number;
    };

    //  Arrays created to work with the Date Object to match the equivalent get_month() and get_day_name() number values
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // time = new Date();
    // Breaking down the date object
    let get_day_name = () => dayNames[time.getDay()],
        get_month = () => time.getMonth() + 1,
        get_month_name = () => monthNames[time.getMonth()],
        get_date = () => add_leading_zero(time.getDate()),
        get_year = () => add_leading_zero(time.getFullYear()),
        get_hours = () => add_leading_zero(time.getHours()),
        get_minutes = () => add_leading_zero(time.getMinutes()),
        get_seconds = () => add_leading_zero(time.getSeconds());

    // Present usable result
    let get_full_date = () => `${get_day_name()}, ${get_month_name()} ${get_date()}th, ${get_year()}`,
        get_time = () => `${get_hours()}:${get_minutes()}:${get_seconds()}`;

    // Return presentable results
    return { get_full_date, get_time, get_date, get_day_name, get_month, get_month_name, get_year};
};