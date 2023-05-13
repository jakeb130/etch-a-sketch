const container = document.getElementById("container");
const resetButton = document.getElementById("resetButton");
const penColor = "red";

function createGrid(gridSize) {
  container.innerHTML = "";
  const cellSize = 480 / gridSize;

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.width = cellSize + "px";
      cell.style.height = cellSize + "px";
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = penColor;
      });
      container.appendChild(cell);
    }
  }
}

function resetGrid() {
  let newGridSize = prompt("Enter a new grid size (up to 100):");
  if (newGridSize > 100) {
    newGridSize = 100;
  }
  createGrid(newGridSize);
}

createGrid(16);

resetButton.addEventListener("click", resetGrid);
