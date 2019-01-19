var shutdown2013cost = 24000000000.00;
var peopleAffectedBy2018 = 800000;
var lengthOf2013shutdown = 16;
 
var costPerPerson = shutdown2013cost / peopleAffectedBy2018;
  
var personCostPerDay = costPerPerson / lengthOf2013shutdown;

var personCostPerHour = personCostPerDay / 24;

var personCostPerMinute = personCostPerHour / 60;
var personCostPerSecond = personCostPerMinute / 60;
  
var costPerMillisecond = personCostPerSecond / 1000;
  
var shutdown2018Began = new Date('12/23/2018').getTime();
var now = new Date().getTime();

var millisecondsSince = (now - shutdown2018Began);

var start = millisecondsSince * costPerMillisecond * peopleAffectedBy2018;
var speed = 1;

$(document).ready(function () {
  
    go();
    setInterval(function () {
        go();
    }, speed);
});

function go() {
    $("#counter").html(start.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
    start += (costPerMillisecond * peopleAffectedBy2018);
}