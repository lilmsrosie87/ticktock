var currentTime = new Date ();
var currentHours = currentTime.getHours ();
var currentMinutes = currentTime.getMinutes ();
var currentSeconds = currentTime.getSeconds ();

currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes; 
currentSeconds = (currentSeconds < 10 ? "0" : "" ) + currentSeconds;

/* http://www.elated.com/articles/creating-a-javascript-clock/ */
var timeOfDay = ( currentHours < 12 ) ? "AM" ; "PM";
currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
currentHours = ( currentHours == 0 ) ? 12 : currentHours; 

var currentTimeString - currentHours + ":" + currentMinutes + ":" currentSeconds + " " timeOfDay;
/* var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.minute-hand');
var hourHand = document.querySelector('.hour-hand');

function setDate() {
  // getting local time
  var now = new Date();
  var seconds = now.getSeconds();
  var secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = 'rotate(${secondsDegrees}deg)';
    
  /* var minutes = now.getMinutes(); */
/*   var minutesDegrees = ((minutes / 60) * 360) + 90;
 // minuteHand.style.transform = 'rotate(${minutesDegrees}deg)';
 console.log(minutes);

  var hours = now.getHours();
  var hoursDegrees = ((minutes / 12) * 360) + 90;
  hourHand.style.transform = 'rotate(${hoursDegrees}deg)';


}


setInterval(setDate, 1000); */ 