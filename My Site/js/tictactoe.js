// Defining variables for our program
const X_Text = "✘";
const O_Text = "𝗢";
const spaces = [];
let currentText = O_Text;

const playText = document.getElementById("playText");
const result = document.getElementById("result");
var reset = document.querySelector(".my-reset-btn");
var boxes = Array.from(document.getElementsByClassName("box"));

function resetFunction() {
   spaces.forEach((space, index) => {
      spaces[index] = null;
   });
   boxes.forEach((box) => {
      box.innerHTML = "";
   });
   playText.innerHTML = "Let's Play Again!";
}

reset.addEventListener("click", resetFunction);

// Updating the field
const boxClicked = (e) => {
   const id = e.target.id;
   if (!spaces[id]) {
      spaces[id] = currentText;
      e.target.textContent = currentText;

      if (playerWon()) {
         playText.innerText = `${currentText} has won!`;
         return;
      }

      if (currentText === O_Text) {
         currentText = X_Text;
      } else {
         currentText = O_Text;
      }
   }
};

const playerWon = () => {
   if (spaces[0] === currentText) {
      if (spaces[1] === currentText && spaces[2] === currentText) {
         result.innerHTML = `${currentText} has won at top.`;
         return true;
      }
      if (spaces[3] === currentText && spaces[6] === currentText) {
         result.innerHTML = `${currentText} has won at left.`;
         return true;
      }
      if (spaces[4] === currentText && spaces[8] === currentText) {
         result.innerHTML = `${currentText} has won across diagonal.`;
         return true;
      }
   }
   if (spaces[8] === currentText) {
      if (spaces[2] === currentText && spaces[5] === currentText) {
         result.innerHTML = `${currentText} has won at right.`;
         return true;
      }
      if (spaces[6] === currentText && spaces[7] === currentText) {
         result.innerHTML = `${currentText} has won at bottom.`;
         return true;
      }
   }
   if (spaces[1] === currentText) {
      if (spaces[4] === currentText && spaces[7] === currentText) {
         result.innerHTML = `${currentText} has won at vertical center.`;
         return true;
      }
   }
   if (spaces[3] === currentText) {
      if (spaces[4] === currentText && spaces[5] === currentText) {
         result.innerHTML = `${currentText} has won at horizontal center.`;
         return true;
      }
   }
   if (spaces[2] === currentText) {
      if (spaces[4] === currentText && spaces[6] === currentText) {
         result.innerHTML = `${currentText} has won across diagonal.`;
         return true;
      }
   }
};

for (var i = 0; i < boxes.length; i++) {
   boxes[i].addEventListener("click", boxClicked);
}
