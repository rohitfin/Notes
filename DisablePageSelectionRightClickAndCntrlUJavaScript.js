//The functions disableselect() and reEnable() are used to return the status of events.

function disableselect(e) {
    return false
}

function reEnable() {
    return true
}

//if IE4+
// disable text selection
document.onselectstart = new Function("return false")

//if NS6
if (window.sidebar) {
    //document.onmousedown=disableselect
    // the above line creates issues in mozilla so keep it commented.

    document.onclick = reEnable
}

function clickIE() {
    if (document.all) {
        (message);
        return false;
    }
}
document.onkeydown = function (e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117 || e.keyCode === 116)) {//Alt+c, Alt+v will also be disabled sadly.
        // alert('not allowed');
    }
    return false;
};
// disable right click
document.oncontextmenu = new Function("return false")