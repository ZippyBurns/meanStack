var heffalumps = { 
    character: "Heffalumps",
    honey: false,
    greet: function(){
        console.log("helloooo!! Welcome to my House!!");
    }

};

var eeyore = { 
    character: "Eeyore",
    honey: false,
    greet: function(){
        console.log("Hey, I'm sad you showed up.");
    }
};

var kanga = { 
    character: "Kanga",
    honey: false,
    greet: function(){
        console.log("Hey, How high can you hop!?");
    }
};

var owl = {
     character: "Owl",
     honey: false,
     greet: function(){
         console.log("Hoot, Hoot, How many licks does it take?");
     }
};

var robin = {
     character: "Christopher Robin",
     honey: false,
    greet: function(){
        console.log("I just love all of my friends so much.  What's your name?");
    }
};

var rabbit = { 
    character: "Rabbit",
    honey: false,
    greet: function(){
        console.log("I'm late, late! oh wait, no, wrong rabbit.");
    }
};

var gopher = { 
    character: "Gopher",
    honey: false,
    greet: function(){
        console.log("It's time to dig, how good are you at digging?");
    }
};

var piglet = {
     character: "Piglet",
     honey: false,
     greet: function(){
         console.log("oh! H-h-h-hello, I wasn't expecting anybody. H-h-here, sit d-d-down.  I'll m-m-make some tea.");
     }
    };

var pooh = {
     character: "Winnie the Pooh",
     honey: false,
     greet: function(){
         console.log("I just love honey!!");
     }
    };

var bees = {
     character: "Bees" ,
     honey : true,
     greet: function(){
         console.log("buzzzzz");
     }
};

var tigger = { 
    character: "Tigger",
    honey: false,
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

bees.north = rabbit;
bees.west = pooh;

tigger.north = pooh;


var player = {
    location: tigger,
    carry: false,
    pickUp: function(){},
    drop: function(){}
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

function pickUp(){
    if (player.location.honey == true){
        player.carry = true;
        console.log("You got some honey from the bees.  Phew! you didn't get stung.")
    }else{
        console.log("uh oh! There's no honey here!");
    }
}

function mission(){
    var locations = [eeyore, heffalumps, kanga, owl, robin, rabbit, gopher, piglet, pooh, tigger];
    var rand = Math.floor(Math.random() * 10);
    console.log(rand);
    var target = locations[rand];
    console.log(target);
    console.log("You must deliver honey to " + target.character);
    return target;
}
target = mission();

function drop(){
    if (player.location == target && player.carry == true){
        console.log("You Won! Thanks for the honey!"+target.character +" is very pleased")
    }
    else{
        console.log("oops! You can't do that here.")
    }

}


