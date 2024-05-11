function onLoad() {
  getDateTime();
}

// DateTime
function getDateTime() {
  const D = new Date();
  const dayArray = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
  ];
  const monthArray = [
    "January","February","March",
    "April","May","June",
    "July","August","September",
    "October","November","December"
  ];

  let hour = D.getHours();
  let minute = D.getMinutes();
  let dayOfWeek = dayArray[D.getDay()];
  let dayOfMonth = D.getDate();
  let month = monthArray[D.getMonth()];

  hour = checkLessThanTen(hour);
  minute = checkLessThanTen(minute);
  dayOfMonth = checkLessThanTen(dayOfMonth);

  document.getElementById('time').innerHTML = hour + ":" + minute;
  document.getElementById('date').innerHTML = dayOfWeek + ", " + month + " " + dayOfMonth;
  setTimeout(getDateTime(), 1000);
}

function checkLessThanTen(i) {
  if (i < 10) {
    i = "0" + i;
  };
  return i;
}

// Location Bar
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('location-name').innerHTML = "New York";
});