function randomNames() {
  const variableNames = [
    `Artur`,
    `Elena`,
    `Evgeniy`,
    `Ahmed`,
    `Mamed`,
    `Muhammad`,
    `Yunus`,
    `Shaxzoda`,
    `Baxtiniso`,
    `Dmitriy`,
    `Vlad`,
    `Ziyod`,
    `Anastasiya`,
    `Sabina`,
    `Farangiz`,
    `Kamila`,
    `Sergey`,
    `Alesha`,
    `Mambek`,
  ];
  const generatedName = Math.floor(Math.random() * variableNames.length);
  const genResult = variableNames[generatedName];
  variableNames.splice(generatedName, 1);
  return genResult;
}
function commands() {
  const variableComm = [`add`, "del", `del`, `add`, `add`, `add`];
  const generatedComm = Math.floor(Math.random() * variableComm.length);
  const commResult = variableComm[generatedComm];
  variableComm.splice(generatedComm, 1);
  return commResult;
}
let arr = [];
while (true) {
  let userAsk = prompt(
    `Введите команду и имя: `,
    `${commands()} ${randomNames()}`
  );
  let userResult = userAsk.split(" ");
  let command = userResult[0];
  let commandElem = userResult[1];
  if (command === "add") {
    arr.push(commandElem);
    console.log(`Имя ${commandElem} добавлено.`);
    console.log(arr);
  } else if (command === "del") {
    let arrIndex = arr.indexOf(commandElem);
    if (arrIndex !== -1) {
      arr.splice(arrIndex, 1);
      console.log(`Имя ${commandElem} удалено.`);
      console.log(arr);
    } else {
      console.log(`Имя не надено`);
    }
  } else if (command === "stop") {
    console.log(`Общее кол-во пользователей: `);
    console.log(arr);
    break;
  } else {
    console.log(`Введите команду и имя`);
  }
}

// Разница в функциях - (){}

// В обчыной функции - используется ключевое слово Function(){} и в его теле явно должно быть указано Return.
// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 3));
// //
// В стрелочной функции - используют => и если эта функция имеет только одно вырежние, то не требует указания Return.
// const addArrow = (a, b) => a + b;
// console.log(addArrow(2, 3));

// -- this - в обычных функциях:
// В обычных функциях this зависит от контекста,
// в котором они были вызваны. Значение this может изменяться в зависимости от того,
// как функция была вызвана

// //Этот не заработает
// // function regularFunction() {
// //   this.value = 42;
// //   setTimeout(function() {
// //     console.log(this.value); // this будет разным, не то, что ожидается
// //   }, 1000);
// // }
// // const obj = new RegularFunction()

// // Стрелочная функция
// -- this - в стрелочных функциях:
// В стрелочных функциях this заимствует значение из окружающего его элементов.
// Это означает, что this в стрелочной функции будет таким, каким оно было в момент создания функции,
// и не будет меняться при вызове функции. Это делает стрелочные функции особенно удобными в сценариях,
// где сохранение значения this важно.

// // Этот заработает
// function ArrowFunction() {
//   this.value = 42;
//   setTimeout(() => {
//     console.log(this.value); // this будет таким же, как и в момент создания объекта
//   }, 1000);
// }
// const obj = new ArrowFunction(); // Вызов конструктора
