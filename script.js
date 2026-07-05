function timeandvideo() {
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    imageWidth = 300;
    max_height = viewportHeight - 300
    travelDistance = viewportWidth - imageWidth;
    mid_width = (travelDistance / 2)
    now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    minutes_into_day = (hours * 60 + minutes);

    if (minutes_into_day > 1140 || minutes_into_day < 360) {
        document.getElementById("moon").style.display = "block";
        document.getElementById("sun").style.display = "none";

        if (minutes_into_day > 1140) {
            partition = (minutes_into_day - 1140);
        } else {
             partition = (minutes_into_day + (1440 - 1140));
        }
        points_to_change_width = travelDistance / 660;
        width = (points_to_change_width * partition);
        let a = max_height / (mid_width * mid_width);
        height = max_height - a * (width - mid_width) * (width - mid_width);
        document.getElementById("moon").style.bottom = height + "px";
        document.getElementById("moon").style.left = width + "px";
        //console.log("Night", partition, width);
    }
    else {
        document.getElementById("moon").style.display = "none";
        document.getElementById("sun").style.display = "block";

        partition = (minutes_into_day - 360);

        points_to_change_width = travelDistance / 780;
        width = (points_to_change_width * partition);
        let a = max_height / (mid_width * mid_width);
        height = max_height - a * (width - mid_width) * (width - mid_width);
        document.getElementById("sun").style.bottom = height + "px";
        document.getElementById("sun").style.left = width + "px";
        //console.log("Day", partition, width);
    }
}

const intervalId = setInterval(timeandvideo, 1000);
timeandvideo();