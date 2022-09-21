const getMenuImage = document.querySelector("#hamburger-menu");
const getMenuDown = document.querySelector(".menu-down");
const getBody = document.body;

const homeButton = document.querySelector(".squareOne");
const redButton = document.querySelector(".squareTwo");
const orangeButton = document.querySelector(".squareThree");
const purpleButton = document.querySelector(".squareFour");
const greenButton = document.querySelector(".squareFive");


let menuToggle = function () {

  getMenuImage.addEventListener('click', function () {
      getMenuDown.classList.toggle("v-menu")
  })
}






