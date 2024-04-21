const messages = [
    "Are you sure? Bebuuuu",
    "Wehhh Bebuuu",
    "Why u keep clicking no bebuuuu",
    "Just say yes, bebuuu",
    "wehhh kulit ohhh bebuuu ",
    "IHHHHHHHHHHHHHH",
  ];

  
  
  let messageIndex = 0;

  function showDancingFerb() {
    const messageDiv = document.getElementById("message");
    messageDiv.innerHTML = `
      <p>Yay! I Love youuu bebuuu mwaaaaa</p>
      <img src="https://media1.tenor.com/m/jkUOvPkzkLUAAAAC/ferb-dancing.gif" alt="Ferb Dancing">
    `;
  }
  
  function showMessages() {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Increase the button size each time the "No" button is pressed
    increaseButtonSize();
  }
  
  function increaseButtonSize() {
    const yesBtn = document.getElementById("yesBtn");
    let yesFontSize = window.getComputedStyle(yesBtn).getPropertyValue('font-size');
    yesFontSize = parseFloat(yesFontSize);
    yesBtn.style.fontSize = (yesFontSize + 6) + "px";
  
    const noBtn = document.getElementById("noBtn");
    let noFontSize = window.getComputedStyle(noBtn).getPropertyValue('font-size');
    noFontSize = parseFloat(noFontSize);
    noBtn.style.fontSize = (noFontSize - 3) + "px";
  }
  