var cellCount = 2;
var rowCount = 5;
var mainTable;

var addRow = function(name) {
	return mainTable.innerHTML += createRow(name);
};

var remove = function(idArr) {
  var trElements = mainTable.innerHTML.split(`<tr class="`);
  var result = trElements.filter( function(element) {
    var remove = false;
    for (var j = 0; j < idArr.length; j++) {
      if(element.startsWith(idArr[j])) {
        remove = true;
      }
    }
    return !remove;
  });
	return mainTable.innerHTML = result.join(`<tr class="`);
};

var createRow = function(name) {
	var rowIndex = +mainTable.lastChild.className + 1 || 0;

	return `<tr class="${rowIndex}">
		<td>${name}</td>
		<td><input type="checkbox" id ="${rowIndex}" class="checkbox"/></td>
	</tr>`;	
};

var buttonsController = function(event) {
	if(event.target.className === "add") {
    var name = document.querySelector(".name");
    addRow(name.value);
    return name.value = '';
	}
	else if(event.target.className === "remove") {
    var inputElements = document.getElementsByClassName('checkbox');
    var idsToRemove = [];
    for (var i = 0; inputElements[i]; ++i) {
      if (inputElements[i].checked) {
        idsToRemove.push(inputElements[i].id);
      }
    }
		return remove(idsToRemove);
	}
	else return;
}

var main = function() {
	mainTable = document.querySelector(".main").querySelector("tbody");
  document.querySelector(".buttons").addEventListener("click", buttonsController);
  var textArr = ["C++", "C#", "Java", "JavaScript", "Ruby", "Python"];
	var tableBody = "";
	for (var i = 0; i < rowCount; i++) {
    addRow(textArr[i]);
	}
}

window.addEventListener("load", main, false);
