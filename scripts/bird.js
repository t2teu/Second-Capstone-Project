const linksWithBird = document.querySelectorAll('.link-with-bird');

linksWithBird.forEach(link => {
  let birdAppended = false;

  link.addEventListener('click', (event) => {
    event.preventDefault();

    if (!birdAppended) {
      const birdImage = document.createElement('img');
      birdImage.src = 'images/bird.png';
      birdImage.alt = 'Bird';
      birdImage.classList.add('bird-image');
      link.appendChild(birdImage);

      birdAppended = true;
    }

    setTimeout(() => {
      playFlySound();
      window.location.href = link.href;
    }, 2000);
  });
});

function playFlySound() {
  const flySound = new Audio("images/fly.mp3");
  flySound.addEventListener("canplaythrough", function() {
    flySound.volume = 0.5;
    flySound.play();
  });
}


const redSquareButtons = document.querySelectorAll(".img-fluid");
redSquareButtons.forEach(function(button) {
  button.addEventListener("click", playFlySound);
});
