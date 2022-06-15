const QS = (pam) => document.querySelector(pam);
const QSA = (pam) => document.querySelectorAll(pam);

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
  const INPUT_DISPLAY = QS('#input-display')
  let str = INPUT_DISPLAY.value;

  if((str[0] === '/' || str[0] === '*' )) {
    INPUT_DISPLAY.value = '';
    return alert ('Operação inválida!');
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '+' || str[i] === '-' || str[i] === '/' || str[i] === '*' ) {
      if (str[i + 1]) {
        if (str[i] === str[i + 1]) {
          INPUT_DISPLAY.value = '';
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
  const EVERY_BTNS = QSA('button');

  BTN_NUMBERS.forEach(btn => {
    btn.addEventListener('click', input_display);
  });

  BTN_OPERATORS.forEach(btn => {
    btn.addEventListener('click', input_display);
  });

  EVERY_BTNS.forEach(btn => {
    btn.addEventListener('click', check_calc);
  });

  BTN_EQUAL.addEventListener('click', calculate);
  INPUT_DISPLAY.addEventListener('input', check_calc);
  
})