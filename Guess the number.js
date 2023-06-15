
let answer = Math.floor(Math.random()*10) + 1;

let number = parseInt(prompt("can you guess the number?  Pick a number between 1 and 10"));

let counter = 0;

while (answer != number){
    if (isNaN(number) || number < 1 || number > 10){
        number = parseInt(prompt("Please pick a number between 1 and 10"));
    } else if (counter < 4){
        alert("absolutely not - try again.");
        counter ++;
        number = parseInt(prompt("Pick another number"));
     } else if (counter === 4){
    alert("It's just not your day. The answer was " + answer);
    break;
     }
}

if (answer === number) {
    alert("Congratulations, you guessed right!!"); 
};
