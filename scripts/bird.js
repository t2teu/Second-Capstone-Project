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
        }, 2000); // Adjust the delay to match the CSS animation duration
    });
});