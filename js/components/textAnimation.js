export default function textAnimation() {
    var typing = new Typed(".animatedText", {
        strings: ["", "LOTR.", "puzzles.", "dogs.", "food.", "gaming.", "reading.", "photography."],
        typeSpeed: 160,
        backSpeed: 80,
        loop: true,
    });
}