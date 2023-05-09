const tableRows = document.querySelectorAll("tbody tr");

function updateTable() {
  [...tableRows]
    .sort((rowA, rowB) => Number(rowB.cells[1].textContent) - Number(rowA.cells[1].textContent))
    .forEach((row, index) => row.cells[0].textContent = `${index + 1}. ${row.cells[0].textContent}`);
}

tableRows.forEach(row => {
  const plusButton = row.querySelector(".plus");
  const minusButton = row.querySelector(".minus");
  const pointCell = row.querySelector("td:nth-child(2)");

  plusButton.addEventListener("click", () => {
    const currentPoints = Number(pointCell.textContent);
    pointCell.textContent = currentPoints + 1;
    updateTable();
  });

  minusButton.addEventListener("click", () => {
    const currentPoints = Number(pointCell.textContent);
    if (currentPoints > 0) {
      pointCell.textContent = currentPoints - 1;
      updateTable();
    }
  });
});
