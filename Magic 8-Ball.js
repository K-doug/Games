let randomNumber = Math.floor(Math.random()*6);

console.log(randomNumber);

let user = prompt("What is your question?");

let message = "";

switch (randomNumber){
    case 0:
        message = "Ask again later";
        break;
    case 1:
        message = "Don't count on it";
        break;
    case 2: 
        message = "My reply is no";
        break;
    case 3:
        message = "it looks promising";
        break;
    case 4:
        message = "it is certain";
        break;
    case 5: 
        message = "signs point to yes";
        break;
}

console.log(user);
console.log(message);
