//Pushing final changes
// Defines an array of sound names that match the audio files
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong', 'laugh', 'drumroll'];

// Defines background colors corresponding to each sound effect
const soundColors = {
    applause: '#FFD700',  // Gold
    boo: '#DC143C',       // Crimson
    gasp: '#FF4500',      // Orange Red
    tada: '#32CD32',      // Lime Green
    victory: '#1E90FF',   // Dodger Blue
    wrong: '#8B0000',     // Dark Red
    laugh: '#FF69B4',     // Hot Pink
    drumroll: '#8A2BE2'   // Blue Violet
};

// Selects the buttons container
const buttonsContainer = document.getElementById('buttons');

// Loops through each sound and create buttons dynamically
sounds.forEach((sound, index) => {
    // Creates a button element for each sound
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    // Applies a modified staircase effect (alternating left & right positioning)
    btn.style.position = "relative";
    btn.style.left = index % 2 === 0 ? `${index * 15}px` : `-${index * 15}px`;

    // Button Click Event Listener
    btn.addEventListener('click', () => {
        stopSounds(); // Stop any currently playing sounds
        document.getElementById(sound).play(); // Play the selected sound

        // Smoothly transition background color
        document.body.style.transition = "background-color 0.8s ease-in-out";
        document.body.style.backgroundColor = soundColors[sound] || '#000';

        // Displays enlarged sound name temporarily for user feedback
        btn.style.transform = "scale(1.15)";
        btn.classList.add("glow-effect");
        setTimeout(() => {
            btn.style.transform = "scale(1)";
            btn.classList.remove("glow-effect");
        }, 250);
    });

    // Appends the button to the container
    buttonsContainer.appendChild(btn);
});

// Function to stop all currently playing sounds
function stopSounds() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    });
}
