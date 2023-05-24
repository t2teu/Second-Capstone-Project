const linksWithBird = document.querySelectorAll('.link-with-bird');

linksWithBird.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const birdImage = document.createElement('img');
        birdImage.src = 'images/bird.png';
        birdImage.alt = 'Bird';
        birdImage.classList.add('bird-image');
        link.appendChild(birdImage);

        setTimeout(() => {
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

  // Add click event listeners to the red-square buttons
  var redSquareButtons = document.querySelectorAll(".img-fluid");
  redSquareButtons.forEach(function(button) {
    button.addEventListener("click", playFlySound);
  });