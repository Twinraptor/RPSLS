rpsls = (yourChoice) => {
    console.log(yourChoice);
    let humanChoice = yourChoice.id;
    let botChoice = randomPick();
    console.log(humanChoice,botChoice);
    results = decideWinner(humanChoice,botChoice);
    console.log(results);
    message=finalResults(results);
    console.log(message);
    rpslsEndDisplay(humanChoice, botChoice, message);
}

randomPick = () => {
    let randomNum= Math.floor(Math.random() * (0, 5));
    switch(randomNum) {
        case 0:
            pick = "rock";
            break;
        case 1:
            pick = "paper";
            break;
        case 2:
            pick = "scissors";
            break;
        case 3:
            pick = "lizard";
            break;
        case 4:
            pick = "spock";
            break;
    }
    return pick;
}

decideWinner = (humanChoice,botChoice) => {
    const rpslsDB= {
        "rock": {"rock": 0.5 , "paper" : 0 , "scissors" : 1 , "lizard" : 1 , "spock" : 0},
        "paper": {"rock": 1 , "paper" : 0.5 , "scissors" : 0 , "lizard" : 0 , "spock" : 1},
        "scissors": {"rock": 0 , "paper" : 1 , "scissors" : 0.5 , "lizard" : 1 , "spock" : 0},
        "lizard": {"rock": 0 , "paper" : 1 , "scissors" : 0 , "lizard" : 0.5 , "spock" : 1},
        "spock": {"rock": 1 , "paper" : 0 , "scissors" : 1 , "lizard" : 0 , "spock" : 0.5},
    }
    let score = rpslsDB[humanChoice][botChoice];

    return score;
}

finalResults = (results) => {
    switch(results) {
        case 0:
            message= {"message": "You lost!", "color": "red"};
            break;
        case 0.5:
            message= {"message": "You tied!", "color": "yellow"};
            break;
        case 1:
            message= {"message": "You won!", "color": "green"};
            break;
    }
    return message;
}

rpslsEndDisplay = (humanChoice, botChoice, message) => {
    const imagesDB={
        "rock" : document.getElementById("rock").src,
        "paper" : document.getElementById("paper").src,
        "scissors" : document.getElementById("scissors").src,
        "lizard" : document.getElementById("lizard").src,
        "spock" : document.getElementById("spock").src,
    }
    // remove images
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();
    document.getElementById("lizard").remove();
    document.getElementById("spock").remove();

    var humanDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img id='result1' src='" + imagesDB[humanChoice] + "' alt='' >"
    messageDiv.innerHTML = "<h1 id='result2' style='color:" + message["color"] + "; '>" + message["message"] + "</h1>"
    botDiv.innerHTML = "<img id='result3' src='" + imagesDB[botChoice] + "' alt='' >"
    //show the two choices and message
    document.getElementById("gamebody1").appendChild(humanDiv);
    document.getElementById("gamebody1").appendChild(messageDiv);
    document.getElementById("gamebody1").appendChild(botDiv);
}