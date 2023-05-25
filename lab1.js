

const prompt = require('prompt');
let finalResult;
//INPUT
prompt.start();

//Prompting a message to get the user input
console.log("\n Hello, please enter ROCK, PAPER or SCISSORS. \n");

//Getting the user input through the prompt() function
prompt.get(['userSelection'],function(err,result) {  
    finalResult = result.userSelection; 
    finalResult = finalResult.toLowerCase();
    console.log("\nUser Selected: " + finalResult);
 
    //Use MATH.RANDOM to generate computer input
    // Returns a random integer from 0 to 100:
    let random = Math.floor(Math.random() * 101); 

    //PROCESS
    //Using if/else and switch statements to compare both selection and determine the winner
    let text; 
    switch(true) {
    case random <= 34: 
        text = "PAPER";
        break;
    case random <= 67: 
        text = "SCISSORS";
        break;
    case random <= 100: 
        text = "ROCK";
        break; 
    }

    text = text.toLowerCase();
    //Computer selection 
    console.log("Computer Selected: " + text + "\n");
 
    //FINAL OUTPUT
    console.log("--------------------------------------");
    //Using a switch statement to consider all the possibilities drawn from the computer selection
    switch(text) {
        //Then using if statements to produce the output for each user selection compared to the computer selection
        case 'rock':  
            if(finalResult === 'rock'){
                console.log("\tIt's a tie!");
            }
            else if(finalResult === 'paper'){
                console.log("\tUser Wins!");
            }
            else if(finalResult === 'scissors'){
                console.log("\tComputer Wins!");
            }
            break;
        case 'paper':  
            if(finalResult === 'rock'){
                console.log("\tComputer Wins!");
            }
            else if(finalResult === 'paper'){
                console.log("\tIt's a tie!");
            }
            else if(finalResult === 'scissors'){
                console.log("\tUser Wins!");
            }
            break; 
        case 'scissors':  
            if(finalResult === 'rock'){
                console.log("\tUser Wins!");
            }
            else if(finalResult === 'paper'){
                console.log("\tComputer Wins!");
            }
            else if(finalResult === 'scissors'){
                console.log("\tIt's a tie!");
            }
            break; 
    }

    console.log("--------------------------------------");
 
})