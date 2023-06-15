let rps = ["Rock", "Paper", "Scissors"];

let userChoice = prompt("Take your pick - Rock, Paper, or Scissors??");

let number = Math.floor(Math.random() * 3);

console.log(number);

let choice = rps[number];

console.log(choice);

alert(userChoice + " " + choice);

if (userChoice == choice){
    alert("It's a tie");
}else if ((userChoice == "Rock" && choice == "Paper") || (userChoice == "Paper" && choice == "Scissors") || (userChoice == "Scissors" && choice == "Rock")){
    alert("I win");
}else if((userChoice == "Scissors" && choice == "Paper") || (userChoice == "Rock" && choice == "Scissors") || (userChoice == "Paper" && choice == "Rock")){
    alert("You Win!");
};

