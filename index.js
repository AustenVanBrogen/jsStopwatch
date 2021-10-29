
let flag = 0;
let seconds = 0;
let minutes = 0;
let secondsPadding;
let minutesPadding;
let hoursPadding;
let hours = 0;
let timer = 0;

const buttonPressed = () => {
 (flag === 0)? startTheStopwatch() : stopTheStopwatch();
 //document.getElementById("timeDisplay").innerHTML = flag;
};

const startTheStopwatch = () => { 
    // const date = new Date();
    // startTime = date.getTime();
    flag = 1;

    seconds++;
    if(seconds === 60)
    {
       minutes++;
       seconds = 0;
    }
    if(minutes === 60)
    {
       hours++;
       minutes = 0;
    }
    //(seconds < 10)? secondsPadding = "0" : secondsPadding = "";
    secondsPadding = setPadding(seconds);
    minutesPadding = setPadding(minutes);
    hoursPadding = setPadding(hours);
    document.getElementById("timeDisplay").innerHTML = hoursPadding + hours + ":" + 
                                                      minutesPadding + minutes + ":" +
                                                      secondsPadding + seconds;
    timer = setTimeout(startTheStopwatch, 1000);
 };

 const stopTheStopwatch = () => { 
    clearTimeout(timer);
    timer = 0;
    flag = 0;
 };

 const setPadding = (number) => {
   return (number < 10)? "0" : "";
 };