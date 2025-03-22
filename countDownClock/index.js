const setTime = new Date("March 23 , 2025 22:54:00").getTime();
console.log(setTime);
console.log(typeof setTime);

//set time inter vel
const interval = setInterval(()=>{
    const now = new Date().getTime();
    const duration = setTime - now;
    if( duration < 0){
        clearInterval(interval);
        countdown(0)
        return;
    }
    
    countdown(duration);

}, 1000);

function countdown(duration) {
    const date = duration / (24 * 60 * 60 * 1000);
    //convert date to string
    const ConDATE = date.toString();
    const dotIndex  = ConDATE.indexOf(".");
    
    const day = ConDATE.slice(0 , dotIndex);
    const rest = Number(ConDATE.slice(dotIndex));
    const conHours = (rest * 24).toString();
    const hsDotIndex = conHours.indexOf(".");
    const hours = conHours.slice(0 , hsDotIndex);
    const rest2 = Number(conHours.slice(hsDotIndex));
    const conMinutes = (rest2 * 60).toString();
    const minDotIndex = conMinutes.indexOf(".");
    const minutes = conMinutes.slice(0 , minDotIndex);
    const rest3 = Number(conMinutes.slice(minDotIndex));
    const conSeconds = (rest3 * 60).toString();
    const secDotIndex = conSeconds.indexOf(".");
    const seconds = conSeconds.slice(0 , secDotIndex);
    
    const day1 = Math.floor(duration / (24 * 60 * 60 * 1000));
    const hours2 = Math.floor((duration % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes3 = Math.floor((duration % (60 * 60 * 1000)) / (60 * 1000)); 
    const seconds4 = Math.floor((duration % (60 * 1000)) / (1000))    

    console.log(day, hours, minutes, seconds);
    console.log(day1, hours2, minutes3, seconds4);
}

