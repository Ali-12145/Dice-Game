var randomPlayer1 = Math.floor((Math.random() * 6) + 1);

var imageSource1 = "images/dice" + randomPlayer1 + ".png";

var randomPlayer2 = Math.floor((Math.random()*6)+1);

var imageSource2 = "images/dice" + randomPlayer2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imageSource1);
document.querySelectorAll("img")[1].setAttribute("src", imageSource2);





if (randomPlayer1 > randomPlayer2) {
    document.querySelector("h1").innerHTML = "Player 1 Won!";
}
else if(randomPlayer1<randomPlayer2) {
    document.querySelector("h1").innerHTML = "Player 2 Won!";
    
}
else 
document.querySelector("h1").innerHTML = "DRAW!";
    
