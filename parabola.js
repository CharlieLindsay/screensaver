function timeandvideo() {  //Function that controls positioning of the sun/moon
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    imageWidth = 300;  // Widths of the images are set
    max_height = viewportHeight - 300
    travelDistance = viewportWidth - imageWidth;
    mid_width = (travelDistance / 2)
    now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    minutes_into_day = (hours * 60 + minutes);

    if (minutes_into_day > 1140 || minutes_into_day < 360) {
        document.getElementById("moon").style.display = "block";
        document.getElementById("sun").style.display = "none";  // Hides the sun
        document.getElementById("body").style.backgroundImage = "url('images/stars.jpg')";  // During the night, it is starts
        if (minutes_into_day > 1140) {  // If it is night time before midnight
            partition = (minutes_into_day - 1140);
        } else {
            partition = (minutes_into_day + (1440 - 1140));
        }
        points_to_change_width = travelDistance / 660;  // Divided by 660 minutes
        width = (points_to_change_width * partition);
        let a = max_height / (mid_width * mid_width);  // a being the stretch factor in a parabola
        height = max_height - a * (width - mid_width) * (width - mid_width);  // The quadratic-style formula
        document.getElementById("moon").style.bottom = height + "px";  // Sets the verticle location of the moon
        document.getElementById("moon").style.left = width + "px";  // Sets the horizontal location of the moon
        //console.log("Night", partition, width);
    }
    else {
        // Same thing as above, but for the sun in daytime
        document.getElementById("moon").style.display = "none";
        document.getElementById("sun").style.display = "block";
        document.getElementById("body").style.backgroundImage = "url('images/daysky.jpg')";
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

const intervalId = setInterval(timeandvideo, 1000);  // Updates/checks every second
timeandvideo();