function fireConfetti() {
    // Fire multiple confetti bursts
    const count = 200;
    const defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio),
            spread: 60,
            startVelocity: 50,
        });
    }

    // Launch confetti in different colors and angles
    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}

function updateCountdown() {
    const targetDate = new Date('April 1, 2025 19:19:00 EDT');
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.querySelector('.countdown').innerHTML = `
            <h2 style="font-size: 1.8em; line-height: 1.4; color: #2c5282; font-weight: 600; margin: 20px;">
                Sen. Booker has now given the longest floor speech in Senate history, in support of the American people.
            </h2>
        `;
        fireConfetti();
        clearInterval(countdownInterval); // Stop the countdown
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Store interval ID so we can clear it later
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to avoid delay
updateCountdown(); 