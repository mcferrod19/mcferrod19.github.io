function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
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

    var title = document.querySelector(".mobile-title");
    title.style.backgroundPosition = traX + "%" + traY + "%";
  });

}

ready(moveTitleImage);
