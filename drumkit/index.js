let buttonNumber = document.querySelectorAll('.drum').length;

// Event listener for click (selecting all buttons on site)
for (let i = 0; i < buttonNumber; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    let buttonHTML = this.innerHTML;
    makeSound(buttonHTML);
    animateButton(buttonHTML);
  });
}


// Event listener for using keyboard (listens for any keydown event hence add event listener to all of document).
// The 'event' taps into the information of a user's key press. The .key characteristic gives the relevant info.
document.addEventListener('keydown', function (event) {
  makeSound(event.key);
  animateButton(event.key);
});

// Streamline code by making function that gives a case for each click OR keydown event.
function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      let crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      let kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    default: console.log(buttonHTML)
  }
};

function animateButton(event) {
  document.querySelector('.' + event).classList.add('pressed');

  setTimeout(function () {
    document.querySelector('.' + event).classList.remove('pressed');
  }, 100)

}
