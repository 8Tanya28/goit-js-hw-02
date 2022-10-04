// Напиши скрипт з наступним функціоналом:

// При завантаженні сторінки користувачеві пропонується в prompt ввести число.
// Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор,
// пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel,
// якщо масив не порожній, необхідно порахувати суму всіх елементів масиву
//  і записати її в змінну total. Використовуй цикл for або for...of.
//  Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний
// набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення,
// показуй alert з текстом 'Було введено не число, попробуйте ще раз',
// при цьому результат prompt записувати в масив чисел не потрібно,
// після чого знову користувачеві пропонується ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;

const valueInputRef = document.querySelector(".js-value");
const addValueBtn = document.querySelector(".js-add-value");
const calcBtn = document.querySelector(".js-calculate");
const numbers = [];
let total = 0;

addValueBtn.addEventListener("click", function () {
  const value = Number(valueInputRef.value);

  //   const notANumber = Number.isNaN(value);
  //   if (notANumber) {
  //     console.log("Було введено не число, попробуйте ще раз");
  //   }

  numbers.push(value);

  valueInputRef.value = "";

  console.log(numbers);
});

calcBtn.addEventListener("click", function () {
  for (const number of numbers) {
    console.log(numbers);
    total += number;
  }

  console.log(`Загальна сума чисел дорівнює ${total}`);
});
