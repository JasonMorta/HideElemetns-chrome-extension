function removeElements() {
  const elements = document.querySelectorAll('#onetrust-consent-sdk');
  elements.forEach(element => {
    element.remove();
  });
}

// Remove elements on page load
document.addEventListener('load', () => {
  removeElements();
});

// Remove elements on every click
document.addEventListener('click', () => {
  removeElements();
});
