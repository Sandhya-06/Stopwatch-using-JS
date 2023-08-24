// accesing elements from html
const startBtn=document.getElementById("start-btn");
const stopBtn=document.getElementById("stop-btn");
const resetBtn=document.getElementById("reset-btn");
var display=document.getElementById("display-time");
var hours=0;
var secs=0;
var mins=0;
var startTime=0;
var elapsedTime=0;
var intervalId;
// event handler for start button
startBtn.addEventListener('click',function(){
    startTime=Date.now()-startTime; 
    intervalId=setInterval(displayTime,1000);
    resetBtn.disabled=true;
});
// event handler for stop button
stopBtn.addEventListener('click',function(){
    clearInterval(intervalId);
    startTime=elapsedTime;
    intervalId=null;
    resetBtn.disabled=false;
});
// event handler for reset button
resetBtn.addEventListener('click',function(){
    display.textContent="00:00:00"
});
//funtion for updating time
function displayTime(){
    
    elapsedTime=Date.now()-startTime;
    const time=new Date(elapsedTime);
    console.log(time)
    hours=time.getUTCHours().toString().padStart(2,'0');
    mins=time.getUTCMinutes().toString().padStart(2,'0');
    secs=time.getUTCSeconds().toString().padStart(2,'0');
    display.textContent=`${hours}:${mins}:${secs}`
}
