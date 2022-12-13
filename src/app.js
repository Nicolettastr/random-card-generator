/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  /*Card details*/
  const upperPip = document.querySelector(".p-one");

  const lowerPip = document.querySelector(".p-two");

  const cardNumber = document.querySelector(".number");

  const button = document.querySelector(".randomButton");

  let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"];

  let pips = ["♦", "♥", "♠", "♣"];

  const changeCard = () => {
    let position = Math.floor(Math.random() * 4);

    let randomNumber = Math.floor(Math.random() * 13);

    const palo = pips[position];
    const num = numbers[randomNumber];

    if (palo === "♦") {
      console.log("diamante");
      upperPip.style.color = "red";
      lowerPip.style.color = "red";
      cardNumber.style.color = "red";
    } else if (palo === "♥") {
      console.log("corazon");
      upperPip.style.color = "red";
      lowerPip.style.color = "red";
      cardNumber.style.color = "red";
    } else if (palo === "♠") {
      console.log("espiga");
      upperPip.style.color = "black";
      lowerPip.style.color = "black";
      cardNumber.style.color = "black";
    } else {
      console.log("trebol");
      upperPip.style.color = "black";
      lowerPip.style.color = "black";
      cardNumber.style.color = "black";
    }

    upperPip.innerHTML = palo;
    lowerPip.innerHTML = palo;
    cardNumber.innerHTML = num;
  };

  button.addEventListener("click", changeCard);

  /*Card instructions*/
  const instructions = document.querySelector(".guide");

  instructions.innerHTML =
    "To see your card click the button or wait 10, you can also change the card measures";

  /*Card measures*/

  const submitButton = document.querySelector(".submit");

  const changeMeasures = () => {
    const card = document.querySelector(".card-figure");
    let widthInput = parseInt(document.querySelector(".input-width").value);
    let heightInput = parseInt(document.querySelector(".input-height").value);

    card.style.width = `${widthInput}px`;
    card.style.height = `${heightInput}px`;
  };

  submitButton.addEventListener("click", changeMeasures);

  /*Card timer*/

  setInterval(() => {
    let position = Math.floor(Math.random() * 4);

    let randomNumber = Math.floor(Math.random() * 13);

    const palo = pips[position];
    const num = numbers[randomNumber];

    if (palo === "♦") {
      console.log("diamante");
      upperPip.style.color = "red";
      lowerPip.style.color = "red";
      cardNumber.style.color = "red";
    } else if (palo === "♥") {
      console.log("corazon");
      upperPip.style.color = "red";
      lowerPip.style.color = "red";
      cardNumber.style.color = "red";
    } else if (palo === "♠") {
      console.log("espiga");
      upperPip.style.color = "black";
      lowerPip.style.color = "black";
      cardNumber.style.color = "black";
    } else {
      console.log("trebol");
      upperPip.style.color = "black";
      lowerPip.style.color = "black";
      cardNumber.style.color = "black";
    }

    upperPip.innerHTML = palo;
    lowerPip.innerHTML = palo;
    cardNumber.innerHTML = num;
  }, 8000);
};
