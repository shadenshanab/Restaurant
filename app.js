const allFood = [];
const container = document.getElementById("container");
function Food(ID, name, type, price){
    this.ID = foodID;
    this.name = name;
    this.type = type;
    this.price = price;
    allFood.push(this);
}

var counter = 1000
function foodID(){
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
    

    const newFood = new Food(ID, name, type, price);
    console.log(newFood);
    console.log(allFood);
    saveData(allFood)

}

function saveData(allFood) {
    let object = JSON.stringify(allFood)
    localStorage.setItem("food", object);
  }

  function addToTable(savedArray){

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    
cell1.savedArray = ID;
cell2.savedArray = name;
cell3.savedArray = type;
cell4.savedArray = price;

    //cell1.innerHTML = ID;
    // cell2.innerHTML = name;
    // cell3.innerHTML = type;
    // cell4.innerHTML = price;
    
  }
  
  
  function getData() {
    let retrievedData = localStorage.getItem("food");  
    let savedArray = JSON.parse(retrievedData);
    console.log(saveData);



    if (savedArray != null) {

        for (let i = 0; i < savedArray.length; i++) {
          new Food(
            savedArray[i].ID,
            savedArray[i].name,
            savedArray[i].type,
            savedArray[i].price
          );
        }
      }
    
      for (let i = 0; i < allFood.length; i++) {
        allFood[i].printMenu();
      }


        console.log(allFood);
        console.log(savedArray);
        addToTable(savedArray);
    }
    getData();





