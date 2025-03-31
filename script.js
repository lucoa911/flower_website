// This function sets up the "Can I peck you?" game.
function showPeckPage() {
    document.body.innerHTML = `
      <h1>Can I peg you? 🐥</h1>
      <button onclick="peckYes()">Yes</button>
      <button onclick="peckNo()">No</button>
    `;
  }
  
  // If the user clicks "Yes", show the happy image.
  function peckYes() {
    document.body.innerHTML = `
      <h1>💋 Mwah! I LOVE YOU </h1>
      <img src="images/happy.png" alt="Happy Image" width="250">
    `;
  }
  
  // If the user clicks "No" the first time, show the sad image with "Think again..."
  function peckNo() {
    document.body.innerHTML = `
      <h1>Think again... 🤔</h1>
      <img src="images/sad.png" alt="Sad Image" width="250">
      <br>
      <button onclick="peckYes()">Yes</button>
      <button id="movingNo" onclick="activateMovingNo()">No</button>
    `;
  }
  
  // When the user clicks "No" on the "Think again" page, we activate a moving "No" button.
  function activateMovingNo() {
    // Recreate the layout with a moving "No" button
    document.body.innerHTML = `
      <h1>Think again... 🤔</h1>
      <img src="images/sad.png" alt="Sad Image" width="250">
      <br>
      <button onclick="peckYes()">Yes</button>
      <button id="movingNo" onmouseover="moveNo()">No</button>
    `;
  }
  
  // This function moves the "No" button to a random position on the screen.
  function moveNo() {
    let noBtn = document.getElementById("movingNo");
    if (noBtn) {
      let x = Math.random() * (window.innerWidth - 100);
      let y = Math.random() * (window.innerHeight - 50);
      noBtn.style.position = "absolute";
      noBtn.style.left = `${x}px`;
      noBtn.style.top = `${y}px`;
    }
  }
