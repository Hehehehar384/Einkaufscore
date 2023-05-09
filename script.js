function addPoints(spanId) {
  const span = document.getElementById(spanId);
  let points = parseInt(span.textContent);
  points++;
  span.textContent = points;
  sortTable();
}

function subtractPoints(spanId) {
  const span = document.getElementById(spanId);
  let points = parseInt(span.textContent);
  points--;
  span.textContent = points;
  sortTable();
}

function sortTable() {
  const table = document.getElementById("myTable");
  let switching = true;
  while (switching) {
    switching = false;
    const rows = table.rows;
    for (let i = 1; i < rows.length - 1; i++) {
      let shouldSwitch = false;
      const firstCell = rows[i].getElementsByTagName("td")[1];
      const secondCell = rows[i + 1].getElementsByTagName("td")[1];
      const firstPoints = parseInt(firstCell.textContent);
      const secondPoints = parseInt(secondCell.textContent);
      if (firstPoints < secondPoints) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i +
