function sortTable() {
	var table = document.querySelector('table');
	var tbody = table.querySelector('tbody');
	var rows = Array.from(tbody.querySelectorAll('tr'));
	rows.sort(function(a, b) {
		var aPoints = parseInt(a.cells[1].textContent);
		var bPoints = parseInt(b.cells[1].textContent);
		return bPoints - aPoints;
	});
	rows.forEach(function(row) {
		tbody.appendChild(row);
	});
}

function increasePoints(row) {
	var pointsCell = row.cells[1];
	var points = parseInt(pointsCell.textContent);
	pointsCell.textContent = points + 1;
	sortTable();
}

function decreasePoints(row) {
	var pointsCell = row.cells[1];
	var points = parseInt(row.cells[1].textContent);
	if (points > 0) {
		row.cells[1].textContent = points - 1;
		sortTable();
	}
}

function updateTable() {
	sortTable();
}

document.addEventListener('DOMContentLoaded', function() {
	sortTable();
	setInterval(sortTable, 5000); // Automatische Aktualisierung alle 5 Sekunden
});

var updateButton = document.getElementById('update-button');
updateButton.addEventListener('click', updateTable);

var rows = document.getElementsByTagName('tr');
for (var i = 1; i < rows.length; i++) {
	var row = rows[i];
	var plusButton = row.querySelector('.plus');
	var minusButton = row.querySelector('.minus');
	plusButton.addEventListener('click', function() {
		increasePoints(this.parentNode.parentNode);
	});
	minusButton.addEventListener('click', function() {
		decreasePoints(this.parentNode.parentNode);
	});
}
