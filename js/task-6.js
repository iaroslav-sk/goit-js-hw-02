const numbers = [];
let total = 0;

const add = function () {
  while (true) {
    let input = prompt('Введите число:');

    if (input === null) {
      break;
    }

    input = Number(input);
    const notANumber = Number.isNaN(input);
    if (notANumber) {
      alert('Вы ввели не число, введите число!');
      continue;
    }

    numbers.push(input);
  }

  for (const number of numbers) {
    total += number;
  }
  console.log(`Вы ввели числа: ${numbers}.`);

  return total;
};

console.log(`Общая сумма введённых чисел: ${add(numbers)}.`);
