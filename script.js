let database = firebase.database().ref();

database.on("child_added",addMessageTB);
function addMessageTB(rowData){
    let row = rowData.val(); // Returns an object just like the "value" we pushed
    let board = document.querySelector("#charactersList")
    let data = document.createElement("li");

    board.innerHTML += '<li class="character"> '+ '<p>' + row.DATA + '</p>' + '<br>' + '<h2>' + row.NAME + '</h2>'  + '<img src ="' +row.IMG +'">' + ' </li>';
    board.appendChild(data);

}




// const charactersList = document.getElementById('charactersList');
// const searchBar = document.getElementById('searchBar');
// let hpCharacters = [];

// searchBar.addEventListener('keyup', (e) => {
//     const searchString = e.target.value.toLowerCase();

//     const filteredCharacters = hpCharacters.filter((character) => {
//         return (
//             character.name.toLowerCase().includes(searchString) ||
//             character.house.toLowerCase().includes(searchString)
//         );
//     });
//     displayCharacters(filteredCharacters);
// });
