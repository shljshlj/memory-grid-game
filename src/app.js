// Function to find integer between 0 and max (exclusive)
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


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

  return coloredCellsValues;
};


MemoryGame.renderCells = function (numOfCells, coloredCellsValues, gameBoard) {
  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild);
  }

  const coloredCellsIndexes = Array.from(coloredCellsValues);

  for (let i = 0; i < numOfCells; i++) {
    let cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    if (coloredCellsIndexes.includes(i)) cellElement.classList.add('colored');

    gameBoard.appendChild(cellElement);
  }
};

function init() {
  const $game = document.querySelector('#board');
  const coloredCellsValues = MemoryGame.generateColoredCellsValues(25, 6);

  MemoryGame.renderCells(25, coloredCellsValues, $game);
}

export { init };

