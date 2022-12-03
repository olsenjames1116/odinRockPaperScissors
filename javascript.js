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

//while the round is less than or equal to 5, continue the game using game()
game();

function game (){
    for(let i=0; i<5; i++){
        console.log("Round " + (i+1) + " of 5");
        let computerChoice = getComputerChoice();
        let playerSelection = getPlayerSelection();
        let resultOfRound = playRound(computerChoice, playerSelection);
        console.log("Computer: " + computerChoice);
        console.log("Player: " + playerSelection);
        console.log(resultOfRound);
        console.log("--------------------------------------");
    }
}

//generate a random choice for the computer with getComputerChoice
    //assign to computerSelection
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
    //assign to playerSelection
function getPlayerSelection(){
    let promptChoice = prompt("Please enter rock, paper, or scissors:");
    promptChoice = promptChoice.toLowerCase();
    promptChoice = testPromptChoice(promptChoice);
    return  promptChoice;
}

//test the input from getPlayerSelection to ensure it is a valid choice
function testPromptChoice(promptChoice){
    while(promptChoice != "rock" && promptChoice != "paper" && promptChoice != "scissors"){
        promptChoice = prompt("Please enter a valid choice (\"rock, paper, or scissors\"):");
        promptChoice = promptChoice.toLowerCase();
    }
    return promptChoice;
}
//test the user's input against the computer's choice using playRound function

function playRound(computerChoice, playerSelection){
    let roundResult;
    if(computerChoice === "rock"){
        if(playerSelection === "rock"){
            roundResult = "Draw! You both chose rock!";
        }
        else if(playerSelection === "paper"){
            roundResult = "Winner! Paper covers rock!";
        }
        else{
            roundResult = "Loser! Rock crushes scissors!";
        }
    }
    else if(computerChoice === "paper"){
        if(playerSelection === "rock"){
            roundResult = "Loser! Paper covers rock!";
        }
        else if(playerSelection = "paper"){
            roundResult = "Draw! You both chose paper!";
        }
        else{
            roundResult = "Winner! Scissors cuts paper!"
        }
    }
    else{
        if(playerSelection === "rock"){
            roundResult = "Winner! Rock crushes scissors!";
        }
        else if(playerSelection === "paper"){
            roundResult = "Loser! Scissors cuts paper!";
        }
        else{
            roundResult = "Draw! You both chose scissors!"
        }
    }
    return roundResult;
}
/*if computer chooses rock and user chooses scissors, the user loses
    if user chooses paper, the user wins
    else it is a draw*/
/*if computer chooses paper and user chooses rock, user loses
    if user chooses scissors, user wins
    else it is a draw*/
/*if computer chooses scissors and user chooses rock, user wins
    if user chooses paper, user loses
    else it is a draw*/
//add score to either computer or user based off result
//output result to console
//end loop