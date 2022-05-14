function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList();



function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
 return monitorCount(rows, columns)  * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

// taş kağıt makas oyunu





/*function getUserChoice(userInput){
  userInput = userInput.toLowerCase(); 
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error!');
  }
}
*/




const getUserChoice = userInput => {
 userInput = userInput.toLowerCase(); 
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error!');
  }
};

function getComputerChoice() {
 switch (Math.floor(Math.random() * 3)) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

function determineWinner(userChoice, computerChoice) {
if (userChoice === computerChoice) {
  return 'The game is a tie!';
}// closing if tie clause!!!
  
 if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
     return 'The computer won!';
  } else {
     return 'You Won!';
  } 
};
  
if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  }  else {
    return 'You won!';
    }
  }
}; 

const playGame = () => {
    let userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
      console.log(determineWinner(userChoice,computerChoice));
}
playGame();



const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr){
  newArr.pop();
}
removeElement(concept);
console.log(concept);