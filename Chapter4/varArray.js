var adh = {name:"Adhithya", luckyNumbers:[8,10,11]}
var arj = {name:"Adhithya", luckyNumbers:[1,5]}
var hermanos = [adh,arj];

hermanos[0];
//{name: "Adhithya", luckyNumbers: Array(3)}

hermanos[0].name;
//Adhithya

hermanos[0].luckyNumbers[2];
//go get the first element in hermanos which is adh.
//go into that and get the second array element which is 11.
//Since we reached the end of the line output 11.
