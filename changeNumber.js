var number = 0;

function increment(){
    number += 1;
    document.getElementById("number").innerHTML = number;
    if (number % 2 == 0){
        document.getElementById("number").style.color = "#c4c403";
        return;
    }
    document.getElementById("number").style.color = "#cf1a17";
}

function decrement(){
    number -= 1;
    document.getElementById("number").innerHTML = number;
    if (number % 2 == 0){
        document.getElementById("number").style.color = "#c4c403";
        return;
    }
    document.getElementById("number").style.color = "#cf1a17";

}

