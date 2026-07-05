const viewportWidth = window.innerWidth; 
function timeandvideo() {
    now = new Date();
    hours = now.getHours();
    //console.log(hours);
    minutes = now.getMinutes();
    //console.log(minutes);
    minutes_into_day = (hours * 60 + minutes)
    console.log(minutes_into_day)
    if (minutes_into_day > 1100 || minutes_into_day < 1100){
        document.getElementById("moon").style.display = "block";
        document.getElementById("sun").style.display = "none";
        minutes_in_night = (1440 - 1100 + 1100);
        if (minutes_into_day > 1100){
            partition = (minutes_into_day - 1100)
        }
        else{
            partition = (340 + )
        }
        console.log(position);
        document.getElementById("moon").style.left = "";
        console.log("Night");
    } 
    else{
        document.getElementById("moon").style.display = "none";
        document.getElementById("sun").style.display = "block";
        console.log("Day");
    }
    
}
const intervalId = setInterval(timeandvideo, 1000);