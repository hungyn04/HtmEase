function fadeIn() {
    var modal = document.querySelector("modal");
    modal.style.animation="fade-in 0.5s both";
}
function headerResize() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var headerHeight = 15 - winScroll / 5
    if (headerHeight >= -5) {
        var hdh = headerHeight;
    } else {
        hdh = -5;
    }
    document.documentElement.style.setProperty('--header-height', hdh + "px");
    window.requestAnimationFrame(headerResize);
}
window.onbeforeunload = fadeIn;
headerResize();