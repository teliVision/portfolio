// Change "hover" to "tap" on mobile
if (navigator.userAgentData.mobile) {
    for (let txt of document.getElementsByClassName('video-overlay-text')) {
        txt.innerHTML = '(Tap to play)'
    }
}

// All tiles play their inner video when hovered
document.querySelectorAll('.tile').forEach(function(tile) {
    tile.addEventListener('mouseover', function() {
        this.querySelector('video').play();
    });
    tile.addEventListener('mouseout', function() {
        this.querySelector('video').pause();
    });
});

window.addEventListener('scroll', function() {        // slight offset here \/    -without it the function doesn't get triggered on mobile
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-50) {
        document.querySelectorAll('.business-card').forEach(function(card) {
            card.classList.add('expanded');
        });
    } else {
        document.querySelectorAll('.business-card').forEach(function(card) {
            card.classList.remove('expanded');
        });
    }
});
