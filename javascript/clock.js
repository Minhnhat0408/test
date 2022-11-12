const displayTime = document.querySelector(".display-time");
let days_in_love = document.getElementById("days-in-love");

function pad(d) {
  return (d < 10) ? '0' + d.toString() : d.toString();
}
// Time
function showTime() {
  let time = new Date();
  let output = time.toLocaleTimeString("en-US",{hour12: false});
  const arr = output.split(":");
  arr[0]-=1;
  arr[0] = (arr[0] == 24) ? 0:arr[0];
  if(parseInt(arr[2]) % 60  == 0 && parseInt(arr[0]) % 24 == 0  && parseInt(arr[1]) == 0){
    document.location.href = "Heart.html";
  }
  displayTime.innerText = `${pad(arr[0])}:${arr[1]}:${arr[2]}`;
  setTimeout(showTime, 1000);
}   

showTime();


const days = (date_1, date_2) =>{
  let difference = date_1.getTime() - date_2.getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays;
}

function remainDate(){
  let today = new Date();
  let ceremony = new Date("2021-11-14");
  // return number
  return days(today,ceremony);
}

days_in_love.innerHTML += " " + remainDate();
days_in_love.style.marginTop = "8%";
days_in_love.style.fontSize = "2vw";
days_in_love.style.fontFamily = "'DynaPuff', cursive";
// Date
function updateDate() {
  let today = new Date();

  // return number  
  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();


  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // value -> ID of the html element
  const IDCollection = ["day", "daynum", "month", "year"];
  // return value array with number as a index
  const val = [dayWeek[dayName], dayNum, months[month], year];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}

updateDate();
