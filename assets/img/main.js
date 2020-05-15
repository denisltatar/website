const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const headline = document.querySelector(".headline");
const navigation = document.querySelector(".navigation");
// Missing hamburger

// Animations
const tl = new TimelineMax();

// Min 16
// tl.fromTo(hero, 1, { height: "0%"}, {height: "80%"});
tl.fromTo(hero, 1, { height: "0%"}, { height: "80%"});




