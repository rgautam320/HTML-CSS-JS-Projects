// Getting the user inputs

const player1Color = "rgb(0, 0, 255)";
const player2Color = "rgb(255, 0, 0)";

var game_on = true;
var table = $("table tr");

$(function () {
   $('[data-toggle="tooltip"]').tooltip();
});

// To Reset the Page
function functionReset() {
   window.location.reload();
}

// To change the color of box
function changeColor(rowIndex, colIndex, color) {
   return table.eq(rowIndex).find("td").eq(colIndex).find("button").css("background-color", color);
}

// To return the color
function returnColor(rowIndex, colIndex) {
   return table.eq(rowIndex).find("td").eq(colIndex).find("button").css("background-color");
}

// Check for Button Index
function checkBottom(colIndex) {
   var colorReport = returnColor(5, colIndex);
   for (let row = 5; row > -1; row--) {
      colorReport = returnColor(row, colIndex);
      if (colorReport === "rgb(240, 255, 255)") {
         return row;
      }
   }
}

// Check for Color Match
function colorMatchCheck(one, two, three, four) {
   return one === two && one === three && one === four && one !== "rgb(240, 255, 255)" && one !== undefined;
}

// Check for Horizontal Wins
function horizontalWinCheck() {
   for (var row = 0; row < 6; row++) {
      for (var col = 0; col < 4; col++) {
         if (colorMatchCheck(returnColor(row, col), returnColor(row, col + 1), returnColor(row, col + 2), returnColor(row, col + 3))) {
            return true;
         } else {
            continue;
         }
      }
   }
}

// Check for Vertical Wins
function verticalWinCheck() {
   for (var col = 0; col < 7; col++) {
      for (var row = 0; row < 3; row++) {
         if (colorMatchCheck(returnColor(row, col), returnColor(row + 1, col), returnColor(row + 2, col), returnColor(row + 3, col))) {
            return true;
         } else {
            continue;
         }
      }
   }
}

// Check for Diagonal Wins
function diagonalWinCheck() {
   for (var col = 0; col < 5; col++) {
      for (var row = 0; row < 7; row++) {
         if (colorMatchCheck(returnColor(row, col), returnColor(row + 1, col + 1), returnColor(row + 2, col + 2), returnColor(row + 3, col + 3))) {
            return true;
         } else if (colorMatchCheck(returnColor(row, col), returnColor(row - 1, col + 1), returnColor(row - 2, col + 2), returnColor(row - 3, col + 3))) {
            return true;
         } else {
            continue;
         }
      }
   }
}

// Game End
function gameEnd(winningPlayer) {
   for (var col = 0; col < 7; col++) {
      for (var row = 0; row < 7; row++) {
         $(".board").fadeOut();
         $("h1")
            .text(winningPlayer + " has won! Click on Reset to play again!")
            .css("fontSize", "50px");
      }
   }
}

function myPlayers() {
   let player1, player2;
   player1 = document.getElementById("playerOne").value;
   player2 = document.getElementById("playerTwo").value;

   // Start with Player One
   var currentPlayer = 1;
   var currentName = player1;
   var currentColor = player1Color;

   // Start with Player One
   $("h3").text(player1 + ": it is your turn, please pick a column to drop your blue chip.");

   $(".board button").on("click", function () {
      // Recognize what column was chosen
      var col = $(this).closest("td").index();

      // Get back bottom available row to change
      var bottomAvail = checkBottom(col);

      // Drop the chip in that column at the bottomAvail Row
      changeColor(bottomAvail, col, currentColor);

      // Check for a win or a tie.
      if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
         gameEnd(currentName);
      }

      // If no win or tie, continue to next player
      currentPlayer = currentPlayer * -1;

      // Re-Check who the current Player is.
      if (currentPlayer === 1) {
         currentName = player1;
         $("h3").text(currentName + ": it is your turn, please pick a column to drop your blue chip.");
         currentColor = player1Color;
      } else {
         currentName = player2;
         $("h3").text(currentName + ": it is your turn, please pick a column to drop your red chip.");
         currentColor = player2Color;
      }
   });
}
