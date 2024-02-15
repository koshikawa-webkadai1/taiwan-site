
'use strict'

// ウィンドウサイズ768px以下のときの処理

const images = [
  "top/image/gall_slider_01.jpg",
  "top/image/gall_slider_02.jpg",
  "top/image/gall_slider_03.jpg",
  "top/image/gall_slider04.jpg",
  "top/image/gall_slider05.jpg",
];

// const btn = [one, two, three, four, five]
// && current + num >= 0 && current + num < images.length
let current = 0;
function changeImage(num) {
  if (current + num < 3 && current + num >= 0) {
    current += num;
    document.getElementById("main_images").src = images[current];
    document.getElementById("main_images2").src = images[current + 1];
    document.getElementById("main_images3").src = images[current + 2];
    console.log(current)
  }
  if (current === 0) {
    two.classList.remove("now");
    three.classList.remove("now");
    four.classList.remove("now");
    five.classList.remove("now");
    one.classList.add("now");
  } else if (current === 1) {
    one.classList.remove("now");
    three.classList.remove("now");
    four.classList.remove("now");
    five.classList.remove("now");
    two.classList.add("now");
  } else if (current === 2) {
    one.classList.remove("now");
    two.classList.remove("now");
    four.classList.remove("now");
    five.classList.remove("now");
    three.classList.add("now");
  }
}
document.getElementById("prev").onclick = function () {
  changeImage(-1);
};

document.getElementById("next").onclick = function () {
  changeImage(1);
};
let one = document.getElementById("btn1");
let two = document.getElementById("btn2");
let three = document.getElementById("btn3");
let four = document.getElementById("btn4");
let five = document.getElementById("btn5");
// let all = [one, two, three, four, five];
function buttonClick1() {
  document.getElementById("main_images").src = images[0];
  document.getElementById("main_images2").src = images[1];
  document.getElementById("main_images3").src = images[2];
  //   all[0,1,2,3,4].classList.remove("now");
  two.classList.remove("now");
  three.classList.remove("now");
  four.classList.remove("now");
  five.classList.remove("now");
  one.classList.add("now");
}

function buttonClick2() {
  document.getElementById("main_images").src = images[1];
  document.getElementById("main_images2").src = images[2];
  document.getElementById("main_images3").src = images[3];
  //   all[0,1,2,3,4].classList.remove("now");
  one.classList.remove("now");
  three.classList.remove("now");
  four.classList.remove("now");
  five.classList.remove("now");
  two.classList.add("now");
}
function buttonClick3() {
  document.getElementById("main_images").src = images[2];
  document.getElementById("main_images2").src = images[3];
  document.getElementById("main_images3").src = images[4];
  one.classList.remove("now");
  two.classList.remove("now");
  four.classList.remove("now");
  five.classList.remove("now");
  three.classList.add("now");
}
function buttonClick4() {
  document.getElementById("main_images").src = images[3];
  document.getElementById("main_images2").src = images[4];
  document.getElementById("main_images3").src = images[0];
  one.classList.remove("now");
  three.classList.remove("now");
  three.classList.remove("now");
  five.classList.remove("now");
  four.classList.add("now");
}
function buttonClick5() {
  document.getElementById("main_images").src = images[4];
  document.getElementById("main_images2").src = images[0];
  document.getElementById("main_images3").src = images[1];
  one.classList.remove("now");
  three.classList.remove("now");
  four.classList.remove("now");
  two.classList.remove("now");
  five.classList.add("now");
}