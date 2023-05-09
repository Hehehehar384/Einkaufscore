function sortTable() {
  var table = document.querySelector('table');
  var tbody = table.querySelector('tbody');
  var rows = Array.from(tbody.querySelectorAll('tr'));
  rows.sort(function(a, b) {
    var aPoints = parseInt(a.cells[1].textContent);
    var bPoints = parseInt(b.cells[1].textContent);
    return bPoints - aPoints;
  });
  tbody.innerHTML = "";
  rows.forEach(function(row) {
    tbody.appendChild(row);
  });
}

function addPoints(row) {
  var pointsInput = row.querySelector('input[type="number"]');
  var points = parseInt(pointsInput.value);
  if (!isNaN(points)) {
    var currentPoints = parseInt(row.cells[1].textContent);
    row.cells[1].textContent = currentPoints + points;
    pointsInput.value = "";
    sortTable();
  }
}
