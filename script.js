function sortTable() {
	var table = document.querySelector('table');
	var tbody = table.querySelector('tbody');
	var rows = Array.from(tbody.querySelectorAll('tr'));
	rows.sort(function(a, b) {
		var aPoints = parseInt(a.cells[1].textContent);
		var bPoints = parseInt(b.cells[1].textContent);
		return bPoints - aPoints;
	
