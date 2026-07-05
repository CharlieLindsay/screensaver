const video_moon = document.getElementById("moonvideo");
function timeandvideo() {
    now = new Date();
    hours = now.getHours();
    console.log(hours)
    if (hours > 21) or (hours < 6);{
        document.getElementById("videomoon").style.display = "block";
    }
    
}
const intervalId = setInterval(timeandvideo, 1000);