function myFunction() {
var x = document.getElementById("navbar-collapsed");
<<<<<<< Updated upstream
if (x.style.top === "0px") {
  x.style.top = "3000px";
=======
if (x.style.left === "-10vw") {
  x.style.left = "100vw";
>>>>>>> Stashed changes
  document.getElementsByClassName("icons")[0].style.fill = "black";
  document.getElementsByClassName("icons")[1].style.fill = "black";
  document.getElementsByClassName("icons")[2].style.fill = "black";
} else {
<<<<<<< Updated upstream
  x.style.top = "0px";
=======
  x.style.left = "-10vw";
>>>>>>> Stashed changes
  document.getElementsByClassName("icons")[0].style.fill = "white";
  document.getElementsByClassName("icons")[1].style.fill = "white";
  document.getElementsByClassName("icons")[2].style.fill = "white";
}
}
function linkClicked() {
    var x = document.getElementById("navbar-collapsed");
    x.style.left = "100vw";
    document.getElementsByClassName("icons")[0].style.fill = "black";
    document.getElementsByClassName("icons")[1].style.fill = "black";
    document.getElementsByClassName("icons")[2].style.fill = "black";
}
function burgerIcon() {
    document.getElementsByClassName("bar1")[0].classList.toggle("change");
    document.getElementsByClassName("bar2")[0].classList.toggle("change");
    document.getElementsByClassName("bar3")[0].classList.toggle("change");
}
function burgerIcons() {
    document.getElementsByClassName("bar1")[0].classList.remove("change");
    document.getElementsByClassName("bar2")[0].classList.remove("change");
    document.getElementsByClassName("bar3")[0].classList.remove("change");
}