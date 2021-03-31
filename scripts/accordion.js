function accordion(id) {
    let x = document.getElementById(id);

    //if hide exists
    if(x.className.indexOf("hide") != -1) {
        x.classList.remove("hide");
    } else {
        x.className += " hide";
    }
}
