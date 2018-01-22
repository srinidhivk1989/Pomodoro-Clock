$(document).ready(function()
{
var buzzer=$("#buzzer")[0];
var breakcount=parseInt($("#breaknum").html());
//console.log(breakcount);
var sessioncount=parseInt($("#sessionnum").html());
//console.log(sessioncount);
$("#reset").hide();
$("#start").click(function(){
  var counter=setInterval(timer, 1000);
  var startbreak;
  sessioncount*=60;
  breakcount*=60;
  function timer(){
    $("#start,#minusbreak,#addbreak,#addsession,#minussession,#breaknum,#breaktitle,#sessiontitle").hide();
    $("#timetype").show();
    $("#timetype").html("Session Time: ");
    sessioncount-=1;
    if(sessioncount===0)
    {
      buzzer.play();
      clearInterval(counter);
      startbreak=setInterval(breakTimer, 1000);
      $("#sessionnum").hide();
    }
    if(sessioncount%60>=10){
      $("#sessionnum").html(Math.floor(sessioncount/60)+":"+sessioncount%60);
    }
    else
      {
        $("#sessionnum").html(Math.floor(sessioncount/60)+":"+"0"+sessioncount%60);
      }
    }

$("#sessionnum").html(sessioncount);

  function breakTimer(){
    $("#timetype").show();
    $("#timetype").html("Break Time!!! ");
    $("#breaknum").show();
    breakcount-=1;
    if(breakcount===0){
    buzzer.play();
    clearInterval(startbreak);
    $("#reset").show();
    $("#breaknum,#timetype").hide();
  }
    if(breakcount%60>=10){
      $("#breaknum").html(Math.floor(breakcount/60)+":"+breakcount%60);
    }
    else
      {
        $("#breaknum").html(Math.floor(breakcount/60)+":"+"0"+breakcount%60);
      }
    }
    $("#breaknum,#timetype").hide();
    $("#breaknum").html(breakcount);

});
$("#reset").click(function(){
  sessioncount=25;
  breakcount=5;
  $("#sessionnum").html(sessioncount);
  $("#breaknum").html(breakcount);
  $("#start,#minusbreak,#breaknum,#sessionnum,#addbreak,#addsession,#minussession,#breaktitle,#sessiontitle").show();
  $("#reset,#timetype").hide();
});

$("#minusbreak").click(function(){
if(breakcount>1){
breakcount-=1;
$("#breaknum").html(breakcount);
//console.log(breakcount);
}
});
$("#addbreak").click(function(){
breakcount+=1;
$("#breaknum").html(breakcount);
//console.log(breakcount);
});
$("#minussession").click(function(){
if(sessioncount>5){
sessioncount-=5;
$("#sessionnum").html(sessioncount);
//console.log(sessioncount);
}
});
$("#addsession").click(function(){
sessioncount+=5;
$("#sessionnum").html(sessioncount);
//console.log(sessioncount);
});
});
