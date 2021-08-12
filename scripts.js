const counter = document.getElementById('counter')
const incr = document.querySelector('.incr');
const reset = document.querySelector('.reset');

let count = 0;

incr.addEventListener('click', () => {
  count++;
  counter.innerHTML = count;
})

reset.addEventListener('click', () => {
  count = 0;
  counter.innerHTML = count;
})