// Array mit den Personen und ihren Punkten
var personen = [
	{ name: "Jonas", punkte: 0 },
	{ name: "Peter", punkte: 0 },
	{ name: "Mama", punkte: 0 },
	{ name: "Papa", punkte: 0 }
];

// Funktion, um die Tabelle anzuzeigen
function tabelleAnzeigen() {
	// Tabelle auswählen
	var tabelle = document.getElementById("einkaufsliste").getElementsByTagName('tbody')[0];

	// Alle vorhandenen Zeilen aus der Tabelle entfernen
	while (tabelle.firstChild) {
		tabelle.removeChild(tabelle.firstChild);
	}

	// Personen nach Punktzahl sortieren
	personen.sort(function(a, b) {
		return b.punkte - a.punkte;
	});

	// Jede Person zur Tabelle hinzufügen
	for (var i = 0; i < personen.length; i++) {
		var person = personen[i];

		var ze
