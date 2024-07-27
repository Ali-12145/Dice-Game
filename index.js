var randomPlayer1 = Math.floor((Math.random() * 6) + 1);
var randomPlayer2 = Math.floor((Math.random()*6)+1);

function changeDice(randomNumber) {
    

    if (randomNumber === 1) {
        var element = document.getElementsByClassName("img1");
        element[0].setAttribute("src","/images/dice1.png");
    }

    else if (randomNumber === 2) {
        var element = document.getElementsByClassName("img1");
        element[0].setAttribute("src","/images/dice2.png");
    }

    else if (randomNumber === 3) {
        var element = document.getElementsByClassName("img1");
        element[0].setAttribute("src","/images/dice3.png");
    }

    else if (randomNumber === 4) {
        var element = document.getElementsByClassName("img1");
            element[0].setAttribute("src","/images/dice4.png");
    }

    else if (randomNumber === 5) {
        var element = document.getElementsByClassName("img1");
        element[0].setAttribute("src","/images/dice5.png");

    }

    else {
        var element = document.getElementsByClassName("img1");
        element[0].setAttribute("src","/images/dice6.png");
}
    
}

function changeDice2(randomNumber) {
    

    if (randomNumber === 1) {
        var element = document.getElementsByClassName("img2");
        element[0].setAttribute("src","/images/dice1.png");
    }

    else if (randomNumber === 2) {
        var element = document.getElementsByClassName("img2");
        element[0].setAttribute("src","/images/dice2.png");
    }

    else if (randomNumber === 3) {
        var element = document.getElementsByClassName("img2");
        element[0].setAttribute("src","/images/dice3.png");
    }

    else if (randomNumber === 4) {
        var element = document.getElementsByClassName("img2");
            element[0].setAttribute("src","/images/dice4.png");
    }

    else if (randomNumber === 5) {
        var element = document.getElementsByClassName("img2");
        element[0].setAttribute("src", "/images/dice5.png");

    }

    else {
        var element = document.getElementsByClassName("img2");
        element[0].setAttribute("src","/images/dice6.png");
}
    
}
changeDice(randomPlayer1);
changeDice2(randomPlayer2);




if (randomPlayer1 > randomPlayer2) {
    document.querySelector("h1").innerHTML = "Player 1 Won!";
}
else if(randomPlayer1<randomPlayer2) {
    document.querySelector("h1").innerHTML = "Player 2 Won!";
    
}
else 
document.querySelector("h1").innerHTML = "DRAW!";
    
