const imgSrc = document.getElementById("myImg");
const offBtn = document.getElementById("offBtn");
const myContainer = document.getElementById("myContainer");
const myHeading = document.getElementById("myHeading");

const turnOn = () => {
   imgSrc.src = "../images/onLight.png";
   myContainer.style.backgroundColor = "white";
   myHeading.style.color = "blue";
   myHeading.innerHTML = "Don't forget to turn OFF the light";
};

const turnOff = () => {
   imgSrc.src = "../images/offLight.png";
   myContainer.style.backgroundColor = "#7a7a7a";
   myHeading.style.color = "white";
   myHeading.innerHTML = "The Room Looks Dark, Turn ON the Light";
};

onBtn.addEventListener("click", turnOn);
offBtn.addEventListener("click", turnOff);
