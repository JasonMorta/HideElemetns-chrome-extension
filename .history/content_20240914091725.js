function removeElements() {
  const elements = document.querySelectorAll('#onetrust-consent-sdk');
  elements.forEach(element => {
    element.remove();
  });
}

// Remove elements on page load
setTimeout(() => {
  document.addEventListener('load', () => {
    removeElements();
  });
}, 2000);

// Remove elements on every click
document.addEventListener('click', () => {
  removeElements();
});
