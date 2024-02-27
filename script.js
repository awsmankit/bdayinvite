function showInvitation() {
    document.getElementById("invitation").style.display = "flex";
    document.getElementById("cover-page").style.display = "none";
  }
  
  // Make sure this code is executed after the DOM has fully loaded
  document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("invitation-text").addEventListener("click", showInvitation);
  });
  
  
  const phrases = [
    "You're Invited", // English
    "आपको आमंत्रित किया गया है", // Hindi
    "آپ کو مدعو کیا گیا ہے", // Urdu
    "招待されています" // Japanese
  ];
  
  let currentPhrase = 0;
  let currentChar = 0;
  let textElement = document.getElementById("invitation-text");
  let typingSpeed = 50; // Milliseconds
  
  function typePhrase() {
    if (currentPhrase >= phrases.length) {
      currentPhrase = 0; // Reset to first phrase after the last one
    }
    
    if (currentChar < phrases[currentPhrase].length) {
      textElement.textContent += phrases[currentPhrase].charAt(currentChar);
      currentChar++;
      setTimeout(typePhrase, typingSpeed);
    } else {
      // Wait a bit before starting to type the next phrase
      setTimeout(() => {
        currentPhrase++;
        currentChar = 0;
        textElement.textContent = ''; // Clear the text content
        typePhrase(); // Start typing the next phrase
      }, 2000); // Adjust pause duration as needed
    }
  }
  
  // Initial call to start typing effect
  typePhrase();
  