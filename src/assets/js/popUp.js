// Variables for text to split & characters of that split text
let text = new SplitType('#split');
let characters = document.querySelectorAll('.char');

// Get all characters 
for(i=0; i<characters.length; i++) {
    characters[i].classList.add('translate-y-full');
}

// Animation
gsap.to('.char', {
    y: -50,
    stagger: 0.05,
    delay: 0.05,
    duration: 0.5
});