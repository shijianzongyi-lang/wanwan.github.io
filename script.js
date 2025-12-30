'use strict';

const p = document.getElementById('output');
let div = document.getElementById('result');
// ［表示］ボタンを押したら…
document.querySelector('button').addEventListener('click', () => {
  div.classList.remove('nondisplay');
  //入力結果まとめ
  const result = [0, 0, 0, 0];
  const radio1 = document.getElementsByName('quest1');
  let score = 0;
  for (const btn of radio1) {
    if (btn.checked == true) {
      result[0] = btn.value;
    }
  }
  const radio2 = document.getElementsByName('quest2');
  for (const btn of radio2) {
    if (btn.checked == true) {
      result[1] = btn.value;
    }
  }
  const radio3 = document.getElementsByName('quest3');
  for (const btn of radio3) {
    if (btn.checked == true) {
      result[2] = btn.value;
    }
  }
  const radio4 = document.getElementsByName('quest4');
  for (const btn of radio4) {
    if (btn.checked == true) {
      result[3] = btn.value;
    }
  }
  //アルファベット‐数値変換
  const cal = [0, 0, 0, 0];
  if (result[0] == 'a' || result[0] == 'b') {
    cal[0] = 1;
  } else if (result[0] == 'c') {
    cal[0] = 0.3;
  } else if (result[0] == 'd') {
    cal[0] = 0.2;
  }
  if (result[1] == 'e' || result[1] == 'h') {
    cal[1] = -30;
  } else if (result[1] == 'f' || result[1] == 'g') {
    cal[1] = 30;
  }
  if (result[2] == 'j') {
    cal[2] = -20;
  } else if (result[2] == 'k') {
    cal[2] = -30;
  } else if (result[2] == 'l') {
    cal[2] = -40;
  } else if (result[2] == 'm') {
    cal[2] = -50;
  }
  if (result[3] == 'o') {
    cal[3] = -20;
  } else if (result[3] == 'p') {
    cal[3] = -30;
  } else if (result[3] == 'q') {
    cal[3] = -40;
  } else if (result[3] == 'r') {
    cal[3] = -50;
  }
  //点数計算
  const raw_score = (100 + cal[1] + cal[2] + cal[3]) * cal[0];
  if (raw_score > 100) {
    score = 100;
  } else if (raw_score < 0) {
    score = 0;
  } else {
    score = raw_score;
  }
  p.textContent = `${result}を選んだあなたはワンワン度${score}％です`;
});
