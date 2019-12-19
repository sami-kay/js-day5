const textArea = document.getElementById('view');
const num = document.getElementById('number');

document.getElementById('start').addEventListener('click', (event) => {
  textArea.innerText = 'Click the + and - buttons to play!';
  document.getElementById('plus').classList.remove('inv');
  document.getElementById('minus').classList.remove('inv');
  document.getElementById('reset').classList.remove('inv');
  document.getElementById('start').classList.add('inv');
});

let newNumber = 0;

document.getElementById('plus').addEventListener('click', (event) => {
  textArea.innerText = ' '
  newNumber += 1;
  console.log(newNumber);
  if (newNumber % 3 === 0 && newNumber % 5 === 0){
    num.innerText = 'FizzBuzz';
  } else if (newNumber % 5 === 0) {
    num.innerText = 'Buzz';
  } else if (newNumber % 3 === 0) {
    num.innerText = 'Fizz';
  } else {
    num.innerText = newNumber;
  }
});


document.getElementById('minus').addEventListener('click', (event) => {
textArea.innerText = ' '
  newNumber -= 1;
  console.log(newNumber);
  if (newNumber > 0) {
  if (newNumber % 3 === 0 && newNumber % 5 === 0){
    num.innerText = 'FizzBuzz';
  } else if (newNumber % 5 === 0) {
    num.innerText = 'Buzz';
  } else if (newNumber % 3 === 0) {
    num.innerText = 'Fizz';
  } else {
    num.innerText = newNumber;
  }
} else {
  newNumber = 0;
}
});

document.getElementById('reset').addEventListener('click', (event) => {
textArea.innerText = 'Click the + and - buttons to play!'
  newNumber = 0;
  num.innerText = ' '
});
