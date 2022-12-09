var score = 0;

//2. Crea la función updateScore

function updateScore(){
    score = score + 1;
    document.getElementById("score").innerHTML = "Puntos: " + score;

}


//3. Crea la función saveScore
function saveScore(){
    localStorage.setItem("score", score);
}


//4. Crea la función nextPage
function nextPage(){
    window.location = "activity_2.html";
}