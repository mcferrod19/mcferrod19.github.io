'use strict';

$(document).ready(function() {
  var mouseX, mouseY;
  var ww = $(window).width();
  var wh = $(window).height();
  var traX, traY;
  $(document).mousemove(function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    console.log(mouseX + " e mouseY" + mouseY);
    console.log(ww + " e wh" + wh);
    traX = 4 * mouseX / 570 + 40;
    traY = 4 * mouseY / 570 + 50;
    console.log(traX);
    $(".title").css({ "background-position": traX + "%" + traY + "%" });
  });
});

var btnOpen=document.getElementById('open');
var modal= document.getElementById('modal')
var btnClose=document.getElementById('close');

btnOpen.onclick=function(){
  modal.style.display="block";
}
btnClose.onclick=function() {
modal.style.display="none";
}
