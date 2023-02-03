// Assignaments to identify the options
// 1 ---> rock 
// 2 ---> to papper 
// 3 ---> to scissor 

// Function to create a random number 
function random( min, max ) {
    return Math.floor( Math.random() * (max - min + 1) + min);
}

// Function to determine what was chose
function choose( move ) {
    let result = " ";
    if (move == 1) {
        result = "✊ Rock";
    } else if (move == 2) {
        result = "🤚 Papper";
    } else if (move == 3) {
        result = "✌ Scissor";
    } else {
        result = "Selection is wrong";
    }
    return result;
}

// Declaration and assigns of variables 
let gamer = 0, pc = 0, wins = 0, loses = 0, draws = 0, times = 0, matchs = 0;

times = prompt("Choose the times you want to play\n1 for one game\n3 to the best of three\n5 to the best of five");

while (wins < times && loses < times) {
    pc = random(1, 3);
    gamer = prompt('Choose between: \n1 to select rock\n2 to select papper\n3 to select scissor');

    // Game choose 
    alert("PC choose: " + choose(pc));
    alert("Gamer choose: " + choose(gamer));

    // Game 
    if (gamer == pc) {
        alert("Draw");
        draws += 1;
    } else if (gamer == 1 && pc == 3 || gamer == 2 && pc == 1 || gamer == 3 && pc == 2) {
        alert("You win");
        wins += 1;
    } else {
        alert("You lost");
        loses += 1;
    }
    matchs += 1;
}

alert("You win " + wins + " times, lose " + loses + " times, draws " + draws + " times and you match " + matchs + " times");
