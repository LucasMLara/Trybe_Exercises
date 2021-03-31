const button = document.getElementById('clickB');
let clickCount = 0;
button.addEventListener('click', () => {
  const box = document.getElementById('contagem');
  box.innerHTML = clickCount+=1;
})