
// 共通機能モーダルウィンドウファイル

'use strict'

const modal = document.querySelector('.modal')
const openbutton = document.getElementById('modal-openbutton')
const closebutton = document.querySelector('.modalclose')

function Open() {
  modal.classList.add('Opening')
}

function Close() {
  modal.classList.remove('Opening');
}
closebutton.addEventListener('click', Close);



