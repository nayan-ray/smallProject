const setTime = new Date("March 20 , 2025 8:54:00").getTime();
console.log(setTime);
console.log(typeof setTime);

const date = setTime / (24 * 60 * 60 * 1000);
//convert date to string
const ConDATE = date.toString();
const dotIndex  = ConDATE.indexOf(".");

const day = ConDATE.slice(0 , dotIndex);
const rest = Number(ConDATE.slice(dotIndex));
const hours = rest * 24;

 console.log(rest);
 
console.log(day);
console.log(hours);