const backgroundMusic = document.getElementById("backgroundMusic");
const muteButton = document.getElementById("muteButton");
const muteIcon = document.getElementById("muteIcon");

/**
 * Plays the audio
 */

// Initialize `isMuted` and `currentTime` in localStorage if not already set
if (localStorage.getItem("isMuted") === null) {
  localStorage.setItem("isMuted", "false"); // Default to unmuted
}
if (localStorage.getItem("currentTime") === null) {
  localStorage.setItem("currentTime", "0"); // Default start time
}

// Load mute/unmute state from localStorage and set initial icon
const isMuted = localStorage.getItem("isMuted") === "true";
backgroundMusic.muted = isMuted;
muteIcon.src = isMuted ? "http://upload.wikimedia.org/wikipedia/commons/3/3f/Mute_Icon.svg" : "http://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg";

// Set audio position from last saved time, then play automatically
backgroundMusic.currentTime = parseFloat(localStorage.getItem("currentTime"));
backgroundMusic.play();

// Save current playback time to localStorage every second
setInterval(() => {
  localStorage.setItem("currentTime", backgroundMusic.currentTime);
}, 1000);

// Toggle mute/unmute and save the setting in localStorage
muteButton.addEventListener("click", () => {
  backgroundMusic.muted = !backgroundMusic.muted;
  localStorage.setItem("isMuted", backgroundMusic.muted);
  muteIcon.src = backgroundMusic.muted ? "http://upload.wikimedia.org/wikipedia/commons/3/3f/Mute_Icon.svg" : "http://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg";
});

/**
 * Page Transition
 */

  // Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Add the fade-in class to initiate the fade-in effect
    document.body.classList.add("fade-in");

    // Attach a click event listener to all links
    document.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function (event) {
        // Prevent the default link behavior
        event.preventDefault();

        // Remove the fade-in class and add fade-out to initiate fade-out effect
        document.body.classList.remove("fade-in");
        document.body.classList.add("fade-out");

        // Delay the page navigation to allow the fade-out to complete
        setTimeout(() => {
          // Redirect to the new page
          window.location.href = this.href;
        }, 500); // Match this to the CSS transition duration
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  // Define the secret code sequence
  const secretCode = "24";
  let inputSequence = "";

  // Listen for keypresses
  document.addEventListener("keydown", (event) => {
    inputSequence += event.key;

    // Trim input to the length of the secret code
    if (inputSequence.length > secretCode.length) {
      inputSequence = inputSequence.slice(-secretCode.length);
    }

    // Check if the input matches the secret code
    if (inputSequence === secretCode) {
      window.location.href = "/secret-ending.html";
    }
  });
});