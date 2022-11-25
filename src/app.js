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

  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"];
  const pips = ["♦", "♥", "♠", "♣"];

  const changeCard = () => {
    const position = Math.floor(Math.random() * 4);

    const randomNumber = Math.floor(Math.random() * 13);

    console.log(0, pips[0]);
    console.log(1, pips[1]);
    console.log(2, pips[2]);
    console.log(3, pips[3]);

    console.log(pips[position]);

    if (pips[position] === "♦") {
      upperPip.classList.add("color-red");
      lowerPip.classList.add("color-red");
    } else if (pips[position] === "♥") {
      upperPip.classList.add("color-red");
      lowerPip.classList.add("color-red");
    } else if (pips[position] === "♠") {
      upperPip.classList.add("color-black");
      lowerPip.classList.add("color-black");
    } else if (pips[position] === "♣") {
      upperPip.classList.add("color-black");
      lowerPip.classList.add("color-black");
    }

    upperPip.innerHTML = pips[position];
    lowerPip.innerHTML = pips[position];
    cardNumber.innerHTML = numbers[randomNumber];
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
    const position = Math.floor(Math.random() * 4);
    const randomNumber = Math.floor(Math.random() * 13);

    if (pips[position] === "♦") {
      upperPip.classList.add("color-red");
      lowerPip.classList.add("color-red");
    } else if (pips[position] === "♥") {
      upperPip.classList.add("color-red");
      lowerPip.classList.add("color-red");
    } else if (pips[position] === "♠") {
      upperPip.classList.add("color-black");
      lowerPip.classList.add("color-black");
    } else if (pips[position] === "♣") {
      upperPip.classList.add("color-black");
      lowerPip.classList.add("color-black");
    }

    upperPip.innerHTML = pips[position];
    lowerPip.innerHTML = pips[position];
    cardNumber.innerHTML = numbers[randomNumber];
  }, 10000);
};
