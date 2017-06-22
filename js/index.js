var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.minute-hand');
var hourHand = document.querySelector('.hour-hand');

function setDate() {
  // getting local time
  var now = new Date();
  var seconds = now.getSeconds();
  var secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = 'rotate(${secondsDegrees}deg)';
    
  var minutes = now.getMinutes();
  var minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = 'rotate(${minutesDegrees}deg)';
  console.log(minutes);

  var hours = now.getHours();
  var hoursDegrees = ((minutes / 12) * 360) + 90;
  hourHand.style.transform = 'rotate(${hoursDegrees}deg)';


}


setInterval(setDate, 1000);