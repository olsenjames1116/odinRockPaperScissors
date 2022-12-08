/* Understanding the problem:

I need to create a game that takes input from a user (rock, paper, or scissors)
and tests it against the computer's choice (rock, paper, or scissors)
to see who wins*/

/* Plan:
Does your program have a user interface? What will it look like? What functionality will the interface have?
    The program will utilize the console so no there is not user interface
What inputs will your program have? Will the user enter data or will you get input from somewhere else?
    The program will need a choice from the user and a choice from the computer to
    test against each other.
What's the desired input?
    Desired input is rock, paper, or scissors
Given your inputs, what are the steps necessary to return the desired output?
    I need to test the input was a valid choice, make the choice uppercase or lowercase
    then test it against the computer's choice. Then I need to output the result of that round.
    There are 5 rounds so score will need to be kept and the game will continue until all 5
    rounds are complete.
*/

let scoreArray;
let compScore = 0;
let userScore = 0;

//while the round is less than or equal to 5, continue the game using game()
game();

function game (){
    //for(let i=0; i<5; i++){

    //Does not begin game until the eventListener is called by clicking a
        //button for the player choice
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener("click", event => {
        
        const playerSelection = event.target.className;

        const computerChoice = getComputerChoice();
        const resultOfRound = playRound(computerChoice, playerSelection);
        displayRoundResult(computerChoice, playerSelection, resultOfRound);
        //displayFinalResult();
        })
    })
    //}
}

//generate a random choice for the computer with getComputerChoice
    //assign to randomCompChoice
function getComputerChoice(){
    let randomCompChoice = Math.trunc(Math.random() * 100);
    if (randomCompChoice <= 33){
        randomCompChoice = "rock";
    }
    else if(randomCompChoice >= 34 && randomCompChoice <= 66){
        randomCompChoice = "paper";
    }
    else{
        randomCompChoice = "scissors";
    }
    return randomCompChoice;
}
//request an input from the user using prompt() 
    //assign to promptChoice
function getPlayerSelection(){
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener("click", event => {
        
        const playerSelection = event.target.className;

        console.log(playerSelection);
        }
        )
    })
}


//test the input from getPlayerSelection to ensure it is a valid choice
    //assign to promptChoice
function testPromptChoice(promptChoice){
    while(promptChoice != "rock" && promptChoice != "paper" && promptChoice != "scissors"){
        promptChoice = prompt("Please enter a valid choice (\"rock, paper, or scissors\"):");
        promptChoice = promptChoice.toLowerCase();
    }
    return promptChoice;
}

//test the user's input against the computer's choice using playRound function
    //assign to roundResult
    //calls to keepScore with the argument givePoint
function playRound(computerChoice, playerSelection){
    let roundResult;
    let givePoint;

    /*if computer chooses rock and user chooses rock, it is a draw
        if user chooses paper, the user wins
        else, the user chose scissors and the user loses*/
    if(computerChoice === "rock"){
        if(playerSelection === "rock"){
            roundResult = "Draw! We both chose rock!";
            givePoint = 3;
        }
        else if(playerSelection === "paper"){
            roundResult = "Winner! Paper covers rock!";
            givePoint = 1;
        }
        else{
            roundResult = "Loser! Rock crushes scissors!";
            givePoint = 2;
        }
    }

    /*if computer chooses paper and user chooses rock, the user loses
    if user chooses paper, it is a draw
    else, the user chose scissors and the user wins*/
    else if(computerChoice === "paper"){
        if(playerSelection === "rock"){
            roundResult = "Loser! Paper covers rock!";
            givePoint = 2;
        }
        else if(playerSelection = "paper"){
            roundResult = "Draw! We both chose paper!";
            givePoint = 3;
        }
        else{
            roundResult = "Winner! Scissors cuts paper!"
            givePoint = 1;
        }
    }

    /*else, computer has chosen scissors
        if the user chose rock, the user wins
        else if the user chose paper, the user loses
        else, the user has chosen scissors and it is a draw*/
    else{
        if(playerSelection === "rock"){
            roundResult = "Winner! Rock crushes scissors!";
            givePoint = 1;
        }
        else if(playerSelection === "paper"){
            roundResult = "Loser! Scissors cuts paper!";
            givePoint = 2;
        }
        else{
            roundResult = "Draw! We both chose scissors!"
            givePoint = 3;
        }
    }
    keepScore(givePoint);
    return roundResult;
}

//add score to computer, user, or both based off result
function keepScore(givePoint){
    if(givePoint === 1){
        userScore++;
    }
    else if(givePoint === 2){
        compScore++;
    }
    else{
        userScore++;
        compScore++;
    }
    scoreArray = [userScore, compScore];
}

//output round result to console
function displayRoundResult(computerChoice, playerSelection, resultOfRound){
    const roundDiv = document.createElement("div");

    roundDiv.classList.add("round");

    const computerPara = document.createElement("p");
    computerPara.textContent = `Computer: ${computerChoice}`;

    const playerPara = document.createElement("p");
    playerPara.textContent = `Player: ${playerSelection}`;

    const resultPara = document.createElement("p");
    resultPara.textContent = `${resultOfRound}`;

    const dashesPara = document.createElement("p");
    dashesPara.textContent = createDashes(resultOfRound);

    const paraArray = [computerPara, playerPara, resultPara, dashesPara];
    
    paraArray.forEach(para => roundDiv.appendChild(para));

    const body = document.querySelector("body");
    body.appendChild(roundDiv);
    //console.log("Score\n-----\nUser: " + scoreArray[0] + "\nComputer: " + scoreArray[1]);
    //console.log("--------------------------------------");
}

//dynamically create dashes to more closely match the length of the last string in the div
function createDashes(resultOfRound){
    let dashes = "";

    for(let i=0; i<resultOfRound.length + 10; i++){
        dashes += "-";
    }

    return dashes;
}

//figures out the final score and outputs the result
/*function displayFinalResult(){
    let userScoreFinal = scoreArray[0];
    let compScoreFinal = scoreArray[1];

    if(userScoreFinal>compScoreFinal){
        console.log("You won the game...you must have cheated. Think you can do it again? Reload the browser for a new game");
    }
    else if(compScoreFinal>userScoreFinal){
        console.log("HAHA I win!!!! >:) Want a rematch? Reload the browser for a new game")
    }
    else{
        console.log("We tied...lame. Reload the browser for a new game");
    }
}*/