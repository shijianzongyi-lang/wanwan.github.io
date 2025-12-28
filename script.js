'use strict';

const p = document.getElementById('output');

// ［表示］ボタンを押したら…
document.querySelector('button').addEventListener('click', () => {
  const radio = document.getElementsByName('quest1');
  let result1 = '';
  let result2 = '';
  for (const btn of radio) {
    if (btn.checked == true) {
      result1 = btn.value;
    }
  }
  const radio2 = document.getElementsByName('quest2');
  for (const btn of radio2) {
    if (btn.checked == true) {
      result2 = btn.value;
    }
  }
  p.textContent = `${result1}と${result2}`;
});
