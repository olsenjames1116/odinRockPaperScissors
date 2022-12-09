/* Understanding the problem:
I need to create a game that takes input from a user (rock, paper, or scissors)
and tests it against the computer's choice (rock, paper, or scissors)
to see who wins*/

/* Plan:
Does your program have a user interface? What will it look like? What functionality will the interface have?
    The program utilizes a series of buttons to assign a player choice. It will contain 3 buttons on the
    webpage with the choices: rock, paper, or scissors. The interface will only be able to accomplish this 
    task and will only be functional until a winner is determined and the game comes to an end.
What inputs will your program have? Will the user enter data or will you get input from somewhere else?
    The program will need a choice from the user and a choice from the computer to
    test against each other.
What's the desired input?
    Desired input is rock, paper, or scissors.
Given your inputs, what are the steps necessary to return the desired output?
    I need to wait for a player to make a choice, then assign that choice to a variable
    to test against the computer's choice. Then I need to output the result of that round.
    The winner will be determined after one of them has reached 5 points so score will need to 
    be kept and the game will continue until someone reaches 5 points.
*/


//Initializing global variables
let scoreArray;
let compScore = 0;
let userScore = 0;
let maxScore = 5;
const body = document.querySelector("body");

//while the both the player's and computer's scores are less than 5, continue the game using game()
game();

function game (){
    //Does not begin game until the eventListener is called by clicking a
        //button for the player choice  
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener("click", event => {
            if(compScore<maxScore && userScore<maxScore){
                const playerSelection = event.target.className;

                const computerChoice = getComputerChoice();
                const resultOfRound = playRound(computerChoice, playerSelection);
                displayRoundResult(computerChoice, playerSelection, resultOfRound);

                if(compScore==maxScore || userScore===maxScore){
                    displayFinalResult();
                }
            }
        })
    })
}

/*generate a random choice for the computer with getComputerChoice 
    assign to randomCompChoice*/
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

/*test the user's input against the computer's choice using playRound function
    assign to roundResult
    calls to keepScore with the argument givePoint*/
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
        else if(playerSelection === "paper"){
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

//add score to computer, user, or neither based off result
function keepScore(givePoint){
    if(givePoint === 1){
        userScore++;
    }
    else if(givePoint === 2){
        compScore++;
    }
    scoreArray = [userScore, compScore];
}

//output round result to webpage
function displayRoundResult(computerChoice, playerSelection, resultOfRound){
    const roundDiv = document.createElement("div");

    roundDiv.classList.add("round");

    const computerPara = document.createElement("p");
    computerPara.textContent = `Computer: ${computerChoice}`;

    const playerPara = document.createElement("p");
    playerPara.textContent = `Player: ${playerSelection}`;

    const resultPara = document.createElement("p");
    resultPara.textContent = `${resultOfRound}`;

    const scorePara = document.createElement("p");
    scorePara.setAttribute("style", "white-space: pre");
    scorePara.textContent = `--------\r\nScore\r\n--------\r\nUser: ${scoreArray[0]}\r\nComputer: ${scoreArray[1]}`;

    const dashesPara = document.createElement("p");
    dashesPara.textContent = createDashes(resultOfRound);

    const paraArray = [computerPara, playerPara, resultPara, scorePara, dashesPara];
    
    paraArray.forEach(para => roundDiv.appendChild(para));

    body.appendChild(roundDiv);
}

//dynamically create dashes to more closely match the length of the last string in the div
function createDashes(resultOfRound){
    let dashes = "";

    for(let i=0; i<resultOfRound.length + 10; i++){
        dashes += "-";
    }

    return dashes;
}

//figures out the final score and outputs the result to the webpage
function displayFinalResult(){
    let userScoreFinal = scoreArray[0];
    let compScoreFinal = scoreArray[1];
    let resultString = "";

    if(userScoreFinal>compScoreFinal){
        resultString = "You won the game...you must have cheated. Think you can do it again? Reload the browser for a new game";
    }
    else{
        resultString = "HAHA I win!!!! >:) Want a rematch? Reload the browser for a new game";
    }

    const finalResult = document.createElement('p');
    finalResult.textContent = resultString;
    body.appendChild(finalResult);
}