function myFunction() {
var x = document.getElementById("navbar-collapsed");
if (x.style.top === "0px") {
  x.style.top = "3000px";
  document.getElementsByClassName("icons")[0].style.fill = "black";
  document.getElementsByClassName("icons")[1].style.fill = "black";
  document.getElementsByClassName("icons")[2].style.fill = "black";
} else {
  x.style.top = "0px";
  document.getElementsByClassName("icons")[0].style.fill = "white";
  document.getElementsByClassName("icons")[1].style.fill = "white";
  document.getElementsByClassName("icons")[2].style.fill = "white";
}
}
function linkClicked() {
    var x = document.getElementById("navbar-collapsed");
    x.style.top = "3000px";
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

gsap.registerPlugin(ScrollTrigger);

tl = gsap.timeline({
  scrollTrigger: { 
    trigger: '.ueber-uns',
    toggleActions: 'play none none reverse',
    start: 'top bottom'
  },
  repeat: -1
  },);
  tl.to(".lampe", {
    rotation: -4,
    duration: 1.5,
    transformOrigin: "top center",
    ease:"power3"
  },);
  tl.to(".lampe", {
    rotation: 4,
    duration: 1.5,
    transformOrigin: "top center",
    ease:"power3"
  },);

  tl = gsap.timeline({
    scrollTrigger: { 
      trigger: '.kontaktformular',
      toggleActions: 'play',
    },
    repeat: -1
    },);
    tl.to(".kk", {
      rotation: 360,
      duration: 25,
      transformOrigin: "center",
      ease: "none"
    },);
    tl = gsap.timeline({
      scrollTrigger: { 
        trigger: '.kontaktformular',
        toggleActions: 'play',
      },
      repeat: -1
      },);
      tl.to(".vwl", {
        rotation: -360,
        duration: 22,
        transformOrigin: "center",
        ease: "none"
      },);