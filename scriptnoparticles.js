alert("Warning: I am unsure whether having no particles will risk screen burn, so be careful. Select the sun/moon to switch back.")
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