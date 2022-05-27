
const links = document.querySelectorAll(".alternate-style"),
      totalLinks = links.length;

function setActiveStyle(color) {
  for (let i = 0; i < totalLinks; i++  ) {
    if (color === links[i].getAttribute("title")) {
      links[i].removeAttribute("disabled");
    } else {
      links[i].setAttribute("disabled", "true");
    }
  }
}

// Body Skins

const bodySkin = document.querySelectorAll(".body-skin"),
      totalBodySkin = bodySkin.length;
      
  for (let i = 0; i < totalBodySkin; i++) {
    bodySkin[i].addEventListener("change", function() {
      if (this.value === "dark") {
        document.body.className = "dark";
      } else {
        document.body.className = "";
      }
    })
  }


document.getElementById('toggle-style-switcher').addEventListener('click', () => {
  document.querySelector('.style-switcher').classList.toggle('open');
})


// sound effect

const klik = new Audio();
klik.src = "js/audio/bleep.mp3";

const klik1 = new Audio();
klik1.src = "js/audio/bleep2.mp3";

const klik2 = new Audio();
klik2.src = "js/audio/bleep3.mp3";

const klik3 = new Audio();
klik3.src = "js/audio/bleep5.mp3"

const klik4 = new Audio();
klik4.src = "js/audio/bleep6.mp3"