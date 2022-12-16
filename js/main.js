function fadeIn() {
    var modal = document.querySelector("modal");
    modal.style.animation="fade-in 0.5s both";
}
window.onbeforeunload = fadeIn;