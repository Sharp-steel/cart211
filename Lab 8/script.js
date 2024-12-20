// Initialize Audio Context and Oscillator
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const oscillator = audioContext.createOscillator();
const gainNode = audioContext.createGain();
const ambientSound = new Audio("eerie_forest.mp3");

// Set initial oscillator properties
oscillator.type = 'sine'; // Options: 'sine', 'square', 'sawtooth', 'triangle'
oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // Default frequency (A4)
oscillator.connect(gainNode);
gainNode.connect(audioContext.destination);
gainNode.gain.setValueAtTime(0.5, audioContext.currentTime); // Default volume

// Play Sound Button
document.getElementById("playSound").addEventListener("click", () => {
    ambientSound.loop = true;
    // ambientSound.volume = 0.2; // Set lower volume for background noise
    ambientSound.play();
    // oscillator.start();
    document.getElementById("playSound").disabled = true; // Disable play button after starting
});

// Volume Control Slider
document.getElementById("volumeControl").addEventListener("input", (event) => {
    gainNode.gain.setValueAtTime(event.target.value, audioContext.currentTime);
});

// Frequency Control (Pitch) Slider
document.getElementById("frequencyControl").addEventListener("input", (event) => {
    oscillator.frequency.setValueAtTime(event.target.value, audioContext.currentTime);
});

document.addEventListener("mousemove", (event) => { 
    const frequency = (event.clientX / window.innerWidth) * 600 + 200; 
    // Range between 200 and 800 Hz 
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime); });

// Reset Button to restore default settings
function resetSettings() {
    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime); // Reset volume
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // Reset frequency
    document.getElementById("volumeControl").value = 0.5;
    document.getElementById("frequencyControl").value = 440;
}

document.getElementById("resetButton").addEventListener("click", resetSettings);
