let cat = {
    legs:4,
    fullName: "Meow Purth",
    lovesTummyRubs: true
};

cat.legs; //4
cat.fullName; // Meow Purth
cat.lovesTummyRubs; //true.

Object.keys(cat); // ["legs", "fullName", "lovesTummyRubs"]


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