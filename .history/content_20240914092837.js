function removeElements(selectors) {
  let totalRemoved = 0;
  
  // Remove elements matching specific selectors
  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.remove();
    });
    totalRemoved += elements.length; // Count the number of elements removed
  });

  // Remove elements with IDs or class names that include "cookie"
  const cookieElements = document.querySelectorAll('[id*="cookie"], [class*="cookie"]');
  cookieElements.forEach(element => {
    element.remove();
  });
  totalRemoved += cookieElements.length; // Add count of removed cookie elements

  return totalRemoved; // Return the total number of elements removed
}

// List of IDs or class names to remove
const selectorsToRemove = [
  '#onetrust-consent-sdk', 
  '#onesignal-slidedown-container', 
  '#another-id'
];

// Initialize a counter
let intervalCount = 0;

// Remove elements on page load and set interval
const keepLooking = setInterval(() => {
    const removedCount = removeElements(selectorsToRemove);
    intervalCount++;
    
    // Stop the interval if no elements are found after 5 intervals
    if (removedCount === 0 && intervalCount >= 5) {
        clearInterval(keepLooking);
    }
}, 1000);

// Remove elements on every click
document.addEventListener('click', () => {
  removeElements(selectorsToRemove);
});