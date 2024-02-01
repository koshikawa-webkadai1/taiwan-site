'use strict';

// //配列
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//for of文で配列データを順番に取り出して処理を実行
for (const number of num) {
  const li = `<li>配列データ${number}の2倍は${number * 2}です</li>`;
  document.getElementById('list').insertAdjacentHTML('beforeend', li);
}

// pattern-2
// const num = [];
// let i = 1;
// while (i <= 10) {
//   num.push(i);
//   i++;
// }
// for (const number of num) {
//   const li = document.createElement('li');
//   li.textContent = `配列データ${number}の2倍は${number * 2}です`;
//   document.getElementById('list').appendChild(li);
// }