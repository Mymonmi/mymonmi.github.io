const clockForm = document.querySelector("#clock");
const cfDate = document.querySelector("#date");
const cfTime = document.querySelector("#time");
const Month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const DayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const day = now.getDate();
  const month = Month[now.getMonth()];
  const dayname = DayName[now.getDay()];

  cfDate.innerText = `${dayname}, ${month} ${day}  ${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000 * 60);
