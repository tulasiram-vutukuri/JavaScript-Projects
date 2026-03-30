let complateDateText = document.getElementById("date-year");
let hrsEle = document.getElementById("hours");
let minsEle = document.getElementById("minutes");
let secEle = document.getElementById("seconds");
let ampmEle = document.getElementById("ampm");

function updateClock() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let dateVal = time.getDate();
    let dayVal = time.getDay();
    let monthVal = time.getMonth();
    let yearVal = time.getFullYear();

    let ampm = hours >= 12 ? "PM" : "AM";
    if (ampm === "PM") {
        ampmEle.style.color = "red";
        ampmEle.style.fontWeight = "bold";
    } else {
        ampmEle.style.color = "green";
    }

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    hrsEle.textContent = hours;
    minsEle.textContent = minutes;
    secEle.textContent = seconds;
    ampmEle.textContent = ampm;
    complateDateText.innerHTML = `<span class="style-date1">${days[dayVal]}</span>, <span class = "style-date2">${dateVal} ${months[monthVal]} ${yearVal}</span>`;
}
setInterval(updateClock, 1000);
updateClock();