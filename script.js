let database = firebase.database().ref();
let myJson = [];

let button = document.querySelector("#press")

button.onclick = function(event) {
    
    let board = document.querySelector("#charactersList")
    let data = document.createElement("li");
    
    event.preventDefault();
    board.innerHTML = "";
    console.log("Hello");
    database.on("child_added",addMessageTB);
    function addMessageTB(rowData){
        let row = rowData.val(); // Returns an object just like the "value" we pushed

        let userInput = document.querySelector("#searchBar")
        if (row.NAME == userInput.value) {

            board.innerHTML += '<li class="character"> '+ '<p>' + row.DATA + '</p>' + '<br>' + '<h2>' + row.NAME + '</h2>'  + '<img class=productImg src ="' +row.IMG +'">' + ' </li>';
            board.appendChild(data);
        }

    }
}
 
