let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homePoints = 0
let guestPoints = 0


// HOME SCORE FUNCTIONS
function add1() {
   homePoints += 1
   homeScore.textContent = homePoints
}

function add2() {
   homePoints += 2
   homeScore.textContent = homePoints
}

function add3() {
   homePoints += 3
   homeScore.textContent = homePoints
}

function sub1() {
    homePoints -= 1
    if (homePoints < 0) {
        homeScore.textContent = 0
        homePoints = 0
    }
    else {
        homeScore.textContent = homePoints
    }
    
}

function reset() {
    homePoints = 0
    homeScore.textContent = homePoints
}

// GUEST SCORE FUNCTIONS
function gAdd1() {
   guestPoints += 1
   guestScore.textContent = guestPoints
}
function gAdd2() {
   guestPoints += 2
   guestScore.textContent = guestPoints
}
function gAdd3() {
   guestPoints += 3
   guestScore.textContent = guestPoints
}

function gSub1() {
    guestPoints -= 1
    if (guestPoints < 0) {
        guestScore.textContent = 0
        guestPoints = 0
    }
    else {
        guestScore.textContent = guestPoints
    }
    
}

function gReset() {
    guestPoints = 0
    guestScore.textContent = guestPoints
}