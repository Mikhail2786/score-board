let homeBoard = document.getElementById("home--board");
let guestBoard = document.getElementById("guest--board");

let homeScore = 0;
let guestScore = 0;

function addHomeOne() {
    console.log("clicked add one")
    homeScore += 1;
    homeBoard.textContent = homeScore;  
}

function addHomeTwo() {
    console.log("clicked add one")
    homeScore += 2;
    homeBoard.textContent = homeScore;  
}

function addHomeThree() {
    console.log("clicked add one")
    homeScore += 3;
    homeBoard.textContent = homeScore;  
}

function addGuestOne() {
    guestScore += 1;
    guestBoard.textContent = guestScore; 
}

function addGuestTwo() {
    guestScore += 2;
    guestBoard.textContent = guestScore; 
}

function addGuestThree() {
    guestScore += 3;
    guestBoard.textContent = guestScore; 
}

