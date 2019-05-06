var heffalumps = { 
    character: "Heffalumps",
    greet: function(){
        console.log("helloooo!! Welcome to my House!!");
    }

};

var eeyore = { 
    character: "Eeyore",
    greet: function(){
        console.log("Hey, I'm sad you showed up.");
    }
};

var kanga = { 
    character: "Kanga",
    greet: function(){
        console.log("Hey, How high can you hop!?");
    }
};

var owl = {
     character: "Owl",
     greet: function(){
         console.log("Hoot, Hoot, How many licks does it take?");
     }
};

var robin = {
     character: "Christopher Robin",
    greet: function(){
        console.log("I just love all of my friends so much.  What's your name?");
    }
};

var rabbit = { 
    character: "Rabbit",
    greet: function(){
        console.log("I'm late, late! oh wait, no, wrong rabbit.");
    }
};

var gopher = { 
    character: "Gopher",
    greet: function(){
        console.log("It's time to dig, how good are you at digging?");
    }
};

var piglet = {
     character: "Piglet",
     greet: function(){
         console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
     }
    };

var pooh = {
     character: "Winnie the Pooh",
     greet: function(){
         console.log("oh! H-h-h-hello, I wasn't expecting anybody. H-h-here, sit d-d-down.  I'll m-m-make some tea.");
     }
    };

var bees = {
     character: "Bees" ,
     greet: function(){
         console.log("buzzzzz");
     }
};

var tigger = { 
    character: "Tigger",
    greet: function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
    }
    
};

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
        player.location.greet();
    }
}


