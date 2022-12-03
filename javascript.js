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
//generate a random choice for the computer with getComputerChoice
    //assign to computerSelection
//request an input from the user using prompt() 
    //assign to playerSelection
//test the input to ensure it is a valid choice
//test the user's input against the computer's choice using playRound function
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