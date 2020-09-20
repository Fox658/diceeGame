for(var i = 0; i < 2; i++) document.querySelectorAll("img")[i].setAttribute("src", `images/dice6.png`);
function randromDiceGenerator(combinationDice = []){
    for (var i = 1; i <= 2; i++) {
        var randomeDiceVal = Math.floor((Math.random() * 6) + 1);
        combinationDice.push(randomeDiceVal);
    }
    return combinationDice;
}
function assignDice(classImage, srcDice) {
    document.querySelector(classImage).setAttribute("src", `images/${srcDice}`);
}
function getTheWinner(listVal, actualNumber = 0) {
    for (var i = 0; i < listVal.length; i++) {
        if(actualNumber != 0 ){
            if(actualNumber === listVal[i]){
                document.querySelector("h1").innerHTML = "Draw!";
            } else if(listVal[i] > actualNumber) {
                document.querySelector("h1").innerHTML = "player Two Won! &#128681;";
            } else {
                document.querySelector("h1").innerHTML = "&#128681; player One Won!";
            }
        }
        var [srcDice, classImage, actualNumber] = [`dice${listVal[i]}.png`, ".img"+(i+1), listVal[i]];
        assignDice(classImage, srcDice);
    }
}
if (sessionStorage.getItem("is_reloaded")) getTheWinner(randromDiceGenerator());
sessionStorage.setItem("is_reloaded", true);
