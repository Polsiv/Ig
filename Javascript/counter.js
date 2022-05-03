var number = document.quierySelector(".number");
var count = 20;

//countdown interval switch which runs on every 1s

var countdownInterval = setInterval(() => {
     //if cont is less than or equal to 1 then clear the interval
    
     count <= 1 && clearInterval(countdownInterval);
     number.textContent = count <= 10 `0${--count}`
}
   
//Error spotted somewhere