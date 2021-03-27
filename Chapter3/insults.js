//write on console
let food = ["cheese slice", "orange", "egg"];
let sense = ["tastes", "smells"];
let possesion = ["clothes", "room", "school"];
let ranFood = food[Math.floor(Math.random() * food.length)];
let ranSense = sense[Math.floor(Math.random() * sense.length)];
let ranPossesion = possesion[Math.floor(Math.random() * possesion.length)];
let sentence = "Your " + ranPossesion + " " + ranSense + " like a rotten " + ranFood;
sentence;