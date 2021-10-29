
let flag = 0;
let seconds = 0;
let minutes = 0;
let tenSecondSpot;
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
    (seconds < 10)? tenSecondSpot = "0" : tenSecondSpot = "";
    document.getElementById("timeDisplay").innerHTML = hours + ":" + minutes + ":" + tenSecondSpot + seconds;
    timer = setTimeout(startTheStopwatch, 1000);
 };

 const stopTheStopwatch = () => { 
    clearTimeout(timer);
    timer = 0;
    flag = 0;
 };