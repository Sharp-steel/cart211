const backgroundMusic = document.getElementById("backgroundMusic");
const muteButton = document.getElementById("muteButton");
const muteIcon = document.getElementById("muteIcon");

// Toggle mute/unmute and start playing if unmuted
muteButton.addEventListener("click", () => {
    if (backgroundMusic.muted) {
        backgroundMusic.muted = false;
        muteIcon.src = "http://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg"; // Path to the unmute icon
        backgroundMusic.play(); // Start playing music
    } 
    else {
        backgroundMusic.muted = true;
        muteIcon.src = "http://upload.wikimedia.org/wikipedia/commons/3/3f/Mute_Icon.svg"; // Path to the mute icon
        backgroundMusic.pause(); // Pause the music as it is muted
    }
});