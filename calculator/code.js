const QS = (pam) => document.querySelector(pam);
const QSA = (pam) => document.querySelectorAll(pam);

const operation_display = (e) => {
  const TEXT = e.target.innerText;
  const OPERATION_DISPLAY = QS('#operation-display');
  
  OPERATION_DISPLAY.value += TEXT;
}

const calculate = () => {
  const INPUT_DISPLAY = QS('#input-display');
  const OPERATION_DISPLAY = QS('#operation-display');
  
  INPUT_DISPLAY.value = eval(OPERATION_DISPLAY.value);
}

const check_calc = (e) => {
  const INPUT_DISPLAY = QS('#input-display')
  const OPERATION_DISPLAY = QS('#operation-display');
  let str = OPERATION_DISPLAY.value;

  if (OPERATION_DISPLAY.value === '') INPUT_DISPLAY.value = '';
  
  if((str[0] === '/' || str[0] === '*' )) {
    OPERATION_DISPLAY.value = '';
    return alert ('Operação inválida!');
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '+' || str[i] === '-' || str[i] === '/' || str[i] === '*' ) {
      if (str[i + 1]) {
        if (str[i+1] === '+' || str[i+1] === '-' || str[i+1] === '/' || str[i+1] === '*' ) {
          OPERATION_DISPLAY.value = '';
          return alert ('Operação inválida!');
        }
              
      } 
    }
  }
}

const ac_calculator = () => {
  const INPUT_DISPLAY = QS('#input-display');
  const OPERATION_DISPLAY = QS('#operation-display');
  
  INPUT_DISPLAY.value = '';
  OPERATION_DISPLAY.value = '';
}

window.addEventListener('load', () => {
  const BTN_NUMBERS = QSA('.numbers');
  const BTN_OPERATORS = QSA('.operators');
  const BTN_AC = QS('#reset');
  // const INPUT_DISPLAY = QS('#input-display');
  const EVERY_BTNS = QSA('button');
  const OPERATION_DISPLAY = QS('#operation-display');
  
  BTN_NUMBERS.forEach(btn => {
    btn.addEventListener('click', operation_display);
    btn.addEventListener('click', calculate);
  });

  BTN_OPERATORS.forEach(btn => {
    btn.addEventListener('click', operation_display);
  });

  EVERY_BTNS.forEach(btn => {
    btn.addEventListener('click', check_calc);
  });

  BTN_AC.addEventListener('click', ac_calculator);
  OPERATION_DISPLAY.addEventListener('input', calculate);
  OPERATION_DISPLAY.addEventListener('input', check_calc);
  OPERATION_DISPLAY.addEventListener('click', calculate);

})