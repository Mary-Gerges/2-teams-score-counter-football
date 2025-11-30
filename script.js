let scoreA = 0;
let scoreB = 0;

function increaseA() {
    scoreA++;
    document.getElementById("scoreA").textContent = scoreA;
}
function decreaseA() {
    if (scoreA > 0) scoreA--;
    document.getElementById("scoreA").textContent = scoreA;
}

function increaseB() {
    scoreB++;
    document.getElementById("scoreB").textContent = scoreB;
}
function decreaseB() {
    if (scoreB > 0) scoreB--;
    document.getElementById("scoreB").textContent = scoreB;
}

function resetScores() {
    scoreA = 0;
    scoreB = 0;
    document.getElementById("scoreA").textContent = scoreA;
    document.getElementById("scoreB").textContent = scoreB;
}