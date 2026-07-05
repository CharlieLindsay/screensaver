alert("Welcome! Click on the sun/moon to remove particles.")  // I decided this may be the best place tell the user - in an alert. 
function star() {  // This function is done for 3 seperate stars in 3 seperate functions, although I have plans to make it more efficient in the future.
    const starElement = document.getElementById("star");  //Saves starElement as the element with the ID star
    const starSize = 30;  // Defines a variable to remember the size of each star
    const maxX = window.innerWidth - starSize;  // If the star size wasn't subtracted from the window widths and heights, it could overhang, causing the browser to be attempting to resize
    const maxY = window.innerHeight - starSize;  // Does the same but for the height, or the y value
    starElement.style.display = "none";  // Hides the star element to start
    starElement.style.left = Math.floor(Math.random() * Math.max(maxX, 0)) + "px";  // Randomises position horizontally
    starElement.style.top = Math.floor(Math.random() * Math.max(maxY, 0)) + "px";  // Randomises position vertically
    starElement.style.opacity = 0;  // Starts opacity for fade in at 0
    for (let i = 0; i <= 100; i++) {  // Runs 100 times with a delay between
        setTimeout(() => {
            starElement.style.opacity = i / 100;  // Because it is between 0 and 1, not 0 and 100, it needs to be divided by 100
            starElement.style.display = "block";  // Makes it visible again. It doesn't need to be in the loop, but I did it just to help improve smoothness
        }, i * 5);
    }
    // Same thing below but for the star fading out:
    for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
            starElement.style.opacity = (100 - i) / 100;
        }, 500 + i * 5);
    }
}
// Runs every second
const starIntervalId = setInterval(star, 1000);
star();

// Repeats Again:
function star2() {
    const star2Element = document.getElementById("star2");
    const star2Size = 10;
    const maxX = window.innerWidth - star2Size;
    const maxY = window.innerHeight - star2Size;

    star2Element.style.display = "none";
    star2Element.style.left = Math.floor(Math.random() * Math.max(maxX, 0)) + "px";
    star2Element.style.top = Math.floor(Math.random() * Math.max(maxY, 0)) + "px";
    star2Element.style.opacity = 0;
    for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
            star2Element.style.opacity = i / 100;
            star2Element.style.display = "block";
        }, i * 5);
    }
    for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
            star2Element.style.opacity = (100 - i) / 100;
        }, 500 + i * 5);
    }
}
const star2IntervalId = setInterval(star2, 1000);
star2();

// And it repeats again:
function star3() {
    const star3Element = document.getElementById("star3");
    const star3Size = 20;
    const maxX = window.innerWidth - star3Size;
    const maxY = window.innerHeight - star3Size;

    star3Element.style.display = "none";
    star3Element.style.left = Math.floor(Math.random() * Math.max(maxX, 0)) + "px";
    star3Element.style.top = Math.floor(Math.random() * Math.max(maxY, 0)) + "px";
    star3Element.style.opacity = 0;
    for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
            star3Element.style.opacity = i / 100;
            star3Element.style.display = "block";
        }, i * 5);
    }
    for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
            star3Element.style.opacity = (100 - i) / 100;
        }, 500 + i * 5);
    }
}

const star3IntervalId = setInterval(star3, 1000);
star3();

//Updating time function
function updateTime() {
    const now = new Date();
    const hour = now.getHours();  // Sets hours to the current number of hours into the day
    const minute = now.getMinutes().toString().padStart(2, "0");  // I found this line on the internet to get minutes
    const today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    const formattedDate = `${day}/${month}/${year}`;

    document.querySelector("#time").innerHTML = hour + ":" + minute;  // Changes the time header to the correct time
    document.querySelector("#date").innerHTML = formattedDate;  // Changes the date to the correct date
}
setInterval(updateTime, 1000);  // Updates every second


function headerposition() {  // Randomises the vertical position of the header to help prevent screen burn
    const minPercent = 0;
    const maxPercent = 15;  // So it doesn't move by too much
    const randomTop = (Math.random() * (maxPercent - minPercent) + minPercent) + "%";
    document.querySelector("#info").style.top = randomTop;
}

const headerpositionintervalId = setInterval(headerposition, 60000);  // Changes every minute
headerposition();