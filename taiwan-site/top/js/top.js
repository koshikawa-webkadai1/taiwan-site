
'use strict'

const images = ['top/image/gall_slider_01.jpg','top/image/gall_slider_02.jpg','top/image/gall_slider_03.jpg','top/image/gall_slider04.jpg','top/image/gall_slider05.jpg']
let current =0;

function changeImage(num){
  if(current + num >= 0 && current + num <images.length){
    current += num;
    document.getElementById('main_images').src =images[current];
  }
}
document.getElementById('prev').onclick =function(){
  changeImage(-1);
}
document.getElementById('next').onclick =function(){
  changeImage(1);
}

let ones =document.getElementById('one');
let two =document.getElementById('two');
let three =document.getElementById('three');
let four =document.getElementById('four');
let five =document.getElementById('five');

let all =[ones,two,three,four,five]
function btn1 (){
  document.getElementById('main_images').src =images[0];
  // all[0,1,2,3,4].classList.remove('now')
  two.classList.remove('now')
  three.classList.remove('now')
  four.classList.remove('now')
  five.classList.remove('now')
  ones.classList.add('now');
}
function btn2 (){
  document.getElementById('main_images').src =images[1];
  ones.classList.remove('now')
  three.classList.remove('now')
  four.classList.remove('now')
  five.classList.remove('now')
  two.classList.add('now');
}
function btn3 (){
  document.getElementById('main_images').src =images[2];
  two.classList.remove('now')
  ones.classList.remove('now')
  four.classList.remove('now')
  five.classList.remove('now')
  three.classList.add('now');
}
function btn4 (){
  document.getElementById('main_images').src =images[3];
  two.classList.remove('now')
  three.classList.remove('now')
  ones.classList.remove('now')
  five.classList.remove('now')
  four.classList.add('now');
}
function btn5 (){
  document.getElementById('main_images').src =images[4];
  two.classList.remove('now')
  three.classList.remove('now')
  four.classList.remove('now')
  ones.classList.remove('now')
  five.classList.add('now');
}