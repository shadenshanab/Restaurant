const allFood = [];
const container = document.getElementById("container");
function Food(ID, name, type, price){
    this.ID = foodID;
    this.name = name;
    this.type = type;
    this.price = price;
    allFood.push(this);
}


const counter = 1000;
function foodID(counter){
    return counter++;
}


let form = document.getElementById("restaurant");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event){

    event.preventDefault();

    let ID = foodID(counter);
    
    let name = event.target.name.value;

    let type = event.target.type.value;

    let price = event.target.price.value;
    
    var table = document.getElementById("myTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = ID;
    cell2.innerHTML = name;
    cell3.innerHTML = type;
    cell4.innerHTML = price;
    
    const newFood = new Food(foodID(counter), name, type, price);
    console.log(newFood);
    console.log(allFood);

}





