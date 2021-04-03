function draw (draw, howManyTimes){
    for(let i = 0; i < howManyTimes; i++){
        document.getElementById("draw").innerHTML += draw + "<br/>";
    }
}
draw(":)", "1000");