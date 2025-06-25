let string = "";
const buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((item) => {
  item.addEventListener('click', (e) => {
    const value = e.target.innerHTML;

    if (value === '=') {
      try {
        string = eval(string);
        document.querySelector('.input').value = string;
      } catch {
        document.querySelector('.input').value = "Error";
        string = "";
      }
    } else if (value === 'AC') {
      string = "";
      document.querySelector('.input').value = string;
    } else if (value === 'Del') {
      let arr = Array.from(string);
      arr.pop();
      string = arr.join("");
      document.querySelector('.input').value = string;
    } else {
      string += value;
      document.querySelector('.input').value = string;
    }
  });
});