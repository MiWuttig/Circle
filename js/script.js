function bodyScroll() {
    let fromTop = window.scrollY;
    let head = document.querySelector("header");
    document.querySelectorAll("nav a").forEach(link => {
        
        if (link.hash != "#!") {
            let section = document.querySelector(link.hash);
            if (
                section.offsetTop <= (fromTop+100) &&
                section.offsetTop + section.offsetHeight > (fromTop+100)
                ) {
                link.classList.add("current");     
                
                let sec = document.querySelectorAll("section");
                for (i = 0; i < sec.length; i++) {
                    if (sec[i].id == section.id) {
                        if (i == 0) {
                            head.classList.add("firstSec")
                            head.classList.remove("evenSec")
                            head.classList.remove("oddSec")
                        } else if ((i % 2) == 0) {
                            head.classList.remove("firstSec")
                            head.classList.add("evenSec")
                            head.classList.remove("oddSec")
                        } else {
                            head.classList.remove("firstSec")
                            head.classList.remove("evenSec")
                            head.classList.add("oddSec")
                        }
                    }
                }
            } else {
                link.classList.remove("current");
            }
        }
    });
}

function CheckIt(switchGroup, switchItem) {
    switch (switchGroup) {
        case "contact":
            // Radiobutton to switch between contact and voucher formular
            var sec = document.getElementById("contact");
            // var item = sec.getElementById(switchItem);
            for (switches of sec.getElementsByTagName("h2")[0].getElementsByClassName("encircle")) {
                if (switches.id === switchItem) {
                    switches.classList.add("checked");
                } else {
                    switches.classList.remove("checked");
                    console.log(switchItem)
                };
            };
        break;
    };
}

function watchForHover() {
    // lastTouchTime is used for ignoring emulated mousemove events
    // that are fired after touchstart events. Since they're
    // indistinguishable from real events, we use the fact that they're
    // fired a few milliseconds after touchstart to filter them.
    let lastTouchTime = 0
  
    function enableHover() {
      if (new Date() - lastTouchTime < 500) return
      document.body.classList.add('hasHover')
    }
  
    function disableHover() {
      document.body.classList.remove('hasHover')
    }
  
    function updateLastTouchTime() {
      lastTouchTime = new Date()
    }
  
    document.addEventListener('touchstart', updateLastTouchTime, true)
    document.addEventListener('touchstart', disableHover, true)
    document.addEventListener('mousemove', enableHover, true)
  
    enableHover()
  }
  
  watchForHover()