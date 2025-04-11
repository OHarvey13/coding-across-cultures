const spiderman = document.querySelector(".spiderman-container img");

const frames = [
    "images/spiderman-frames/frame-02.png",
    "images/spiderman-frames/frame-03.png",
    "images/spiderman-frames/frame-04.png"
];

let currentFrame = 0;

setInterval(() => {
    currentFrame = (currentFrame + 1) % frames.length;
    spiderman.src = frames[currentFrame];
}, 150); // Adjust the speed of the animation by changing the interval time
