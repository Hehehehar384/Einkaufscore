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
}

function decreasePoints(row) {
	var pointsCell = row.cells[1];
	var points = parseInt(pointsCell.textContent);
	if (points > 0) {
		pointsCell.textContent = points - 1;
	}
}

function updateTable() {
	sortTable();
}

document.addEventListener('DOMContentLoaded', function() {
	sortTable();
});

var updateButton = document.getElementById('update-button');
updateButton.addEventListener('click', updateTable);


