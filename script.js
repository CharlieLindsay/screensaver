const viewportWidth = window.innerWidth;
function timeandvideo() {
    now = new Date();
    hours = now.getHours();
    //console.log(hours);
    minutes = now.getMinutes();
    //console.log(minutes);
    minutes_into_day = (hours * 60 + minutes)
    console.log(minutes_into_day)
    if (minutes_into_day > 1140 || minutes_into_day < 360) {
        document.getElementById("moon").style.display = "block";
        document.getElementById("sun").style.display = "none";
        if (minutes_into_day > 1140) {
            partition = (minutes_into_day - 1140)
        }
        else {
            partition = (340 + 360 - minutes_into_day)
        }
        console.log(partition);
        points_to_change_width = viewportWidth / 720
        width = (points_to_change_width * partition)
        document.getElementById("moon").style.left = width;
        console.log("Night");
    }
    else {
        document.getElementById("moon").style.display = "none";
        document.getElementById("sun").style.display = "block";
        console.log("Day");
        partition = (minutes_into_day - 360)
        console.log(partition);
        points_to_change_width = viewportWidth / 780
        width = (points_to_change_width * partition)
        document.getElementById("sun").style.left = width;
    }

}
const intervalId = setInterval(timeandvideo, 1000);