const width = 25;
const height = 20;

// Create Game of Life instance
const gol = new GameOfLife(width, height);

// Actual table cells
const cells = [];

// Create Table
const table = document.createElement("tbody");
for (let h = 0; h < height; h++) {
  const tr = document.createElement("tr");
  for (let w = 0; w < width; w++) {
    const td = document.createElement("td");
    td.dataset.row = h;
    td.dataset.col = w;
    cells.push(td);
    tr.append(td);
  }
  table.append(tr);
}
document.getElementById("board").append(table);


const paint = () => {
  cells.forEach(td => {
    const cellValue = gol.getCell(td.dataset.row, td.dataset.col);
    if (cellValue === 1) {
      td.classList.add("alive");
    } else {
      td.classList.remove("alive");
    }
  });
}

// Add event Listeners
document.getElementById("board").addEventListener("click", (event) => {
  gol.toggleCell(event.target.dataset.row, event.target.dataset.col);
  paint();
});

document.getElementById("step_btn").addEventListener("click", () => {
  gol.tick();
  paint();
});

let interval = null;
document.getElementById("play_btn").addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(() => {
      gol.tick();
      paint();
    }, 100);
  } else {
    clearInterval(interval);
    interval = null;
  }
});

document.getElementById("reset_btn").addEventListener("click", () => {
  gol.forEachCell((row, col) => {
    gol.setCell(Math.round(Math.random()), row, col);
  })
  paint();
});

document.getElementById("clear_btn").addEventListener("click", () => {
  gol.forEachCell((row, col) => {
    gol.setCell(0, row, col);
  })
  paint();
});
