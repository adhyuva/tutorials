let cat = {
    legs:4,
    fullName: "Meow Purth",
    lovesTummyRubs: true
};

//geting object keys.
cat.legs; //4
cat.fullName; // Meow Purth
cat.lovesTummyRubs; //true.

//geting object values.
Object.keys(cat); 
// ["legs", "fullName", "lovesTummyRubs"]

//adding objects values.
cat["owner"] = "Nobody";
cat.hello = "meow";
cat; 
/************* 
{
    legs:4,
    fullName: "Meow Purth",
    lovesTummyRubs: true,
    owner:"nobody",
    hello: "meow"
}
**************************/