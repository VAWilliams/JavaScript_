//Setting the birthday date
var birthdayDate = new Date("Feb 24, 2019 00:00:00").getTime();

//The DOM will be updated every second/ 100 milliseconds
var x = setInterval(function() {

  //Fetch current time
  var currentTime = new Date().getTime();

  //Calculating he difference between currentTime an the birthdayDate
  var difference = birthdayDate - currentTime;

  //Calculations for the day/s, hour/s, minute/s and second/s
  var day = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hour = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var second = Math.floor((difference % (1000 * 60)) / 1000);

  //Creating a variable name for the output
  var output = document.getElementById("output");

  //The  must be displayed result in the element with id="output"
  output.innerHTML = day + "d " + hour + "h "
  + minute + "m " + second + "s ";

  //Once the countdown is completed, display the text
  if (difference < 0) {
    clearInterval(x);
    output.innerHTML = "Happy Birthday!";
  }
}, 1000);