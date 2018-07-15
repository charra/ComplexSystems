var cellCount = 3;
var rowCount = 13;
var mainTable;

var addRow = function() {
	return mainTable.innerHTML += createRow();
};

var removeRow = function() {
	return mainTable.innerHTML = mainTable.innerHTML.split("<tr>").slice(0, -1).join("<tr>");
};

var createRow = function() {
	var rowText = "";
	for (var i = 0; i < cellCount; i++) {
		rowText += createCell();		
	}	
		return `<tr>${rowText}</tr>`;	
};

var createCell = function() {
	var randomText = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	return `<td>${randomText}</td>`;
};

var buttonsController = function(event) {
	if(event.target.className === "add") {
		return addRow();
	}
	else if(event.target.className === "remove") {
		return removeRow();
	}
	else return;
}

var main = function() {
	mainTable = document.querySelector(".main").querySelector("tbody");
	document.querySelector(".buttons").addEventListener("click", buttonsController);
	var tableBody = "";
	for (var i = 0; i < rowCount; i++) {
		tableBody += createRow();		
	}
	return mainTable.innerHTML = tableBody;
}

window.addEventListener("load", main, false);
