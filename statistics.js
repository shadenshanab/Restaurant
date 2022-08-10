food_array = JSON.parse(localStorage.getItem('food'))
var table = document.getElementById("myTable");

for(var i = 0; i<food_array.length; i++){
	var row = table.insertRow(i+1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(1);	
	var cell4 = row.insertCell(1);	
	cell1.innerHTML = i+1000;
	cell2.innerHTML = food_array[i]["price"]
	cell3.innerHTML = food_array[i]["type"]
	cell4.innerHTML = food_array[i]["name"]	
}
