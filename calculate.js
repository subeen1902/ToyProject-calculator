// 계산 함수
function calculate(a, b, cal, callback) {
  let result;

  switch (cal) {
    case '+':
      result = a + b;
      break;

    case '-':
      result = a - b;
      break;

    case '/':
      if (b !== 0) {
        result = a / b;
      } else {
        result = '연산 불가';
      }
      // 삼항연산자 : result = b!==0 ? a/b : '연산 불가';
      break;

    case '*':
      result = a * b;
      break;
    default:
      result = '연산자를 입력하세요.';
  }
  if (callback) {
    callback(result);
  }
}

function Num(x, y) {
  this.x = x;
  this.y = y;
}
let num1 = new Num(3, 4);

function call(result) {
  console.log(`결과 : ${result}`);
}

document.addEventListener('DOMContentLoaded', function () {
  const display = document.querySelector('.equation');
  const buttons = document.querySelectorAll('.button');

  let expression = '';

  // 버튼 클릭 이벤트
  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      let value = this.dataset.value;
      console.log('버튼 클릭:', value);

      handleInput(value);
    });
  });

  // 입력 처리 함수
  function handleInput(value) {
    console.log('입력된 값:', value);

    if (value === '=' || value === 'Enter') {
      evaluateExpression();
    } else if (value === 'C') {
      clearCalculator();
    } else {
      expression += value;
    }

    console.log('현재 수식:', expression);
    updateDisplay();
  }

  // All Clear 기능 추가
  function clearCalculator() {
    expression = '';
    updateDisplay();
  }

  // 화면 업데이트 함수 (입력된 식을 equation 부분에 표시)
  function updateDisplay() {
    display.innerText = expression || '0';
  }

  // 계산 수행 함수
  function evaluateExpression() {
    try {
      expression = expression.trim();
      console.log('Evaluating:', expression);

      if (expression === '') {
        display.innerText = '0';
        return;
      }

      const result = eval(expression);
      display.innerText = `결과: ${result}`;
      expression = result.toString();
    } catch (e) {
      console.log('에러 발생:', e);
      display.innerText = 'Error';
      expression = '';
    }
  }
});
