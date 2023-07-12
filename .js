document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.getElementsByClassName("neon-button");
    
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        this.classList.add("blink");
      });
    }
  });
  