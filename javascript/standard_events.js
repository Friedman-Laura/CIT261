function pageLoadPopup() {
    alert("Welcome! You are seeing this message because the page loaded.");
}

function hideOnClick() {
    this.className += " fade-out";
}

function onFadeOutEnd() {
    console.log("end.");
    this.style.display = "none";
}

function createDraggableCircle() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    console.log("w:", w, "h:", h);

    var draggable_circle        = document.createElement('div');
    draggable_circle.className  = "draggable-circle";
    draggable_circle.style.left = ((w / 2) - 25) + "px";
    draggable_circle.style.top  = ((h / 2) - 25) + "px";
    draggable_circle.ondrag     = handleDrag;
    draggable_circle.setAttribute('draggable', 'true');
    draggable_circle.addEventListener('touchmove', handleTouchMove);
    document.body.appendChild(draggable_circle);
}

function handleDrag(event) {
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate

    console.log("drag", x, y);

    if (x && y) {
        this.style.left = (x - 25) + "px";
        this.style.top  = (y - 25) + "px";
    }
}

function handleTouchMove(event) {
    var touch = event.targetTouches[0];

    // Place element where the finger is
    this.style.left = touch.clientX-25 + 'px';
    this.style.top = touch.clientY-25 + 'px';
    event.preventDefault();
}

function handleResize() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    console.log("w:", w, "h:", h);

    document.querySelector(".circle").style.left = ((w / 2) - 25) + "px";
    document.querySelector(".circle").style.top  = ((h / 2) - 25) + "px";
}

// window.onload = onPageLoad();

document.querySelector('#fade-out-on-click').onclick = hideOnClick;
document.querySelector('#fade-out-on-click').addEventListener('animationend', onFadeOutEnd);