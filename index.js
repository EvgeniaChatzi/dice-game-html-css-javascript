
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage1 = "dice" + randomNumber1 + ".png";
  var randomImageSourse1 = "images/" + randomDiceImage1;

 document.querySelectorAll("img")[0].setAttribute("src", randomImageSourse1);


   var randomDiceImage2 = "dice" + randomNumber2 + ".png";
   var randomImageSourse2 = "images/" + randomDiceImage2;

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSourse2);


if (randomDiceImage1 > randomDiceImage2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomDiceImage1 < randomDiceImage2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else if (randomDiceImage1 === randomDiceImage2) {
  document.querySelector("h1").innerHTML = "Draw!";
}







// function randomImage() {
//
// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//
//   if (randomNumber1 === 1) {
//     image = "images/dice1.png";
//   } else if (randomNumber1 === 2) {
//     image = "images/dice2.png";
//   } else if (randomNumber1 === 3) {
//     image = "images/dice3.png";
//   } else if (randomNumber1 === 4) {
//     image = "images/dice4.png";
//   } else if (randomNumber1 === 5) {
//     image = "images/dice5.png";
//   } else if (randomNumber1 === 6) {
//     image = "images/dice6.png";
//   }
//
// return image;
// }
//   document.querySelectorAll("img")[0].setAttribute("src", randomImage());
