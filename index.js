
let string = "";
const inputField = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');

// Handle button clicks
buttons.forEach((item) => {
  item.addEventListener('click', (e) => {
    const value = e.target.innerHTML;
    handleInput(value);
  });
});

// Handle keyboard input
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.', '%'].includes(key)) {
    string += key;
    inputField.value = string;
  } else if (key === 'Enter'|| key === '=') {
    handleInput('=');
  } else if (key === 'Backspace') {
    handleInput('Del');
  } else if (key === 'Escape') {
    handleInput('AC');
  }
});

// Input handler for both click and key input
function handleInput(value) {
  if (value === '=') {
    try {
      string = math.evaluate(string);
      inputField.value = string;
    } catch {
      inputField.value = "Error";
      string = "";
    }
  } else if (value === 'AC') {
    string = "";
    inputField.value = string;
  } else if (value === 'Del') {
    string = string.slice(0, -1);
    inputField.value = string;
  } else {
    // Optional: prevent operator at the beginning
    if (string === '' && ['+', '*', '/', '%'].includes(value)) return;

    string += value;
    inputField.value = string;
  }
}


