let inoverlay = true;
document.addEventListener("click", function() {
    if(inoverlay == false) return;
    try{
        var inoverlay = document.getElementById("overlay");
        inoverlay.style.display = "none";
        document.getElementById("song").volume = 0.3;
        document.getElementById("song").play();
        inoverlay = false;
    } catch(e){
        inoverlay = false
        return;
    }
    
});
const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
