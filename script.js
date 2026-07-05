function star() {
    const starElement = document.getElementById("star");
    const starSize = 30;
    const maxX = window.innerWidth - starSize;
    const maxY = window.innerHeight - starSize;
    starElement.style.display = "none";
    starElement.style.left = Math.floor(Math.random() * Math.max(maxX, 0)) + "px";
    starElement.style.top = Math.floor(Math.random() * Math.max(maxY, 0)) + "px";
    starElement.style.opacity = 0;
    for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
            starElement.style.opacity = i / 100;
            starElement.style.display = "block";
        }, i * 5);
    }
    for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
            starElement.style.opacity = (100 - i) / 100;
        }, 500 + i * 5);
    }
}

const starIntervalId = setInterval(star, 1000);
star();

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

function updateTime() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes().toString().padStart(2, "0");
    const today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    const formattedDate = `${day}/${month}/${year}`;

    document.querySelector("#time").innerHTML = hour + ":" + minute;
    document.querySelector("#date").innerHTML = formattedDate;
}
setInterval(updateTime, 1000);

function headerposition() {
    const minPercent = 0;
    const maxPercent = 15;
    const randomTop = (Math.random() * (maxPercent - minPercent) + minPercent) + "%";
    document.querySelector("#info").style.top = randomTop;
}

const headerpositionintervalId = setInterval(headerposition, 60000);
headerposition();