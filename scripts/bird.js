const linksWithBird = document.querySelectorAll('.link-with-bird');

linksWithBird.forEach(link => {
  let birdAppended = false; // Flag to track if the bird has been appended

  link.addEventListener('click', (event) => {
    event.preventDefault();

    if (!birdAppended) { // Check if the bird has not been appended yet
      const birdImage = document.createElement('img');
      birdImage.src = 'images/bird.png';
      birdImage.alt = 'Bird';
      birdImage.classList.add('bird-image');
      link.appendChild(birdImage);

      birdAppended = true; // Set the flag to indicate that the bird has been appended
    }

    setTimeout(() => {
      playFlySound(); // Play the fly sound
      window.location.href = link.href;
    }, 2000);
  });
});

function playFlySound() {
  var flySound = new Audio("images/fly.mp3");
  flySound.addEventListener("canplaythrough", function() {
    flySound.volume = 0.5;
    flySound.play();
  });
}


const redSquareButtons = document.querySelectorAll(".img-fluid");
redSquareButtons.forEach(function(button) {
  button.addEventListener("click", playFlySound);
});
