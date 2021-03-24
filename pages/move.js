let moveDiv = document.getElementById('calcifer');

window.onmousemove = function (e) {
    let x = e.pageX;
    let y = e.pageY;

    moveDiv.style.top = (y * 0.1) + 'px';
    moveDiv.style.left = (x * 0.1) + 'px';
}