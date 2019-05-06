var heffalumps = { character: "Heffalumps" };
var eeyore = { character: "Eeyore" };
var kanga = { character: "Kanga" };
var owl = { character: "Owl" };
var robin = { character: "Christopher Robin" };
var rabbit = { character: "Rabbit" };
var gopher = { character: "Gopher" };
var piglet = { character: "Piglet" };
var pooh = { character: "Winnie the Pooh" };
var bees = { character: "Bees" };
var tigger = { character: "Tigger" };

heffalumps.west = eeyore;

eeyore.east = heffalumps;
eeyore.south = kanga;

kanga.north = eeyore;
kanga.south = robin;

owl.east = robin;
owl.south = piglet;

robin.north = eeyore;
robin.east = rabbit;
robin.south = pooh;
robin.west = owl;

rabbit.east = gopher;
rabbit.south = bees;
rabbit.west = robin;

gopher.west = rabbit;

piglet.north = owl;
piglet.east = pooh;

pooh.north = robin;
pooh.east = bees;
pooh.south = tigger;
pooh.west = piglet;

tigger.north = pooh;


var player = {
    location: tigger,
    move: move
}

function move(direction) {
    if (player.location[direction] == null) {
        console.log("invalid move")
    }
    else {
        player.location = player.location[direction];
        console.log(player.location);
    }
}


