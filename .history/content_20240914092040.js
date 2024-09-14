function removeElements() {
  const elements = document.querySelectorAll('#onetrust-consent-sdk');
  elements.forEach(element => {
    element.remove();
  });
  return elements.length; // Return the number of elements found and removed
}

// Initialize a counter
let intervalCount = 0;

// Remove elements on page load and set interval
const keepLooking = setInterval(() => {
    const removedCount = removeElements();
    intervalCount++;
    
    // Stop the interval if no elements are found after 5 intervals
    if (removedCount === 0 && intervalCount >= 5) {
        clearInterval(keepLooking);
    }
}, 1000);

// Remove elements on every click
document.addEventListener('click', () => {
  removeElements();
});
