//write on console
//+ method
let food = ["cheese slice", "orange", "egg"];
let sense = ["tastes", "smells"];
let possesion = ["clothes", "room", "couch"];
let life = [" it's worthless", "trash", " it's stupidity"];
let ranFood = food[Math.floor(Math.random() * food.length)];
let ranSense = sense[Math.floor(Math.random() * sense.length)];
let ranPossesion = possesion[Math.floor(Math.random() * possesion.length)];
let ranLife = life[Math.floor(Math.random() * life.length)];
let sentence = "Your " + ranPossesion + " " + ranSense + " like a rotten " + ranFood +". Also your life feels like "+ ranLife ;
sentence;
// join method
let food = ["cheese slice", "orange", "egg"];
let sense = ["tastes", "smells"];
let possesion = ["clothes", "room", "couch"];
let life = [" it's worthless", "trash", " it's stupidity"];
let ranFood = food[Math.floor(Math.random() * food.length)];
let ranSense = sense[Math.floor(Math.random() * sense.length)];
let ranPossesion = possesion[Math.floor(Math.random() * possesion.length)];
let ranLife = life[Math.floor(Math.random() * life.length)];
let sentence = ["Your" , ranPossesion , ranSense , "like a rotten" , ranFood ,".Also your life feels like", ranLife] ;
sentence.join(" ");