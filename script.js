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
	var currentPoints = parseInt(row.cells[1].textContent);
	row.cells[1].textContent = currentPoints + points;
	sortTable();
}

function savePoints() {
	var table = document.querySelector('table');
	var rows = Array.from(table.querySelectorAll('tbody tr'));
	var data = [];
	rows.forEach(function(row) {
		var name = row.cells[0].textContent;
		var points = parseInt(row.cells[1].textContent);
		data.push({'name': name, 'points': points});
	});

	fetch('/save', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then(function(response) {
		alert('Punkte wurden gespeichert!');
	})
	.catch(function(error) {
		alert('Fehler beim Speichern der Punkte.');
	});
}
