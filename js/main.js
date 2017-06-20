'use strict';

//Move Title Image

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function moveTitleImage() {
  var mouseX, mouseY;
  var ww = window.offsetWidth;
  var wh = window.offsetHeight;
  var traX, traY;

  document.addEventListener('mousemove', function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = 4 * mouseX / 570 + 40;
    traY = 4 * mouseY / 570 + 50;

    var title = document.querySelector(".title");
    title.style.backgroundPosition = traX + "%" + traY + "%" ;
  });

}

//modal

var btnOpen=document.querySelector('.open');
var modal= document.querySelector('.modal');
var btnClose=document.querySelector('.close');

btnOpen.onclick=function(){
  modal.style.display="block";
};

btnClose.onclick=function() {
  modal.style.display="none";
};

//second mmodal proyect

var btnOpenProyect=document.querySelector('.open-proyects');
var modalProyect= document.querySelector('.modal-proyects');
var btnCloseProyect=document.querySelector('.close-proyects');

btnOpenProyect.onclick=function(){
  modalProyect.style.display="block";
};

btnCloseProyect.onclick=function() {
  modalProyect.style.display="none";
};

//modal Contact

var btnOpenContact=document.querySelector('.open-contact');
var modalContact= document.querySelector('.modal-contact');
var btnCloseContact=document.querySelector('.close-contact');

btnOpenContact.onclick=function(){
  modalContact.style.display="block";
};

btnCloseContact.onclick=function() {
  modalContact.style.display="none";
};

//modal links

var btnOpenLinks=document.querySelector('.open-links');
var modalLinks= document.querySelector('.modal-links');
var btnCloseLinks=document.querySelector('.close-links');

btnOpenLinks.onclick=function(){
  modalLinks.style.display="block";
};

btnCloseLinks.onclick=function() {
  modalLinks.style.display="none";
};
