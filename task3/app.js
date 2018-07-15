var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var dateFormatter = function(date) {
  var result = `${date.getHours()}-${date.getMinutes()} ${date.getDate()} ${monthNames[date.getMonth() - 1]} ${date.getFullYear()}`;
  return result;
};

var submitHandler = function(event) {
  event.preventDefault();
  document.querySelector(".result").innerHTML = dateFormatter(new Date(event.target[0].value));
  document.querySelector(".name").value = "";
};

var main = function(event) {
  document.querySelector(".dateInput").addEventListener('submit', submitHandler);
  var dateNow = new Date();
  document.querySelector(".name").value = `${("0" + dateNow.getMonth()).slice(-2) }.${("0" + dateNow.getDate()).slice(-2)}.${dateNow.getFullYear()} ${dateNow.toTimeString().slice(0, 5)}`;
  document.querySelector(".result").innerHTML = dateFormatter(dateNow);
};

window.addEventListener("load", main, false);
