function toggle_visibility(id) {
    var e = document.getElementById(id);
    var a = document.getElementById("aboutwindow")
    var d = document.getElementById("devwindow")
//closing other window if open or not
    if (e == a) {
        d.style.display = "none";}
    else if (e == d) {
        a.style.display = "none";}
    else {
        e.style.display = "none";}
//toggling window open
    if (e.style.display == 'block') {
        e.style.display = 'none';}
    else {
       e.style.display = 'block';}
}