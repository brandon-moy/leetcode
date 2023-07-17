/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    const split = date.split(' ');
    let output = split[2];
    const days = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayDate = days.indexOf(split[0]) + 1;
    const monthDate = months.indexOf(split[1]) + 1;
    const day = dayDate < 10 ? '0' + dayDate : dayDate;
    const month = monthDate < 10 ? '0' + monthDate : monthDate;
    
    output += '-' + month + '-' + day;
    return output;
};