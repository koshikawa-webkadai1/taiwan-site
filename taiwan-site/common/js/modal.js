
// 共通機能モーダルウィンドウファイル

'use strict'

const modal = document.querySelector('.modal')
const modal2 = document.querySelector('.modal2')
const modal3 = document.querySelector('.modal3')
const modal4 = document.querySelector('.modal4')
const closebutton = document.querySelector('.modalclose')
const closebutton2 = document.querySelector('.modalclose2')
const closebutton3 = document.querySelector('.modalclose3')
const closebutton4 = document.querySelector('.modalclose4')

function Open() {
  modal.classList.add('Opening')
}

function Close() {
  modal.classList.remove('Opening');
}
closebutton.addEventListener('click', Close);

function Open2() {
  modal2.classList.add('Opening2')
}

function Close2() {
  modal2.classList.remove('Opening2');
}
closebutton2.addEventListener('click', Close2);

function Open3() {
  modal3.classList.add('Opening3')
}

function Close3() {
  modal3.classList.remove('Opening3');
}
closebutton3.addEventListener('click', Close3);

function Open4() {
  modal4.classList.add('Opening4')
}

function Close4() {
  modal4.classList.remove('Opening4');
}
closebutton4.addEventListener('click', Close4);
