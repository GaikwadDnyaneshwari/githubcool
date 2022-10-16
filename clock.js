const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h>12){
        h = h-12
        ampm = "PM" 
    }

    hourEl.innerHTML = h;
    minuteEl.innerHTML = m;
    secondEl.innerHTML = s;
    ampm.innerHTML = ampm;
    setTimeout(()=>{
     updateClock()
    }, 1000)
}
updateClock();