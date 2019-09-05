$(document).ready(function(){

$(window).keypress(pressed);
$("#padQ").click(clickQ);
$("#padW").click(clickW);
$("#padE").click(clickE);
$("#padA").click(clickA);
$("#padS").click(clickS);
$("#padD").click(clickD);
$("#padZ").click(clickZ);
$("#padX").click(clickX);
$("#padC").click(clickC);


function pressed (x) {
  //alert(x.which);
  if (x.which == 81) {
    $("audio#Q")[0].play();
    $("#display").html("Heater-1");
  }
  if (x.which == 87) {
    $("audio#W")[0].play();
    $("#display").html("Heater-2");
  }
  if (x.which == 69) {
    $("audio#E")[0].play();
    $("#display").html("Heater-3");
  }
  if (x.which == 65) {
    $("audio#A")[0].play();
    $("#display").html("Heater-4");
  }
  if (x.which == 83) {
    $("audio#S")[0].play();
    $("#display").html("Heater-6");
  }
  if (x.which == 68) {
    $("audio#D")[0].play();
    $("#display").html("Open Hat");
  }
  if (x.which == 90) {
    $("audio#Z")[0].play();
    $("#display").html("Kick and Hat");
  }
  if (x.which == 88) {
    $("audio#X")[0].play();
    $("#display").html("Kick");
  }
  if (x.which == 67) {
    $("audio#C")[0].play();
    $("#display").html("Hat");
  }
}

function clickQ (){
  $("audio#Q")[0].play();
  $("#display").html("Heater-1")
}
function clickW (){
  $("audio#W")[0].play();
  $("#display").html("Heater-2")
}
function clickE (){
  $("audio#E")[0].play();
  $("#display").html("Heater-3")
}
function clickA (){
  $("audio#A")[0].play();
  $("#display").html("Heater-4")
}
function clickS (){
  $("audio#S")[0].play();
  $("#display").html("Heater-6")
}
function clickD (){
  $("audio#D")[0].play();
  $("#display").html("Open Hat")
}
function clickZ (){
  $("audio#Z")[0].play();
  $("#display").html("Kick and Hat")
}
function clickX (){
  $("audio#X")[0].play();
  $("#display").html("Kick")
}
function clickC (){
  $("audio#C")[0].play();
  $("#display").html("Hat")
}
});
