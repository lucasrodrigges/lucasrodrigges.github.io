const QS = (pam) => document.querySelector(pam);
const QSA = (pam) => document.querySelectorAll(pam);
const OBJECT_MAIN = {};

const input_display = (e) => {
  const TEXT = e.target.innerText;
  const INPUT_DISPLAY = QS('#input-display');

  INPUT_DISPLAY.value += TEXT;
}

const calculate = () => {
  const INPUT_DISPLAY = QS('#input-display');

  INPUT_DISPLAY.value = eval(INPUT_DISPLAY.value);
}

const check_calc = (e) => {
  let str = e.target.value;
  console.log(str);
  if((str[0] === '+' || str[0] === '-' || str[0] === '/' || str[0] === '*' )) {
    e.target.value = '';
    return alert ('Operação inválida!');
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '+' || str[i] === '-' || str[i] === '/' || str[i] === '*' ) {
      if (str[i + 1]) {
        if (str[i] === str[i + 1]) {
          e.target.value = '';
          return alert ('Operação inválida!');
        }
      } 
    }
  }
}

window.addEventListener('load', () => {
  const BTN_NUMBERS = QSA('.numbers');
  const BTN_OPERATORS = QSA('.operators');
  const BTN_EQUAL = QS('#equal');
  const INPUT_DISPLAY = QS('#input-display');

  BTN_NUMBERS.forEach(btn => {
    btn.addEventListener('click', input_display);
  });

  BTN_OPERATORS.forEach(btn => {
    btn.addEventListener('click', input_display);
  });

  BTN_EQUAL.addEventListener('click', calculate);
  INPUT_DISPLAY.addEventListener('input', check_calc);
  INPUT_DISPLAY.addEventListener('change', check_calc);

})