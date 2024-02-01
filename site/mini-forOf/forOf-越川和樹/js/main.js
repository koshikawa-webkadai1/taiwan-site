'use strict'

let todo = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
for (let item of todo) {
    const li = `<li>配列データは${item}の2倍は${item * 2}です</li>`;

    document.getElementById('list').
        insertAdjacentHTML('beforeend', li);

}
