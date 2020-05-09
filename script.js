let MemoryGame = {};

MemoryGame.generateColoredCellsValues = function (
  numOfCells,
  numOfColoredCells
) {
  let coloredCellsValues = new Set();

  while (coloredCellsValues.size < numOfColoredCells) {
    let randomIndex = getRandomInt(numOfCells);
    coloredCellsValues.add(randomIndex);
  }
};

// Function to find integer between 0 and max (exclusive)
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

MemoryGame.renderColoredCells = function (coloredCellsValues, gameBoard) {
  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild);
  }

  let cellElement = document.createElement('div');
  cellElement.classList.add('cell');
};
