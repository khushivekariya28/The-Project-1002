const increaseFontSizeButton = document.getElementById('increase-font-size');
const decreaseFontSizeButton = document.getElementById('decrease-font-size');
const myParagraph = document.getElementById('my-paragraph');

let fontSize = 16;

increaseFontSizeButton.addEventListener('click', () => {
  fontSize += 2;
  myParagraph.style.fontSize = fontSize + 'px';
});

decreaseFontSizeButton.addEventListener('click', () => {
  fontSize -= 2;
  myParagraph.style.fontSize = fontSize + 'px';
});