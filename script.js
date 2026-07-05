const video_moon = document.getElementById("moonvideo");
function timeandvideo() {
    now = new Date();
    hours = now.getHours();
    console.log(hours);
    if (hours > 19 || hours < 6){
        document.getElementById("moon").style.display = "block";
        document.getElementById("sun").style.display = "none";
        console.log("Night");
    } 
    else{
        document.getElementById("moon").style.display = "none";
        document.getElementById("sun").style.display = "block";
        console.log("Day");
    }
    
}
const intervalId = setInterval(timeandvideo, 1000);