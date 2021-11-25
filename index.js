var firstNumber = document.getElementById('InputText1');
var secondNumber = document.getElementById('InputText2');
const sumButton = document.getElementById('ActionButton1');
const subsButton = document.getElementById('ActionButton2');
const multiplyButton = document.getElementById('ActionButton3');
const divideButton = document.getElementById('ActionButton4');
const factButton = document.getElementById('ActionButton5');
const clearButton = document.getElementById('ClearButton');

firstNumber.addEventListener('input', () => {
  firstNumber.value = firstNumber.value.replace(/[^0-9]/g, '');
});

secondNumber.addEventListener('input', () => {
  secondNumber.value = secondNumber.value.replace(/[^0-9]/g, '');
});

sumButton.addEventListener('click', () =>
  sum(firstNumber.value, secondNumber.value)
);

subsButton.addEventListener('click', () =>
  substract(firstNumber.value, secondNumber.value)
);

multiplyButton.addEventListener('click', () =>
  multiply(firstNumber.value, secondNumber.value)
);

divideButton.addEventListener('click', () =>
  divide(firstNumber.value, secondNumber.value)
);

factButton.addEventListener('click', () => factorial(firstNumber.value));

clearButton.addEventListener('click', () => clear());

const sum = (firstNumber, secondNumber) => {
  print(firstNumber, secondNumber);
  console.log(parseInt(firstNumber) + parseInt(secondNumber));
};

const substract = (firstNumber, secondNumber) => {
  print(firstNumber, secondNumber);
  console.log(parseInt(firstNumber) - parseInt(secondNumber));
};

const multiply = (firstNumber, secondNumber) => {
  print(firstNumber, secondNumber);
  console.log(parseInt(firstNumber) * parseInt(secondNumber));
};

const divide = (firstNumber, secondNumber) => {
  print(firstNumber, secondNumber);
  if (secondNumber == 0) {
    console.log("Invalid operation. Can't divide by zero");
  } else {
    console.log(parseInt(firstNumber) / parseInt(secondNumber));
  }
};

const factorial = (number) => {
  if (number >= 0) {
    try {
      var bigInt = BigInt(number);
      var s = 1n;
      for (let i = 0n; i < bigInt; i++) {
        s *= bigInt - i;
      }
      print(number, null);
      console.log(String(s));
    } catch (error) {
      console.log('Invalid operation. The result is too big');
    }
  } else {
    console.log('Invalid operation. Must be a positive number');
  }
};

const print = (firstNumber, secondNumber) => {
  if (firstNumber && secondNumber) {
    console.log(firstNumber);
    console.log(secondNumber);
  } else {
    console.log(firstNumber);
  }
};

const clear = () => {
  firstNumber.value = 0;
  secondNumber.value = 0;
};
