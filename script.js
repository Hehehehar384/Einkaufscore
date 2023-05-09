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
