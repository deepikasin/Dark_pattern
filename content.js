// Function to check for dark patterns and highlight matching words
function checkForDarkPatterns() {
    // Array of words associated with dark patterns
    var darkPatternWords = ["misleading", "trick", "hidden", "deceptive"];
  
    // Get all text nodes on the page
    var textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  
    // Iterate through each text node
    while (textNodes.nextNode()) {
      var textNode = textNodes.currentNode;
      var text = textNode.nodeValue.trim();
  
      // Check if the text contains any dark pattern words
      darkPatternWords.forEach(function (word) {
        if (text.toLowerCase().includes(word)) {
          // Wrap the matched word in a span with a highlight style
          var highlightedText = text.replace(new RegExp(word, 'gi'), '<span class="dark-pattern-highlight">$&</span>');
  
          // Create a temporary div to hold the HTML
          var tempDiv = document.createElement('div');
          tempDiv.innerHTML = highlightedText;
  
          // Replace the original text node with the modified HTML
          textNode.parentNode.replaceChild(tempDiv.firstChild, textNode);
        }
      });
    }
  }
  // Run the checkForDarkPatterns function when the page loads
  document.addEventListener('DOMContentLoaded', function () {
    // Use MutationObserver to listen for changes in the DOM
    var observer = new MutationObserver(function () {
      // Your code here
      // For example, you might want to call a function like checkForDarkPatterns()
      // or perform other actions based on DOM changes in the popup.
    });
  
    // Define the configuration of the observer (monitoring for childList changes)
    var observerConfig = { childList: true, subtree: true };
  
    // Start observing the target node for configured mutations
    observer.observe(document.body, observerConfig);
  
    // Your additional code for popup.js
  });
  